import React, { useState } from 'react';
import './App.css';

//JSX
function App() {
//array destructuring
  const [Laskuri,setLaskuri]=useState(0);

  const nappiaPainettu= () =>{
    setLaskuri(Laskuri+1)
    console.log(Laskuri)
  }
  return (
    <div>
      Höööö :D
      <button onClick={nappiaPainettu}>Jee {Laskuri}</button>
    </div>
  );
}

export default App;
