import React, { Component } from "react";
export default class counter extends Component {
  constructor(props) {
    console.log("i am constructor so i executed 1st");
    super(props);
    this.state = { count: 0 };
    //by calling constructor the numbers are incremented automatically
    // setInterval(()=>{
    //     this.setState({count:this.state.count+1});
    //    },1000);
  }
  // incre=()=>{
  //     this.setState({count:this.state.count+1});
  // }

  //didmount is executed after 1st render
  componentDidMount() {
    console.log("i am did mount i will execute after the 1st render");
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  //didupdate checks after every increment i.e after everytime when render occurs
  componentDidUpdate(){
    console.log("i am didupdate");
    if(this.state.count==10){
       alert("i stopped as count reached 10")
    }
  }
//render is executed after constructor
  render() {
    console.log("i am render");
    return (
      <>
        <p>{this.state.count}</p>
        {/* <button onClick={this.incre}>click me</button> */}
        <button>click me</button>

      </>
    );
  }
}
