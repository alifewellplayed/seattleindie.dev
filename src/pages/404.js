import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div id="scrolled" className="content section">
        <div className="container">
          <div className="inner-container inner-main py-5 px-md-5">
            <h1>NOT FOUND</h1>
            <p>Sorry about that.</p>
          </div>
        </div>
    </div>
  </Layout>
)

export default NotFoundPage
