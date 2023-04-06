import React from "react"
import { graphql } from "gatsby"
import BlogCard from "../components/blog-card/blog-card"
import Layout from "../components/layout"
import BlogPosts from "../components/blog-posts/blog-posts"

const BlogPage = ({ data }) => {
  const posts = data.allWpPost.edges

  return (
    <Layout>
      <h1>Scholly’s Scholarship and College Finance Blog</h1>
      <div className="blog-container">
        {posts.map(post => {
          return (
            <BlogCard
              imageSrc={
                post?.node?.featuredImage?.node?.localFile?.childImageSharp
                  ?.fluid?.src
              }
              link={post?.node.uri}
              title={post?.node.title}
              description={"Read More"}
            />
          )
        })}
      </div>
      <div></div>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query {
    allWpPost {
      edges {
        node {
          title
          id
          uri
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
