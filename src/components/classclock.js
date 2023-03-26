import React, { Component } from "react";
import './clock.css';
export default class Classclock extends Component {
  constructor(props) {
    super(props);
     this.state = {clock:[]};
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({clock:new Date().toLocaleTimeString()});
    },1000);
  }
  render() {
    return (
      <>
            <div className="c">{this.state.clock}</div>
      </>
    );
  }
 }

