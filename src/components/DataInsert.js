import React from 'react'
import { useNavigate } from 'react-router-dom'

function DataInsert() {
  const navigate=useNavigate()
  return (
    <div>
        <h1>DataInsert Component</h1><br></br>
        <button onClick={()=>navigate('/View')}>Go To View Component</button>
    </div>
  )
}

export default DataInsert