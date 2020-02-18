const _ = require('lodash')
const path = require('path')
const slash = require(`slash`)

const queryWordPressGatsbyConfig = `
  {
    wordpressGatsbyConfig {
      per_page
      front_page
      posts_page
    }
  }
`

const queryWordPressPages = `
  {
    allWordpressPage (filter: { status: { eq : "publish" } }) {
      edges {
        node {
          id
          wordpress_id
          slug
          template
        }
      }
    }
  }
`

const queryWordPressPosts = `
  {
    allWordpressPost (filter: { status: { eq : "publish" } }) {
      edges {
        node {
          id
          wordpress_id
          slug
          template
        }
      }
    }
  }
`

const queryWordPressCategories = `
  {
    allWordpressCategory {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
`
const queryWordPressServices = `
  {
    allWordpressWpServices {
      edges {
        node {
          id
          wordpress_id
          slug
        }
      }
    }
  }
`


const pageTemplate = path.resolve(`./src/templates/page.js`)
const homeTemplate = path.resolve(`./src/templates/home.js`)
const servicesTemplate = path.resolve(`./src/templates/services.js`)
const serviceTemplate = path.resolve(`./src/templates/service.js`)
const postTemplate = path.resolve(`./src/templates/post.js`)
const blogTemplate = path.resolve(`./src/templates/blog.js`)
const categoryTemplate = path.resolve(`./src/templates/category.js`)

exports.createPages = ({ graphql, boundActionCreators }) => {

    let config;
    const { createPage } = boundActionCreators;

    return new Promise((resolve, reject) => {

        graphql(queryWordPressGatsbyConfig)

            .then(r => {
                if (r.errors) {
                    console.log(r.errors);
                    reject(r.errors);
                }
                return r.data.wordpressGatsbyConfig;
            })

            .then(config => {

                return graphql(queryWordPressPages).then(r => {
                    if (r.errors) {
                        console.log(r.errors);
                        reject(r.errors);
                    }
                    _.each(r.data.allWordpressPage.edges, edge => {
                        createPage({
                            path: edge.node.wordpress_id === config.front_page ? '/' : edge.node.slug,
                            component: (
                              () => {
                                  if (edge.node.wordpress_id === config.posts_page) {
                                      return slash(blogTemplate);
                                  } else if (edge.node.wordpress_id === 7) {
                                      return slash(homeTemplate);
                                  } else if (edge.node.wordpress_id === 8) {
                                    return slash(servicesTemplate);
                                } 
                                  return slash(pageTemplate);
                              }
                            )(),
                            context: {
                                id: edge.node.id,
                                wordpress_id: edge.node.wordpress_id
                            }
                        });
                    });
                })
                .then(r => {
                    return graphql(queryWordPressPosts).then(r => {
                        if (r.errors) {
                            console.log(r.errors);
                            reject(r.errors);
                        }
                        _.each(r.data.allWordpressPost.edges, edge => {
                            createPage({
                                path: edge.node.slug,
                                component: slash(postTemplate),
                                context: {
                                    id: edge.node.id,
                                    wordpress_id: edge.node.wordpress_id
                                }
                            });
                        });
                    });
                })
                .then(r => {
                  return graphql(queryWordPressServices).then(r => {
                      if (r.errors) {
                          console.log(r.errors);
                          reject(r.errors);
                      }
                      _.each(r.data.allWordpressWpServices.edges, edge => {
                          createPage({
                            path: `/services/${edge.node.slug}/`,
                              component: slash(serviceTemplate),
                              context: {
                                  id: edge.node.id,
                                  wordpress_id: edge.node.wordpress_id
                              }
                          });
                      });
                  });
              })
                .then(r => {
                    return graphql(queryWordPressCategories).then(r => {
                        if (r.errors) {
                            console.log(r.errors);
                            reject(r.errors);
                        }
                        _.each(r.data.allWordpressCategory.edges, edge => {
                            createPage({
                                path: edge.node.slug,
                                component: slash(categoryTemplate),
                                context: {
                                    id: edge.node.id,
                                    wordpress_id: edge.node.wordpress_id
                                }
                            })
                        });

                    });

                })
                .then(r => {
                    resolve();
                })

            });

    });

};