import React, { useState } from "react"
import { graphql } from "gatsby"
import BlogCard from "../blog-card/blog-card"

type CardData = {
  id: number
  title: string
  imageSrc: string
  description: string
}

const BlogPosts = ({ data }) => {
  const posts = data?.allWpPost?.edges

  console.log(posts)
  const [cardsToShow, setCardsToShow] = useState<CardData[]>(
    posts?.slice(0, 10)
  )
  const [numCardsToShow, setNumCardsToShow] = useState<number>(10)

  const handleLoadMore = () => {
    setCardsToShow(posts?.slice(0, numCardsToShow + 10))
    setNumCardsToShow(numCardsToShow + 10)
  }

  return (
    <div>
      {cardsToShow?.map(post =>
        //    <BlogCard
        //    imageSrc={
        //      post?.node?.featuredImage?.node?.localFile?.childImageSharp
        //        ?.fluid?.src
        //    }
        //    link={post?.node.uri}
        //    title={post?.node.title}
        //    description={"Read More"}
        //  />
        console.log(post)
      )}
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  )
}

export default BlogPosts

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
