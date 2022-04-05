import React from 'react'
import './Register.css'

function Register() {
    return (
        <div className='d-flex con1'>
            <div className="wrapn">
                <h1 className="dtitle">
                    Create Account
                </h1>
                <form className='form1' action="" autoComplete='off'>
                    <input className='inputt' type="text" placeholder='Username' />
                    <input className='inputt' type="email" placeholder='Email' />
                    <input className='inputt' type="password" placeholder='Password'  />
                    <input className='inputt' type="password" placeholder='Confirm Password' />
                    <span className='spanny'>Please Agree to all Terms and Conditions.To read more check the Documentation.</span>
                    <button className='button12'>CREATE</button>
                </form>
            </div>
        </div>
    )
}

export default Register
