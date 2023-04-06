import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostSidebar from "../components/post-sidebar/post-sidebar"

const Post = ({ data }) => {
  const post = data.wpPost

  console.log("data", data)
  return (
    <Layout>
      <div
        className="single-post-hero-wrapper"
        style={{
          background: `url(${post?.featuredImage?.node?.localFile?.childImageSharp.fluid.src})`,
        }}
      >
        <div>
          <h1>{post.title}</h1>
        </div>
      </div>
      <div className="single-post-content-wrapper ">
        <div>
          <div dangerouslySetInnerHTML={{ __html: post?.content }} />
        </div>
        <div>
          {" "}
          <PostSidebar />
        </div>
      </div>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query PostQuery($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
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
`
