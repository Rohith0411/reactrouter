import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function DataInsert() {
  const navigate=useNavigate()
  const [rno,setRno] = useState("")
  const [sname,setSname] = useState("")
  const [mark,setMark] = useState("")
  const [rank,setRank] = useState("")
  const [finres,setFinres]=useState([])

  const dis =(event)=>{
    if(event.target.id==='rno')
      setRno(event.target.value)
    if(event.target.id==='sname')
      setSname(event.target.value)
    if(event.target.id==='mark')
      setMark(event.target.value)
    if(event.target.id==='rank')
      setRank(event.target.value)
  }

  const result=()=>{
    const resjson={
      rno:rno,
      sname:sname,
      mark:mark,
      rank:rank
    }
    console.log("myjson",resjson)
    setFinres([resjson,...finres])
    
  }

  return (
    <div>
      
        <h1>Student Information - Insert/Save Form</h1>
        <input type='text' id='rno' onChange={(ev)=>dis (ev)} value={rno} placeholder='Enter Roll Num:'></input><br></br>
        <input type='text' id='sname' onChange={(ev)=>dis (ev)} value={sname} placeholder='Enter Student Name:'></input><br></br>
        <input type='text' id='mark' onChange={(ev)=>dis (ev)} value={mark} placeholder='Enter Mark:'></input><br></br>
        <input type='text' id='rank' onChange={(ev)=>dis (ev)} value={rank} placeholder='Enter Rank'></input><br></br>
        <button onClick={result}>Store Data</button><br></br>
        <button onClick={()=>navigate('/View')}>Go To View Component</button><br></br>
        <h2>Student Result</h2>
        {
          finres.map((item)=>
          <>
          Roll Number: {item.rno}<br></br>
          Student Name: {item.sname}<br></br>
          Student Mark: {item.mark}<br></br>
          Student Rank: {item.rank}<br></br>
          <hr size='2' color='red'></hr>

          </>)
        }
    </div>
  )
}

export default DataInsert