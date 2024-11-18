import React from 'react'
import './Student.css'
function Student(data) {
  return (
    <div className="icard">
      {/* {
        JSON.stringify(data.data)
      } */}
        <table>
            <tbody>
                <tr style={{backgroundColor:'black',color:'white',textAlign:"center"}}><td colspan={2}>{data.data.college}</td></tr>
                <tr><td colspan={2}><img src={data.data.pic} height={100} width={100}></img></td></tr>
                <tr><td>Name: </td><td>{data.data.name}</td></tr>
                <tr><td>Roll_Number: </td><td>{data.data.roll}</td></tr>
                <tr><td>Branch: </td><td>{data.data.branch}</td></tr>
                <tr><td>Section: </td><td>{data.data.section}</td></tr>
                <tr><td>Admission_no.: </td><td>{data.data.admission}</td></tr>
            </tbody>
        </table>
    </div>
  )
}
// Student.defaultProps={
//   college:"AKG Engineering College"
// }

export default Student