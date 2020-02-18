import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'

const Category = (props) => {

  const cats = props.data.wordpressCategory

  return (
    <Layout extraClass={cats.slug}>
      <div className="container">
        <h1>{cats.name}</h1>
      </div>
    </Layout>
  )
}

export default Category

export const pageQuery = graphql`
  query CategoryPage {
    wordpressCategory{
        slug
        name
    }
  }
`
