import React, { useState,useMemo } from "react";
import './App.css'

function App() {
  const [weight,setWeight] = useState(50)
  const [height,setHeight] = useState(125)

  const bmi = useMemo(()=>
  { 
    var heightinmeter =  height/100;
    return (weight/((heightinmeter)*(heightinmeter))).toFixed(1);

   },[weight,height])
  return (
    <div id="mainbox" >
       <h1 id="heading" > BMI Calculator</h1>
       <div id="secondbox">
            <h3>Weight : {weight + " kg"}</h3>
        <input type="range" step={0.1} min="10" max="100" value={weight} className="slider" onChange={(e)=>setWeight(e.target.value)} />
            <h3>Height : {height + " cm"} </h3>
        <input type="range" step={0.1} min="30" max="250" value={height} className="slider" onChange={(e)=>setHeight(e.target.value)} />
         <p><b> Your BMI </b> </p>
         <div id="bmi">{bmi}</div>
       </div>
    </div>
  );
}

export default App;
