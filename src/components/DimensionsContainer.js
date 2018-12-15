import React from "react";
import DimensionsText from "./DimensionsText";

class DimensionsContainer extends React.Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  componentDidMount() {
    console.log(this.state.width);
    console.log(this.state.height);
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () =>
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  render() {
    return (
      <DimensionsText width={this.state.width} height={this.state.height} />
    );
  }
}

export default DimensionsContainer;
