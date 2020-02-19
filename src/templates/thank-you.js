import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Button from "../components/Button"

const ThankYou = (props) => {
  const pageData = props.data.wordpressPage
  const seoData = props.data.wordpressPage.yoast_wpseo

  return(
    <Layout extraClass="thank-you generic" pageId={pageData.wordpress_id}>
        <SEO
            title={seoData.title}
            description={seoData.metadesc}
        />
        <div className="container">
            <div className="copy">
              <h1>Thanks for reaching out.</h1>
              <p>Cody will be in touch asap.</p>
              <p>(Or just text him at <a href="661-992-0517" className="red">661-992-0517)</a></p>
              <Button
                    link="/"
                    title="Back to Home"
                />
            </div>
        </div>
        
    </Layout>
  )
}

export default ThankYou

export const thankyouQuery = graphql`
    query thankspageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) { 
            yoast_wpseo {
                title
                metadesc
                metakeywords
            }
            wordpress_id
        }
    }
`
