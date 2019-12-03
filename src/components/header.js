import { Link } from "gatsby"
import Image from "../components/image"
import React from "react"

const colorArray = [
  "#ed1953", // Red
  "#7cd1e4", //lightblue
  "#f38bb4", //Pink
  "#f4ed24", //yellow
  "#95d1af", // green
  "#3e60ad" // Purple
];

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: "#7cd1e4"
    };
  }

   componentDidMount() {
     let colorPos = 0;
     setInterval(() => {
       if(colorArray.length - 1 > colorPos) {
         this.setState({
           color : colorArray[colorPos]
         });
         colorPos++;
       } else {
         this.setState({
           color : colorArray[colorPos]
         });
         colorPos = 0;
       }
     }, 3500)
   }

  changeColor(e) {
    this.setState({
      color: e.target.value
    })
  }

  render() {
    // console.log(this.state);
    const stylesObj = {
      background: this.state.color
    };

    return (
      <div className={"section intro"} style={stylesObj}>
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
    )
  }
}

export default Header