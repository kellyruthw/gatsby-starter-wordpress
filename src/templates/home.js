import React from "react"

import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ServiceBox from "../components/ServiceBox"
import Button from "../components/Button"
import CarouselClient from "../components/CarouselClients"
import Slider from "react-slick";

import iconChair from "../assets/images/icon-event-medical-coordinator.svg"
import iconDiver from "../assets/images/icon-scuba-rescue.svg"
import iconMedic from "../assets/images/icon-set-medic.svg"
import iconSafety from "../assets/images/icon-safety-sup.svg"
import iconLifeguard from "../assets/images/icon-lifeguard.svg"
import codyFoldedArms from "../assets/images/cody-vlach-folded-arms.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndexPage = (props) => {

  const pageData = props.data.wordpressPage
  const seoData = props.data.wordpressPage.yoast_wpseo
  const settings2 = {
    dots: true,
    centerMode: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows:false
        }
      },
    ]
  }

  return(
    <Layout extraClass="home" pageId={pageData.wordpress_id}>
      <SEO
        title={seoData.title}
        description={seoData.metadesc}
      />
      <div className="banner">
          <div className="container">
              <div className="copy">
                <h1><span className="italic-red">los angeles</span>Set Medic &<br />Water Rescue Diver</h1>
                <p className="introtxt">Set Medic Providing life support and safety supervision
    for the entertainment industry in Los Angeles and beyond.</p>
                <Button
                    link="/request-rates"
                    title="Request Rates"
                />
              </div>
            </div>
      </div>
      <div className="services">
          <div className="container">
              <div className="copy">
                  <h2 className="white">Our Services</h2>
                  <p className="white">We understand how difficult it can be to find set medic talent. We’ve currated the highest-rated medics in Los Angeles County, who not only guarentee excellent safety and medical knowledge, but also will fit in and engage with your crew.</p>
              </div>
            <ServiceBox
                demand="High Demand"
                link="/services/set-medic"
                icon={iconMedic}
                title="Union Set Medic"
                copy="Our cerdified paramedics can provide first aid & emergency medical assistance for your entire cast & crew"
            />
            <ServiceBox
                demand="High Demand"
                link="/services/scuba-rescue-safety-diver/"
                icon={iconDiver}
                title="Scuba Rescue Safety Diver"
                copy="Our PADI-certified scuba rescue divers take charge under water to monitor safety and prevent problems for all participants."
            />
            <ServiceBox
                link="/services/event-medical-coordinator"
                icon={iconChair}
                title="Event Medical Coordinator"
                copy="We manage medical resource requests that meet Los Angeles County requirements for large and small events."
            />
            <ServiceBox
                link="/services/lifeguard"
                icon={iconLifeguard}
                title="Lifeguard"
                copy="Our top-notch lifeguards allow your production to film efficiently and ensure your pool or ocean safety needs."
            />
            <ServiceBox
                link="/services/safety-supervisor"
                icon={iconSafety}
                title="Safety Supervisor"
                copy="Our set Safety Supervisors manage crew safety and comply with OSHA health standards for the job site risks."
            />
          </div>
      </div>
      <div className="promise">
          <div className="container">
            <img src={codyFoldedArms} className="cody-arms" />   
            <div className="copy">
                <h2>My Paramedic Promise</h2>
                <p>With years of experience working EMS as a certified medic, I’m Cody Vlach, and I’m here to assist you with your safety needs on set. I guarantee that my crew and I will not only provide medical solutions, but also give undivided compassion and respect to every patient that we treat. My crew is rated as some of the top set medics in Los Angeles County, and we’re known for having excellent work ethics, engaging personalities, and medical mindsets.</p>
                <p>We care about your crew, and we’re prepared for every possible outcome.</p>
                <Button
                    link="/certifications"
                    title="View Certifications"
                />
            </div>
          </div>
      </div>
      <div className="client-carousel">
          <div className="contain">
            <CarouselClient />
          </div>
      </div>
      <div className="testimonialCTA">
          <div className="container">
              <div className="copy">
                <h2>No Job Too Big or Too Small</h2>
                <p>Whether we’re filming on a busy location in Hollywood or in the chilly Malibu waters, safety always comes first with every client. Check out my past clients who feel confident and secure due to having a certified Los Angeles Set Medic on duty.</p>
                <Button
                    link="/clients"
                    title="View Clients"
                />
              </div>
          </div>
      </div>
      <div className="image-carousel">
        <Slider {...settings2}>
            {pageData.acf.carousel.map((photo) => (
                <div>
                    <img src={photo.image.source_url} alt={photo.image.alt_text} />
                </div>
            ))}        
        </Slider>
      </div>
    </Layout>
  )
}

export default IndexPage

export const homeQuery = graphql`
    query homePageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            yoast_wpseo {
                title
                metadesc
                metakeywords
            }
            wordpress_id
            acf {
                carousel {
                  image {
                    alt_text
                    source_url
                  }
                }
            }
        }
    }
`