import React from "react"
import PropTypes from "prop-types"
import "./blog-card.scss"
import { Link } from "gatsby"

type CardProps = {
  title: string
  imageSrc: string
  description: string
  link: string
}

const BlogCard: React.FC<CardProps> = ({
  title,
  imageSrc,
  description,
  link,
}) => {
  return (
    <div className="blog-card-container">
      <div className="blog-card-image-container">
        <img
          src={
            imageSrc ||
            "https://myscholly.com/wp-content/uploads/2023/03/Group-18532.png"
          }
          alt={title}
          className="blog-card-image"
        />
      </div>
      <div className="blog-card-content">
        <p className="blog-card-title">{title}</p>

        <Link className="blog-card-description" to={link}>
          Read Full Article
        </Link>
      </div>
    </div>
  )
}

export default BlogCard
