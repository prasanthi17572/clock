import React, { useState } from 'react';
const Counter = () => {
  const [count,changeCount] = useState(0);
  const [name,changeName]=useState("prasanthi");
  const Students=[
    {
        id:1,
        name:'prasanthi',
        place:'kkd'
    },
    {
        id:2,
        name:'visalakshi',
        place:'rjy'
    }
   ]
   const[studentlst,changelst]=useState(Students);
  const incre=()=>{
    changeCount(count+1);
  }
//   const cname=()=>{
//     changeName("visalakshi");
//   }
  return (
    <>
      <h1>count:{count}</h1>
      <button onClick={incre}>click me to increment</button>
      {/* <button onClick={()=>changeCount(count+1)}>click me</button> */}
      <h1>name:{name}</h1>
      <button onClick={()=>changeName("visalakshi")}>change name</button>
      <div>{
        studentlst.map((item)=>{
            return(
                <h3 key={item.id}>{item.name}</h3>
            )
            
        })
        }</div>
     <button onClick={()=>{changelst([])}}>click me</button>

    </>
  );
};
export default Counter;