import React from "react"

import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Form from "../components/Form"

const RatesPage = (props) => {

    const pageData = props.data.wordpressPage
    const seoData = props.data.wordpressPage.yoast_wpseo

  return(
    <Layout extraClass="rates" pageId={pageData.wordpress_id}>
        <SEO
            title={seoData.title}
            description={seoData.metadesc}
        />
        <div className="container">
            <div className="form">
                <div className="thanks">
                    Thanks! We'll be in touch!
                </div>
                <h1>Let's Work Together</h1>
                <p className="intro-text">
                    {pageData.acf.rates.copy}
                </p>
                <Form />
            </div>
            <div className="sub-message">
                <h4>{pageData.acf.rates.submessage.headline}</h4>
                <span><a href={`tel:${pageData.acf.rates.submessage.phone_number}`}>{pageData.acf.rates.submessage.phone_number}</a></span>
                <span><a href={`mailto:${pageData.acf.rates.submessage.email_address}`}>{pageData.acf.rates.submessage.email_address}</a></span>
            </div>
        </div>
        
    </Layout>
  )
}

export default RatesPage

export const ratesQuery = graphql`
    query ratespageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) { 
            yoast_wpseo {
                title
                metadesc
                metakeywords
            }
            wordpress_id
            title
            acf {
                rates {
                  copy
                  submessage {
                    email_address
                    phone_number
                    headline
                  }
                }
              }
        }
    }
`
