import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import Pagination from '../components/Pagination'

const Blog = (props) => {

  const posts = props.data.allWordpressPost

return(
  <Layout>
    <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Blog</h1>
          </div>
          {props.data.allWordpressPost.edges.map((p) => (
            <div className="content" key={p.node.wordpress_id} >
              <p>
                <a className="has-text-primary" href={p.node.slug}>
                  {p.node.title}
                  {p.node.categories.map(( cat ) => (
                    <div className="category">
                      <a href={cat.slug}>{cat.name}</a>
                    </div>
                  ))}
                </a>
              </p>
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: p.node.excerpt,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
  </Layout>
  )
}

export default Blog

export const blogQuery = graphql`
  query BlogQuery{
    allWordpressPost (filter: { status: { eq : "publish" } }) {
      edges {
        node {
          title
          date
          wordpress_id
          categories {
            slug
            name
          }
          featured_media {
            source_url
            alt_text
          }
        }
      }
    }
  }
`
