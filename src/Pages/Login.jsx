import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/authContext'

const Login = () => {
// user and login destructed
const{user,Login}=UserAuth();

const [email,setEmail]=useState();
const [password,setPassword]=useState();
const[error,setError]=useState();

const navigate=useNavigate();

const submitHandler=async(event)=>{
  event.preventDefault();
  setError('');

  try{
    Login(email,password);
    navigate('/');

  }catch(error){
    console.log(error);
    setError(error.message);
  }

}

  return (
    <>
    <div className='relative w-full h-screen'>
        {/* Image with overlay */}
        <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='Background Image'
        />
          <div className='absolute top-0 left-0 w-full h-full bg-black/60'></div>        

        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto  bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold '>Sign In</h1>
              <form onSubmit={submitHandler} className='w-full flex flex-col py-4 '>
                <input onChange={(e)=>setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded ' type='email' placeholder="Email" autoComplete='email' />
                <input onChange={(e)=>setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded ' type='password' placeholder="password" autoComplete='current-password' />
                <button className='bg-red-600 py-3 px-6 rounded font-bold '>SignUp</button>
                <div className='flex justify-between py-3 items-center text-sm text-grey-600 '>
                  <p>
                  <input className='mr-2' type='checkbox'/>Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='py-2 '>
                  <span className='text-grey-600'>New to Netflix?</span>{''}
                  <Link to='/signup' className='font-bold px-2'>Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div> 
      </div>
    </>
  )
}

export default Login