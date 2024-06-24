import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);


  const addValue=()=>{
    counter +=1;
    if(counter>20){
      alert('MAX REACHED');
      return;
    }
    setCounter(counter);
  }

  const removeValue=()=>{
    counter-=1;
    if(counter<0) {
      alert('MIN REACHED');
      return;
    }
    setCounter(counter);
  }
  return (
    <>

      <h1>Learn With Roshan</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br /> <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
