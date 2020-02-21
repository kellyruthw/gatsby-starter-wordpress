import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Button from "../components/Button"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpApiMenusMenusItems(
          filter: { slug: { eq: "locations" } }
        ) {
          edges {
            node {
              slug
              name
              items {
                title
                url
                object_slug
                wordpress_children {
                  title
                  url
                }
                classes
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <>
        <footer>
            <div className="container">
                <div className="copy">
                    <h2>Available for Hire 24/7 in Greater Los Angeles County</h2>
                    <Button
                        link="/request-rates"
                        title="Request Rates"
                    />
                </div>
                <nav className="menu">
                    <ul className="nav">
                      <li className="nav-item">Los Angeles</li>
                      <li className="nav-item">Santa Monica</li>
                      <li className="nav-item">Long Beach</li>
                      <li className="nav-item">Malibu</li>
                      <li className="nav-item">Downtown LA</li>
                      <li className="nav-item">Valencia</li>
                      <li className="nav-item">Hollywood</li>
                      <li className="nav-item">Antelope Valley</li>
                      <li className="nav-item">San Diego</li>
                      <li className="nav-item">Marina Del Rey</li>
                      <li className="nav-item">Culver City</li>
                      <li className="nav-item">& More</li>
                    </ul>
                </nav>
            </div>
        </footer>  
        <div className="copyright">
            <div className="container">
                <p>© 2020 Cody Vlach | Set Medic LA</p>
            </div>
        </div>
        </>
      )
    }}
  />
)