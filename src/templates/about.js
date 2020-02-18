import React from "react"

import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const AboutPage = (props) => {

  const pageData = props.data.wordpressPage
  const seoData = props.data.wordpressPage.yoast_wpseo

  return(
    <Layout extraClass="about" pageId={pageData.wordpress_id}>
      <SEO
        title={seoData.yoast_wpseo_title}
        description={seoData.yoast_wpseo_metadesc}
      />
      <div className="container">
        <div className="copy">        
            <h1>{pageData.title}</h1>
            <p
            dangerouslySetInnerHTML={{ __html: pageData.acf.about_copy}}
            />
            </div> 
        </div>
    </Layout>
  )
}

export default AboutPage

export const aboutQuery = graphql`
    query aboutpageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) { 
            yoast_wpseo {
                title
                metadesc
                metakeywords
            }
            wordpress_id
            title
            acf {
                about_copy
            }
        }
    }
`
