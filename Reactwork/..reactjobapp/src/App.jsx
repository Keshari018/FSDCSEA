import React from 'react'
import Student from './Student';
import logo from './abeslogo.png'
import StudentState from './StudentState';

function App() {
//   let a =12;
//   const mystyle={
//     backgroundColor:'red',
//     color:'cyan'
//   }
//   const studentData=[{
//     college:"ABES Engineering College",
//     pic:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
//     name:"Nitin Keshari",
//     roll:"2200320100111",
//     branch:"CSE",
//     section:"A",
//     admission:"202b0101174"
//   },
//   {
//     college:"AKG Engineering College",
//     pic:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
//     name:"Nicky",
//     roll:"2200320100106",
//     branch:"CSE",
//     section:"A",
//     admission:"202b0101084"
//   }
// ]
  return (
  //   <div style={mystyle}>ABES Engineering College
  //   <div style={mystyle}>{a}</div>
  //   <div style={{color:'blue',backgroundColor:'cyan',display:'flex'}}>
  //     <Student data={studentData[0]}/>
  //     <Student data={studentData[1]}/>

  //     {/* <Student pic={<img src={logo} height={150} width={150}/>} name="Nitin Keshari" roll="2200320100111" branch="CSE" section="A" admission="2022b0101174"/>
  //     <Student college="ABES Engineering College" pic={<img src={logo} height={150} width={150}/>} name="Nitin Keshari" roll="2200320100112" branch="CSE" section="A" admission="2022b0101174"/>
  //     <Student college="ABES Engineering College" pic={<img src={logo} height={150} width={150}/>} name="Nitin Keshari" roll="2200320100113" branch="CSE" section="A" admission="2022b0101174"/> */}
  //   </div>
  // </div>
    <div>
      <StudentState/>
    </div>
  )
}

export default App