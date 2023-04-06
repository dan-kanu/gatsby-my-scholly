import * as React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"

import "./header.scss"
import HamburgerMenu from "../hamburger-menu/hamburger-menu"
import useMenuQuery from "../../hooks/useMenuQuery"
import Logo from "../logo/logo"

const Header = ({ siteTitle }) => {
  const menu = useMenuQuery()
  const location = useLocation()

  console.log("Menu", menu)
  return (
    <header className="header-wrapper">
      <div className="header-inner-container">
        <div className="header-content-wrapper">
          <div>
            <Logo />
          </div>
          <div className="nav-container">
            <ul className="header-desktop-nav-menu">
              {menu?.wpMenu.menuItems.nodes.map((menu, index) => {
                return (
                  <li>
                    <Link
                      to={menu?.uri}
                      className={
                        location.pathname === menu?.uri ? "active" : ""
                      }
                    >
                      {menu?.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <Link>Login</Link>
              <Link>Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
