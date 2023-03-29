import React from "react"
import { graphql } from "gatsby"

const BlogPage = ({ data }) => {
  const posts = data.allWpPost.edges

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post?.id}>
            {post?.node.title}
            {console.log("posts", post)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogPage

export const query = graphql`
  query {
    allWpPost {
      edges {
        node {
          id
          date
          title
        }
      }
    }
  }
`
