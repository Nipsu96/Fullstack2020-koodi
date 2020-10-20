import React, { useState, useEffect } from 'react';
import './App.css';

//JSX
function App() {
   //array destructuring
   const [Brutto, setBrutto] = useState(0);
   const [Vero, setVero] = useState(0);
   const [Veronmäärä, setVeronmäärä] = useState(0);
    useEffect(()=>{
       let verokoko= Brutto*Vero/100
     setVeronmäärä(verokoko);
     },[Brutto,Vero])
   

   const palkkaMuuttunut = (event) => {
     setBrutto(event.target.value)
   }
 
   const veroMuuttunut = (event) => {
     setVero(event.target.value)
   }
   
  return (
    <div>
      Höööö :D <br /><br />
  
      <input onChange={(event) => palkkaMuuttunut(event)} value={Brutto}></input><br/>
      <input onChange={(event) => veroMuuttunut(event)} value={Vero}></input><br/>
      <p>Veron määrä on: {Veronmäärä}</p>
    </div>
  );
}

export default App;
