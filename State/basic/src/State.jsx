import React, { useState } from "react";
function ChildComponent({message}){
    return <h2>info:{message}</h2>
  }
  function ParentComponent(){
    const [count, setCount] = useState(0);
    const[message, setMessage] = useState("info");
    const increase = () => setCount(count + 1);
    const changeMessage = () => setMessage("info update");

    return(
      <div style={{padding:20, color:"#a643d7ff"}}>
        <h1>state</h1>
        <h3>state:{count}</h3>
        <button onClick={increase}>zo</button>
        <hr />
        <ChildComponent message={message}/>
        <button onClick={changeMessage}>change</button>
      </div>
    );
  }
  export default ParentComponent;