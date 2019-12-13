import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import Image from "../components/image"
import Background from "../components/background"
import { ReactTypeformEmbed } from "react-typeform-embed"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="fullpage">
      <Header />

      <div id="scrolled" className="content section py-5 mb-5">
        <div className="container">
          <div className="inner-container">
            <h2
              className="emphasis h4 py-4"
              style={{
                borderTop: "1px solid #333",
                borderBottom: "1px solid #333",
              }}>
              <strong>SeattleIndie.Dev</strong> is a community for people making video games.
            </h2>
            <div className="main-content">
              <p>
                We're building a community and publishing resources to help indie developers grow their base. We're currently in a closed beta right now. If you are a small studio or individual looking share your game or think you could provide useful resources, then request
                access using the form below!
              </p>
              <p className={"mt-5"}>
                You can always send us an email too: <a href="mailto:hello@seattleindie.dev">hello @ seattleindie.dev</a>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="content section pb-5">
        <div className="container">
          <div className="inner-container">
            <div className="main-content">
              <div
                style={{
                  height: "200px",
                  position: "relative",
                }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
