import React from 'react';
const Button = () => {
    // const clicked=()=>{
    //     console.log(" u clicked me");
    // }
    // return (
    //     <div>
    //        <button onClick={clicked}>Click me</button> 
    //     </div>
    // );
    //we can write in the following way whenever u have only one line to write
    return(
        <div>
            <button onClick={()=>{console.log("s u clicked me")}}>click me</button>
        </div>
    )
};
export default Button;