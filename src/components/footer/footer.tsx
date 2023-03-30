import React from "react"
import Logo from "../logo"
import "./footer.scss"

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-logo-nav-wrapper">
          <div>
            <Logo />
          </div>
          <div>Footer Nav Menu</div>
          <div>Copyright info</div>
        </div>
        <div className="footer-social-container">
          <div className="social-icons-container">
            <p>icon</p>
            <p>icon</p>
            <p>icon</p>
          </div>
          <div className="">
            <p>App Store</p>
            <p>Play Store</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
