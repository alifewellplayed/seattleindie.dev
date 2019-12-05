import Image from "../components/image"
import React from "react"
import SvgLogo from "../components/logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons"
import { ScrollTo } from "react-scroll-to"


const colorArray = [
  "yellow-purple",
  "blue-red",
  "pink-yellow",
  "purple-blue",
  "green-blue",
];

class Header extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: "blue-red",
    }
  }

  componentDidMount() {
    let colorPos = 0
    setInterval(() => {
      if (colorArray.length - 1 > colorPos) {
        this.setState({
          color: colorArray[colorPos],
        })
        colorPos++
      } else {
        this.setState({
          color: colorArray[colorPos],
        })
        colorPos = 0
      }
    }, 3800)
  }

  changeColor(e) {
    this.setState({
      color: e.target.value,
    })
  }

  mainRef = React.createRef()

  render() {
    // console.log(this.state);
    const sectionColor = this.state.color

    return (
      <>
        <div className={`section intro mb-5 ${sectionColor}`}>
          <div className={"container"}>
            <header
              className={"home-hero row justify-content-end"}
              style={{ paddingTop: "42vh" }}
            >
              <div className={"col-5 text-right"}>
                <h1 className={"text-right mb-0 text-uppercase title h1"}>
                  SeattleIndie.Dev
                </h1>
              </div>
              <div className={"col-1"}>
                <div style={{ maxWidth: "50px" }}>
                  <SvgLogo />
                </div>
              </div>
            </header>
          </div>
          <div className={"scroll-to text-center"}>
            <ScrollTo>
              {({ scrollTo }) => (
                <button
                  type="button"
                  className={"btn btn-link"}
                  onClick={() =>
                    scrollTo({ ref: this.mainRef, y: 200, smooth: true })
                  }
                >
                  <FontAwesomeIcon icon={faAngleDoubleDown} />
                </button>
              )}
            </ScrollTo>
          </div>
        </div>
        <div ref={this.mainRef}>My Element</div>
      </>
    )
  }
}

export default Header