import { graphql, PageProps } from "gatsby"
import * as React from "react"

const Category = ({ data }) => {
  const posts = data?.allWpPost?.edges

  return (
    <div>
      {posts?.map(({ node }) => (
        <div key={node?.id}>
          <h2>{node?.title}</h2>
          <img
            src={
              node?.featuredImage?.node?.localFile?.childImageSharp?.fluid?.src
            }
            alt=""
          />
          <div dangerouslySetInnerHTML={{ __html: node?.content }} />
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query ($uri: String!) {
    wpCategory(uri: { eq: $uri }) {
      id
      name
      uri
      # Add any other fields you want to use in the template
    }
  }
`

export default Category
