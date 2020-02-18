import React from "react"

import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BannerIntro from "../components/BannerIntro"
import Divider from "../components/Divider"


const CertificationsPage = (props) => {

  const pageData = props.data.wordpressPage
  const seoData = props.data.wordpressPage.yoast_wpseo

  return(
    <Layout extraClass="certifications" pageId={pageData.wordpress_id}>
      <SEO
        title={seoData.title}
        description={seoData.metadesc}
      />
      <BannerIntro 
            image={pageData.acf.banner_image.source_url}
            alttxt={pageData.acf.banner_image.alt_text}
            headline={pageData.title}
            introtxt={pageData.acf.cert_copy}
        /> 
        <Divider />
        <div className="container">
            <div className="cert-list grid-6"
                dangerouslySetInnerHTML={{
                    __html: pageData.acf.cert_list,
                }} 
            />
            <div className="img-text">
                <div className="fancy-text italic-red">
                    {pageData.acf.image_text}
                </div>
                <img src={pageData.acf.cert_right_image.source_url} alt={pageData.acf.cert_right_image.alt_text} />
            </div>
        </div>
        

    </Layout>
  )
}

export default CertificationsPage

export const certsQuery = graphql`
    query certpageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) { 
            yoast_wpseo {
                title
                metadesc
                metakeywords
            }
            wordpress_id
            title
            acf {
                cert_copy
                image_text
                cert_right_image {
                    alt_text
                    source_url
                  }
                cert_list
                banner_image {
                    alt_text
                    source_url
                }
            }
        }
    }
`
