import React from "react"

import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Form from "../components/Form"

const ThankYou = (props) => {

    const pageData = props.data.wordpressPage
    const seoData = props.data.wordpressPage.yoast_wpseo

  return(
    <Layout extraClass="thank-you rates" pageId={pageData.wordpress_id}>
        <SEO
            title={seoData.title}
            description={seoData.metadesc}
        />
        <div className="container">
           <h1>Thanks!</h1>
        </div>
        
    </Layout>
  )
}

export default ThankYou

export const thanksQuery = graphql`
    query thankspageQuery($id: String!) {
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
