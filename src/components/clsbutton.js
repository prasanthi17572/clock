import React, { Component } from 'react'
import Btndata from './btndata';
import './clsbutton.css'
export default class clsbutton extends Component {
    constructor(props){
        super(props);
        this.state={count:0,
        count1:12,
        count2:1.2};
    }
    add=()=>{
     this.setState({
      count:this.state.count+1
     })
    }
    sub=()=>{
      this.setState({
        count:this.state.count-1
      })
    }
  render() {
    return (
     <>
     <div className='b1'>
      <p className="p">Text</p>
      <button  className="btn" onClick={this.add}>+</button>
      <p>{this.state.count}</p>
      <button className='btn' onClick={this.sub}>-</button>
      </div>
      <hr></hr>
            </>
    )
  }
}


// import React, { Component } from 'react'

// export default class counter extends Component {
//     constructor(props){
//         super(props);
//         this.state={count:0};
//     }
//     incre=()=>{
//         this.setState({
//             count:this.state.count+1
//         })
//     }
//   render() {
//     return (
//         <>
//         <p>{this.state.count}</p>
//       <button onClick={this.incre}>click me</button>
//       </>
//     )
//   }
// }
