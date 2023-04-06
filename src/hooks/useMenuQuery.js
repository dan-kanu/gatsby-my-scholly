import { useStaticQuery, graphql } from "gatsby"

const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      wpMenu(id: { eq: "dGVybTo0ODAz" }) {
        id
        name
        menuItems {
          nodes {
            uri
            title
            label
            parentId
            id
          }
        }
      }
    }
  `)

  return data
}

export default useMenuQuery
