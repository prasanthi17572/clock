// import React ,{Component} from 'react'
// class Clock extends Component {
//     componentDidMount() {
//         setInterval(() => {
//             this.getTime();
//         })
//     }
//     constructor() {
//         super();
//         this.state = {
//             time: "00:00:00:AM",
//         }
//     }
//     getTime() {
//         setInterval(() => {
//             let date = new Date();
//             let hour = date.getHours();
//             let minute = date.getMinutes();
//             let seconds = date.getSeconds();
//             let ampm = this.hour >= 12 ? 'AM' : 'PM';
//             hour = hour % 12;
//             hour = hour ? hour : 12;
//             hour = fullTime(hour);
//             minute = fullTime(minute);
//             seconds = fullTime(seconds); 
//             this.setState({
//                 time: hour % 12 + ":" + minute + ":" + seconds + " " + ampm,
//             });
//             function fullTime(n) 
//             { return n < 10 ? "0" + n : n }

//         }, 1000);
//     }
//     render() {
//         return (
//             <div className="container">
//                 <h1>{this.state.time}</h1>
//             </div>
//         );
//     }
// };
// export default Clock;







 import React, { Component } from "react";
import './clock.css';
export default class Digital extends Component {
  constructor(props) {
    super(props);
     this.state = { sec:0,
    mins:0,hours:0};
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState({ sec: this.state.sec + 1 });
    },100);
  }
  componentDidUpdate(){
    if(this.state.sec==60){
      this.setState({ mins: this.state.mins + 1 ,sec:0});
    }
    if(this.state.mins==60){
      this.setState({ hours: this.state.hours + 1 ,mins:0});
    }
    if(this.state.hours==24){
      this.setState({hours:0});
    }
    if(this.state.hours>=12){
      this.setState({meridian:'PM'});
    }
  }
  render() {
    return (
      <>
            <div className="c">{this.state.hours}:{this.state.mins}:{this.state.sec}{this.state.meri}</div>

      </>
    );
  }
}


