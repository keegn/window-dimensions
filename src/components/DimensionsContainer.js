import React from "react";
import DimensionsText from "./DimensionsText";

class DimensionsContainer extends React.Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  componentDidMount() {
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
