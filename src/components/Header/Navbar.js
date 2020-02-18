import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpApiMenusMenusItems(
          filter: { slug: { eq: "primary" } }
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
                  object_slug
                  object
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
        <nav className="menu">
          <ul className="nav flex-column">
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
                        className={prop.classes}
                        href={`/${prop.object_slug}`}
                        alt={prop.title}
                      >
                        {prop.title}
                      </a>
                      <div className="sub-menu">
                        {prop &&
                          prop.wordpress_children &&
                          prop.wordpress_children.map(child => {

                            return (
                              <a
                                className="dropdown-item"
                                href={`/${child.object}/${child.object_slug}`}
                                alt={child.title}
                              >
                                {child.title}
                              </a>
                            )
                          })}
                      </div>
                    </li>
                  )
                }
              )}
          </ul>
        </nav>
      )
    }}
  />
)