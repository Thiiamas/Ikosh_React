import { FaHandHoldingMedical } from 'react-icons/fa'
import React, { useRef,useState } from 'react'
import { NavLink } from 'react-router-dom'


const Login = () =>{

    const hiddenLinkRef = useRef(null)
    const onSignUp = () =>{
        hiddenLinkRef.current.click()
    }

    return(
        <form className="MainDiv bg-indigo-200 flex content-center flex-col justify-around shadow-lg
        max-w-2xl mx-auto mt-10 h-2/5 border-solid rounded-lg border-4 border-indigo-200">
            <div className='text-gray-700 text-5xl m-8 '>
                <span className=''  >Sign In</span>
            </div>
            <div className='mb-4 mr-64 ml-8'>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Username
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="username" type="text" placeholder="Username">

                </input>
            </div>
            <div class="mb-4 mr-64 ml-8">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input class="shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 
                leading-tight focus:outline-none focus:shadow-outline" 
                id="password" type="password" placeholder="******************"/>
                {/*<p class="text-red-500 text-xs italic">Please choose a password.</p>*/}
            </div>
            <div class="flex items-center justify-start mx-8 mb-6">
                <button class="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none 
                focus:shadow-outline" type="button">
                    Sign In
                </button>
                <a class="mr-2 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                </a>
                <a  style={{visibility:'hidden'}} href="/signup" ref={hiddenLinkRef}/>
                <button to='/signup' class="mr-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none 
                focus:shadow-outline" type="button" onClick={onSignUp}>
                    <link to="/signup" />
                    Sign Up
                </button>
            </div>
        </form>
        
    )
}

export default Login;