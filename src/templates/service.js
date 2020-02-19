import React from "react"

import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Button from "../components/Button"
import BannerIntro from "../components/BannerIntro"
import Divider from "../components/Divider"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Service = (props) => {

    const pageData = props.data.wordpressWpServices
    const seoData = props.data.wordpressPage.yoast_wpseo

  return(
    <Layout extraClass="service">
        <SEO
            title={seoData.title}
            description={seoData.metadesc}
        />
        <BannerIntro 
            image={pageData.acf.banner_image.source_url}
            alttxt={pageData.acf.banner_image.alt_text}
            headline={pageData.title}
            introtxt={pageData.acf.copy}
        /> 
        <Divider />
        <div className="production-types">
            <div className="container">
                <h2>{pageData.acf.headline_2}</h2>
                <Button
                    link="/request-rates"
                    title="Request Rates"
                /> 
                <div className="all-productions">
                    {pageData.acf.production.map((prod) => (
                    <div className="production">
                        <h3>{prod.name}</h3>
                        <p>{prod.copy}</p>
                    </div>
                    ))}
                </div>
                <img src={pageData.acf.right_image.source_url} alt={pageData.acf.right_image.alt_text} className="right-img" />
                <ul className="other-prods">
                    <li>Sporting Events</li>
                    <li>Private Parties</li>
                    <li>Marathons</li>
                    <li>Gameshows</li>
                    <li>Celebrity Events</li>
                    <li>& More!</li>
                </ul>
            </div>
        </div>
        <Divider />
        <div className="featured-services">
            <div className="container">
            <h2>Featured Services</h2>
            <div className="contain">
            {props.data.allWordpressWpServices.edges.map((pie2) => (
                <a href={`/services/${pie2.node.slug}`} className="service hvr-bob"> 
                    <img src={pie2.node.acf.icon.source_url} alt={pie2.node.acf.icon.alt_text} />
                    <h3>{pie2.node.title}</h3>
                    <p>{pie2.node.acf.small_blurb}</p>
                    <p className="red hover hover-1">Learn More</p>
                </a>
            ))}
            </div>
            <Button
                link="/services"
                title="View all services"
            />
        </div>
    </div>
    </Layout>
  )
}

export default Service

export const singleServiceQuery = graphql`
query singleServiceQuery($id: String!) {
    wordpressPage{ 
        yoast_wpseo {
            title
            metadesc
        }
    }
    allWordpressWpServices(limit: 4) {
        edges {
          node {
            title
            slug
            acf {
              small_blurb
              icon {
                alt_text
                source_url
              }
            }
          }
        }
      }
      allWordpressWpKits {
        edges {
          node {
            title
            acf {
            button_link {
                title
                url
            }
            kit_copy
            kit_image {
                alt_text
                source_url
            }
            kit_item {
                image {
                alt_text
                source_url
                }
                link
                name
            }
            }
          }
        }
      }
    wordpressWpServices(id: { eq: $id }) {
        wordpress_id
        title
        acf {         
          banner_image {
            alt_text
            source_url
          }
          button_link
          button_name
          copy
          headline_2
          production {
            copy
            name
          }
          right_image {
            alt_text
            source_url
          }
        }
    }
}
`