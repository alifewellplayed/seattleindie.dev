import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="fullpage">
      <Header />

      <div id="scrolled" className="content section">
        <div className="container">
          <div className="inner-container inner-main py-5">
            <h2
              className="emphasis h4 py-4 px-md-5 mt-md-5"
              style={{
                borderTop: "2px solid #333",
                borderBottom: "2px solid #333",
              }}>
              <span role="img" aria-label="Space Invader Emoji">
                👾
              </span>{" "}
              <strong>SeattleIndie.Dev</strong> is a community for people making video games.
            </h2>
            <div className="main-content px-md-5">
              <p>SeattleIndie.Dev is a community designed for the members of the video game industry.</p>
              <p>Showcase your yourself, and your work. Connect with other developerss, share feedback, and find inspiration for your next game. Get noticed for your hard work, and find others doing just as amazing things as you.</p>
            </div>

            <h2
              className="emphasis h4 py-4 px-md-5 mt-md-5"
              style={{
                borderTop: "2px solid #333",
                borderBottom: "2px solid #333",
              }}>
              <span role="img" aria-label="Computer Emoji">
                💻
              </span>{" "}
              <strong>SeattleIndie.Dev</strong> is a community for game hackers.
            </h2>

            <div className="main-content px-md-5">
              <p>But we're not just stopping at creating games. We want to you help you learn how to hack them too.</p>
              <p>
                All of us in the industry started somewhere. More often than not, that was hacking and modding games we loved to play as kids. Today, we have tools like Cheat Engine, as well as various other memory editors and hex editors, but the community isn’t the same. And
                the barrier to entry is higher than ever. There aren’t great tutorials or resources on hacking or modifying games anymore.
              </p>

              <p>
                We want to change that. We are creating a community for finding and sharing resources, whether it’ s in the form of written tutorials, videos, or git repositories allowing modders and game hackers the ability to show off their work, in a safe and legal way. While
                at the same time, preserving the history that lead us here; showcasing everything from chat bots to game mods and everything in between.
              </p>

              <p>No matter what stage you are in you're career, whether you're just starting out, or a senior excutive at a large studio, everyone is here to learn, grow, and make connections!</p>
            </div>

            <h2
              className="emphasis h4 py-4 px-md-5 mt-md-5"
              style={{
                borderTop: "2px solid #333",
                borderBottom: "2px solid #333",
              }}>
              <span role="img" aria-label="Sparkling Heart Emoji">
                💖
              </span>{" "}
              Help us build something, together.
            </h2>

            <div className="main-content px-md-5">
              <p>So what exactly is SeattleIndie about?</p>
              <p className="emphasis col-md-10 px-0">We're building a community and publishing resources to help indie developers grow their base.</p>

              <p>We're currently in a closed beta right now. If you are a small studio or individual looking share your game, or think you could provide useful resources to others, then request access using the forms below!</p>

              <div className="row pt-md-4">
                <div className="col-md-9 mb-5">
                  <div className="py-4 px-4" style={{ border: "2px solid #333" }}>
                    <h6 className="text-uppercase emphasis mb-2">Submit research</h6>
                    <p>Do you have a research project? Maybe a tutorial about game hacking or modding? Maybe you just want to share a fun, harmless glitch you discovered. We'd love to help share it, and give you the regognition it deserves!</p>
                    <a className="btn btn-primary" href="https://seattleindiedev.typeform.com/to/eJWvZT">
                      Submit via Typeform
                    </a>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="py-2 px-2 px-md-4 py-md-4" style={{ border: "2px solid #333" }}>
                    <h6 className="text-uppercase emphasis mb-2">Submit your game</h6>
                    <p>Working on a video game? Just starting out and want to share your progress? Even better. We'd love to showcase your progress and give your game the recgognizipon it deserves within a supportive, positive community.</p>
                    <a className="btn btn-primary" href="https://seattleindiedev.typeform.com/to/WM496C">
                      Submit via Typeform
                    </a>
                  </div>
                </div>
              </div>

              <p className={"mt-5"}>
                Forms aren't your thing? You can always send us an email too: <a href="mailto:hello@seattleindie.dev">hello @ seattleindie.dev</a>.
              </p>
            </div>

            <h2
              className="emphasis h4 py-4 px-md-5 mt-md-5"
              style={{
                borderTop: "2px solid #333",
                borderBottom: "2px solid #333",
              }}>
              <span role="img" aria-label="Sad face Emoji">
                🥺
              </span>{" "}
              But Im Not in Seattle!
            </h2>

            <div className="main-content px-md-5">
              <p>That's okay! We're just starting with a small group first, and will expand when the time is right.</p>

              <p>Priority is given to those who we can potentially meet up with, and get a first hand account of what their process is like, and potentially event document them along their growth!</p>

              <p>If you're just starting out or just want to lurk, no matter where you are, we still want you to be part of the community! Sign up for the newsletter to stay up to date and find out when we launch!</p>
              <div className="row">
                <div className="col-md-8">
                  <div className="py-2 px-2 px-md-4 py-md-4" style={{ border: "2px solid #333" }}>
                    <form
                      style={{
                        border: "1px solid# ccc",
                      }}
                      className="form-inline"
                      action="https://tinyletter.com/seattleindiedev"
                      method="post"
                      target="popupwindow"
                      onsubmit="window.open('https://tinyletter.com/seattleindiedev', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
                      <input
                        type="text"
                        style={{
                          width: "100%",
                          maxWidth: "280px",
                        }}
                        name="email"
                        className="form-control mr-3"
                        placeholder="Your Email"
                        id="email"
                        aria-label="Enter your email address"
                      />
                      <input type="hidden" value="1" name="embed" />
                      <button className="btn btn-primary" type="submit">
                        Subscribe
                      </button>
                    </form>
                    <small>
                      <a href="https://tinyletter.com" target="_blank" rel="noopener noreferrer">
                        Powered by TinyLetter
                      </a>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
