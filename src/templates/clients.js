import React from "react"

import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BannerIntro from "../components/BannerIntro"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Clients = (props) => {

    const pageData = props.data.wordpressPage
    const seoData = props.data.wordpressPage.yoast_wpseo

  return(
    <Layout extraClass="clients" pageId={pageData.wordpress_id}>
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
        <div className="clients-list">
            <div className="container">
                <Tabs>
                    <TabList>
                        {pageData.acf.production_types.map((type) => (
                        <Tab>
                            <h4>{type.name}</h4>
                        </Tab>
                        ))}
                    </TabList>
                    {pageData.acf.production_types.map((type) => (
                        <TabPanel>
                            <div className="grid-12 main-info"
                                dangerouslySetInnerHTML={{
                                    __html: type.list,
                                }} 
                            />
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </div>
    </Layout>
  )
}

export default Clients

export const clientsQuery = graphql`
    query clientpageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) { 
            yoast_wpseo {
                title
                metadesc
                metakeywords
            }
            wordpress_id
            title
            acf {
                copy
                production_types {
                    list
                    name
                }
                banner_image {
                    alt_text
                    source_url
                }
            }
        }
    }
`


