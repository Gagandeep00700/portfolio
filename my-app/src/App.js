import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
function App() {
const [COUNTER,setCOUNTER]=useState(0)
      function count(){
       let value=isNaN(document.getElementById('input').value) || document.getElementById('input').value==null;
       console.log(value)
       if(value){
         value=0
       }
       else{
         value=parseInt(document.getElementById('input').value)
       }
        setCOUNTER(COUNTER+value)
      }
     function reset(){
        setCOUNTER(0)
        document.getElementById('input').value=""
      }
  return (
    <>
    <div className="App">
      <h1  className="bg"><i>EN</i>COUNTER</h1>
      <input type="text" placeholder="enter 1 click plus count" id="input"/>
      <button onClick={count}>CLICK ME</button>
      <h5 onClick={reset}>reset</h5>
      <p>YOU CLICKED <mark>{COUNTER}</mark> TIMES</p>
     </div>
     <div class="container" popover>
       heelp
     </div>
    </>
  );
}

export default App;
