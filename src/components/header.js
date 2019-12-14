import React from "react"
import SvgLogo from "../components/logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons"
import ScrollIntoView from "react-scroll-into-view"

const colorArray = ["yellow-purple", "blue-red", "pink-yellow", "purple-blue", "green-blue"]

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
        <div className={`section intro ${sectionColor}`}>
          <div className={"container"}>
            <header className={"home-hero row justify-content-end"} style={{ paddingTop: "42vh" }}>
              <div className={"col-md-5 text-right"}>
                <h1 className={"text-right mb-0 text-uppercase title h1"}>SeattleIndie.Dev</h1>
              </div>
              <div className={"col-md-1 text-md-left text-right"}>
                <div className="mt-3 mt-md-0 ml-auto mr-0" style={{ maxWidth: "50px" }}>
                  <SvgLogo />
                </div>
              </div>
            </header>
          </div>
          <div className={"scroll-to text-center"}>
            <ScrollIntoView selector="#scrolled">
              <button type="button" className={"btn btn-link"}>
                <FontAwesomeIcon icon={faAngleDoubleDown} />
              </button>
            </ScrollIntoView>
          </div>
        </div>
      </>
    )
  }
}

export default Header
