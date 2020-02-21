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
const certsTemplate = path.resolve(`./src/templates/certifications.js`)
const aboutTemplate = path.resolve(`./src/templates/about.js`)
const ratesTemplate = path.resolve(`./src/templates/rates.js`)
const clientsTemplate = path.resolve(`./src/templates/clients.js`)
const thanksTemplate = path.resolve(`./src/templates/thank-you.js`)

exports.createPages = ({ graphql, actions }) => {

    let config;
    const { createPage } = actions;

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
                                  } else if (edge.node.wordpress_id === 11) {
                                    return slash(certsTemplate);
                                  } else if (edge.node.wordpress_id === 260) {
                                    return slash(aboutTemplate);
                                  } else if (edge.node.wordpress_id === 37) {
                                    return slash(ratesTemplate);
                                  } else if (edge.node.wordpress_id === 13) {
                                    return slash(clientsTemplate);
                                  } else if (edge.node.wordpress_id === 192) {
                                    return slash(thanksTemplate);
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