import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate()
    const getProducts=()=>{
navigate('/Cart')
    }
  return (
    <div style={{margin:"auto"}}>
        <button style={{ marginTop:"200PX",padding:"8px",color:"brown",backgroundColor:"aqua",border:"none"}}onClick={getProducts}>Products</button>
    </div>
  )
}

export default Home