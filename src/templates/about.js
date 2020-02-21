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
            <p>Cody Vlach is a certified Paramedic with 12 years experiences within the medical field. He began his career as a Federal Firefighter traveling the country aiding those in need. His compassion for people led his to acquire his Paramedic License through Los Angeles City Fire Department shortly after becoming a Medical Instructor and EMT for local hospitals. During this period of 8 years on the ambulance he worked part time as a Football Medic studying sports medicine and nutrition.</p>
            <p>After his time on the ambulance, his career led him to Hollywood as a Union (Local 80) Set Medic/Scuba Rescue Diver/Lifeguard. Throughout the years, Cody has consistently worked with clients around the world, such as Netflix, Apple, HBO, and Target. His desire to strive for continuing his medical capabilities has led him to become an Event Medical Coordinator and Safety Supervisor. Cody holds a degree in Fire Science from College of the Canyons and multiple other degrees and licenses from UCLA, Bakersfield and El Camino college. Throughout his professional career he has trained as an amateur bodybuilder, Scuba cave diver, Nutritionist, and SAG Actor.</p>
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
            content
        }
    }
`
