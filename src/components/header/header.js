import * as React from "react"
import { Link } from "gatsby"

import "./header.scss"
import HamburgerMenu from "../hamburger-menu/hamburger-menu"

const Header = ({ siteTitle }) => (
  <header className="header-wrapper">
    <div className="header-inner-container">
      <div>
        <div>Logo</div>
        <div>Nav Menu</div>
      </div>
      <div>Search</div>
    </div>
  </header>
)

export default Header
