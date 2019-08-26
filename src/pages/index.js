import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import Background from "../components/background"
import { ReactTypeformEmbed } from "react-typeform-embed"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="fullpage">
      <div className={"section intro"}>
        <Background
          alt="Seattle Space Needle"
          filename="_site_background.jpg"
        />
        <div className={"container"}>
          <header
            className={"home-hero row justify-content-end"}
            style={{ paddingTop: "40vh" }}
          >
            <div className={"col-5 text-right"}>
              <h1 className={"text-right mt-3 mb-0 text-uppercase"}>
                SeattleIndie.Dev
              </h1>
            </div>
            <div className={"col-1"}>
              <div style={{ maxWidth: "50px" }}>
                <Image alt="SeattleIndie.Dev" filename="logo.png" />
              </div>
            </div>
          </header>
        </div>
      </div>

      <div className="content section py-5">
        <div className="container">
          <div className="inner-container">
            <p className="emphasis">
              <strong>SeattleIndie.Dev</strong> is a community for people making
              video games.
            </p>
            <div className="main-content">
              <p>
                We're building a community and publishing resources to help indie developers grow their base. We're currently in a closed beta right now. If you are a
                small studio or individual looking share your game or think you
                could provide useful resources, then request access here using
                the form below!
              </p>
              <p className={"mt-5"}>
                You can always send us an email too:{" "}
                <a href="mailto:hello@seattleindie.dev">
                  hello @ seattle.indie.dev
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="content section pb-5">
        <div className="container">
          <div className="inner-container">
            <div className="main-content">
              <div style={{
                height: '200px',
                position: 'relative'
              }}>
                <ReactTypeformEmbed url="https://seattleindiedev.typeform.com/to/WM496C" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </Layout>
)

export default IndexPage
