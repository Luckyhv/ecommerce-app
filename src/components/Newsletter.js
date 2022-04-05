import { Send } from '@mui/icons-material'
import React from 'react'

function Newsletter() {
  return (
    <div className='d-flex' style={{height:"400px",backgroundColor:"#fcf5f5",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      {/* <div className="title" style={{marginBottom:"20px",fontSize:"70px"}}>NewsLetter</div> */}
      <h1 style={{marginBottom:"10px",fontSize:"70px"}}>Newsletter</h1>
      <div className="desc" style={{fontSize:"25px",fontWeight:"300",marginBottom:"20px"}}>Get time to time Updates.</div>
      <div className="inputcon d-flex" style={{width:"50%",height:"40px",backgroundColor:"white",justifyContent:"space-between",border:"1px solid lightgray"}}>
          <input type="text" placeholder='Enter Your Email' style={{border:"none",width:"95%"}} />
          <button className='d-flex' style={{border:"none",backgroundColor:"teal",width:"8%",justifyContent:"center",alignItems:"center",color:"white"}}>
              <Send/>
          </button>
      </div>
    </div>
  )
}

export default Newsletter
