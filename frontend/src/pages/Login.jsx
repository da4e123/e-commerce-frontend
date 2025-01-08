import React from 'react'
import { useState } from 'react';

const Login = () => {

  const [currentState, setCurrentstate] = useState('Sign Up');

  return (
    <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl'>{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
        </div>

        {currentState === 'Login' ? ' ' : <input type="text" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Name' name="" id="" required/>}
        <input type="email" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Email' name="" id="" required />
        <input type="password" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Password' name="" id="" required />

        <div className='w-full flex justify-between text-sm mt-[-8px] items-center gap-2'>
              <p className='cursor-pointer'>Forgot your password?</p>
              {
                currentState === 'Login'
                ? <p onClick={() => setCurrentstate('Sign Up')} className='cursor-pointer'>Create account</p>
                : <p onClick={() => setCurrentstate('Login')} className='cursor-pointer'>Login Here</p>
              }
        </div>

        <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>

    </form>
  )
}

export default Login
