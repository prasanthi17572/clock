import React, { Component } from "react";
import './clock.css';
export default class Digital extends Component {
  constructor(props) {
    super(props);
     this.state = { sec: 0,
    mins:0,hours:0,meridian:'AM' };
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



//  import React, { Component } from "react";
// import './clock.css';
// export default class Digital extends Component {
//   constructor(props) {
//     super(props);
//      this.state = { sec: 0,
//     mins:0,hours:0,meridian:'AM' };
//   }
  
//   componentDidMount() {
//     setInterval(() => {
//       this.setState({ sec: this.state.sec + 1 });
//     },100);
//   }
//   componentDidUpdate(){
//     if(this.state.sec==60){
//       this.setState({ mins: this.state.mins + 1 ,sec:0});
//     }
//     if(this.state.mins==60){
//       this.setState({ hours: this.state.hours + 1 ,mins:0});
//     }
//     if(this.state.hours==24){
//       this.setState({hours:0});
//     }
//     if(this.state.hours>=12){
//       this.setState({meridian:'PM'});
//     }
//   }
//   render() {
//     return (
//       <>
//             <div className="c">{this.state.hours}:{this.state.mins}:{this.state.sec}{this.state.meri}</div>

//       </>
//     );
//   }
// }


