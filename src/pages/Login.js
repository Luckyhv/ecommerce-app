import React from 'react'
import './Register.css'
function Login() {
  return (
    <div>
         <div className='d-flex con1'>
            <div className="wrapn" style={{width:"25%"}}>
                <h1 className="dtitle">
                    Login
                </h1>
                <form className="form1 d-flex" action="" style={{flexDirection:"column"}}>
                    {/* <input type="text" placeholder='Username' /> */}
                    <input className='inputt' type="text" placeholder='Email' />
                    <input className='inputt' type="password" placeholder='Password' />
                    <button className='button12'>LOGIN</button>
                    <a className='a' href="/">FORGOT PASSWORD ?</a>
                    <a className='a' href="/">CREATE A NEW ACCOUNT</a>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
