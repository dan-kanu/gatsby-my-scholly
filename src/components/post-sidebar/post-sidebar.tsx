import React from "react"
import { graphql, useStaticQuery } from "gatsby"

type CategoryData = {
  id: string
  name: string
  parentId: string
  uri: string
}

type QueryData = {
  allWpCategory: {
    edges: {
      node: CategoryData
    }[]
  }
}

const PostSidebar: React.FC = () => {
  const data = useStaticQuery<QueryData>(graphql`
    query {
      allWpCategory {
        edges {
          node {
            id
            name
            parentId
            uri
          }
        }
      }
    }
  `)

  const categories = data.allWpCategory.edges.map(edge => edge.node)

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <a href={category.uri}>{category.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostSidebar
