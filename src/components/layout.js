/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import "./layout.css"
import Footer from "./footer/footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="layout-container">
      <div className="layout-content">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div
          style={{
            padding: `var(--size-gutter)`,
          }}
        >
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
