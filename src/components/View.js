import React from 'react'
import { useNavigate } from 'react-router-dom'

function View() {
  const navigate=useNavigate()
  return (
    <div>
        <h1>View Component</h1>
        <button onClick={()=>navigate(-1)}>Back</button>
    </div>
  )
}

export default View