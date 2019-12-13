/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <footer
        className={"py-4 text-center site-footer"}
        style={{
          backgroundColor: "#fff",
          color: "#333",
          position: "relative",
          zIndex: "10",
        }}>
        © {new Date().getFullYear()} <a href="https://alifewellplayed.com">A Life Well Played</a>, All rights reserved.
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
