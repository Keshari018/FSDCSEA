import React from 'react'
import Student from './Student';

function App() {
  let a =12;
  const mystyle={
    backgroundColor:'red',
    color:'cyan'
  }
  
  return (
    <div style={mystyle}>ABES Engineering College
    <div style={mystyle}>{a}</div>
    <div style={{color:'blue',backgroundColor:'cyan'}}>
      <Student college="ABES Engineering College" name="Nitin Keshari" roll="2200320100111" branch="CSE" section="A" admission="2022b0101174"/>
    </div>
  </div>
    
  )
}

export default App