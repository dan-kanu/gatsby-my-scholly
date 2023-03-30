import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    {
      wpMediaItem(slug: { eq: "Scholly Logo" }) {
        localFile {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  //   const fluid = data.wpMediaItem.localFile.childImageSharp.fluid
  console.log("image", data)
  return (
    <div>
      {/* <Img fluid={data.wpMediaItem?.localFile?.childImageSharp.fluid} /> */}
    </div>
  )
}

export default Logo
