import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Button from "../components/Button"
import emsShield from '../assets/images/ems-shield.svg'

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
                <img src={emsShield} className="shield" />
                <div className="copy">
                    <h2>Available for Hire 24/7 in Greater Los Angeles County</h2>
                    <Button
                        link="/request-rates"
                        title="Request Rates"
                    />
                </div>
                <nav className="menu">
                    <ul className="nav">
                        {data &&
                        data.allWordpressWpApiMenusMenusItems &&
                        data.allWordpressWpApiMenusMenusItems.edges &&
                        data.allWordpressWpApiMenusMenusItems.edges[0] &&
                        data.allWordpressWpApiMenusMenusItems.edges[0].node &&
                        data.allWordpressWpApiMenusMenusItems.edges[0].node.items &&
                        data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
                            prop => {
                            return (
                                <li className="nav-item">
                                <a
                                    href={prop.url}
                                    alt={prop.title}
                                >
                                    {prop.title}
                                </a>
                                </li>
                            )
                            }
                        )}
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