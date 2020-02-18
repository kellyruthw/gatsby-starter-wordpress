import React from "react"

import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BannerIntro from "../components/BannerIntro"

const Services = (props) => {

    const pageData = props.data.wordpressPage.acf.services
    const serviceData = props.data.allWordpressWpServices

  return(
    <Layout extraClass="services">
       <BannerIntro 
            image={pageData.banner_image.source_url}
            alttxt={pageData.banner_image.alt_text}
            headline={pageData.headline_1}
            introtxt={pageData.intro_text}
        />    
        <div className="container">
            <div className="overview">
                <div className="copy">
                    <p>{pageData.copy}</p>
                </div>
                <img src={pageData.right_image.source_url} alt={pageData.right_image.alt_text} />
            </div>
            <div className="all-services">
                {serviceData.edges.map((pie) => (
                    <>
                      {pie.node.acf && (
                        <a href={`/services/${pie.node.slug}`} className="service">
                                <img src={pie.node.acf.icon.source_url} alt={pie.node.acf.icon.alt_text} />
                                <h2>{pie.node.title}</h2>
                                <p>{pie.node.acf.blurb}</p>
                                <p className="red">Learn More</p>
                            </a>
                      )}
                    </>
                ))}
            </div>
        </div>
        <div className="footer-image">
            <img src={pageData.footer_image.source_url} alt={pageData.footer_image.alt_text} />
        </div>
        
    </Layout>
  )
}

export default Services

export const servicesQuery = graphql`
    query servicesQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            yoast_meta {
              yoast_wpseo_title
              yoast_wpseo_metadesc
            }
            wordpress_id
            acf {
                services {
                    banner_image {
                        source_url
                        alt_text
                    }
                    copy
                    headline_1
                    intro_text
                    right_image {
                        source_url
                        alt_text
                    }
                    footer_image{
                        source_url
                        alt_text
                    }
                }
            }
        }
        allWordpressWpServices {
            edges {
              node {
                slug
                title
                acf {
                      blurb
                      icon {
                        alt_text
                        source_url
                      }
                    }
              }
            }
        }
    }
`


