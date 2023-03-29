import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "./hamburger-menu.module.scss"
import myStyle from "./menu.module.scss"

const HamburgerMenu = ({ menuLinks }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button
        // className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
        onClick={handleMenuClick}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  )
}

export default HamburgerMenu
