import {useState} from 'react'
import React from "react";
import './../styles/App.css';

const App = () => {
  const [numbers,setNumbers]=useState([])
  const [sum,setSum]=useState(0);
  let addRemoveHandler=(e)=>{
      let number=parseInt(e.target.value);
      if(isNaN)
      {
        return;
      }
      let sign=number>=0?1:-1;
      let absoluteNumber=Math.abs(number);
      let newSum=number+absoluteNumber*sign;
      setNumbers([...numbers,number])
      setSum(newSum);

  }
  return (
    <div>
        <h1>Sum Calculator</h1>
        <input type="number" onChange={addRemoveHandler}/>
        <p>Sum:{sum}</p>
    </div>
  )
}

export default App
