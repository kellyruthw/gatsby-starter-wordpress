import React from "react"

import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BannerIntro from "../components/BannerIntro"

const Services = (props) => {

    const serviceData = props.data.wordpressPage.acf.services
    const seoData = props.data.wordpressPage.yoast_wpseo
    const pageData = props.data.wordpressPage

  return(
    <Layout extraClass="services" pageId={pageData.wordpress_id}>
        <SEO
            title={seoData.title}
            description={seoData.metadesc}
        />
       <BannerIntro 
            image={serviceData.banner_image.source_url}
            alttxt={serviceData.banner_image.alt_text}
            headline={pageData.title}
            introtxt={serviceData.intro_text}
        />    
        <div className="container">
            <div className="overview">
                <div className="copy">
                    <p>{serviceData.copy}</p>
                </div>
                <img src={serviceData.right_image.source_url} alt={serviceData.right_image.alt_text} />
            </div>
            <div className="all-services">
                {props.data.allWordpressWpServices.edges.map((pie) => (
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
            <img src={serviceData.footer_image.source_url} alt={serviceData.footer_image.alt_text} />
        </div>
        
    </Layout>
  )
}

export default Services

export const servicesQuery = graphql`
    query servicesQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            yoast_wpseo {
                title
                metadesc
                metakeywords
            }
            title
            wordpress_id
            acf {
                services {
                    banner_image {
                        source_url
                        alt_text
                    }
                    copy
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


