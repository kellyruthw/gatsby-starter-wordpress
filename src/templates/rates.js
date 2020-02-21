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
                <h1>Let's Work Together</h1>
                <p className="intro-text" dangerouslySetInnerHTML={{ __html: pageData.content}} />
                <Form />
            </div>
            <div className="sub-message">
                <h4>Need a quick response? Send Cody a text!</h4>
                <span><a href="tel:661-992-0517">661-992-0517</a></span>
                <span><a href="mailto:info@setmedicla.com">info@setmedicla.com</a></span>
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
            content
        }
    }
`
