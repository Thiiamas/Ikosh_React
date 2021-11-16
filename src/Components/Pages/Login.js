import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { isEmail } from "validator";

import AuthService from '../../services/auth-service';
import { tsConstructorType } from '@babel/types';


const Login = ({setSessionId,}) =>{

    
    const history = useHistory()

    const [userName, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(null)
    const [wrongUsername, setWrongUsername] = useState(false)

    const required = value => {
        if (!value){
            return (
                <div className="" role ="alert">
                    This field is required
                </div>
            )
        }
    }

    const hiddenLinkRef = useRef(null)

    const onSignUp = () =>{
        hiddenLinkRef.current.click()
    }

    const onInputChange = (e) =>{
        switch (e.target.id){
            case "username":
                setUsername(e.target.value);
                break;
            case "password":
                setPassword(e.target.value)
                break;
            default:
                console.log("wrong id")
        }
    }

    const onLogin = () => {
        console.log("fetch signin with username = "+userName+" password = "+password)
        AuthService.login(userName, password).then(
            () => {
                history.push("/post")
                window.location.reload()
            }, error => {
                const resMessage = ( error.response && error.response.data && error.response.data.message ) 
                || error.message || error.toString();
                setLoading(false)
                setMessage(resMessage)
            }
        )
       /*fetch('/api/auth/signin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            } ,
            body:JSON.stringify({
                username: userName,
                password: password
            })
        }).then((response) => {
            response.json().then( json => {
                if (response.ok){
                    //setSessionId("1")
                    history.push('/post')
                }
                console.log(json)
            })
        })
        */
    }

    return(
        <form className="MainDiv bg-indigo-200 flex flex-shrink content-center flex-col justify-around shadow-lg
        max-w-2xl mx-auto mt-10 h-3/5 border-solid rounded-lg border-4 border-indigo-200" >
            <div className='text-gray-700 text-5xl m-8 '>
                <span className=''  >Sign In</span>
            </div>
            <div className='mb-4 mr-64 ml-8'>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Username
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="username" type="text" placeholder="Username" onChange={onInputChange}/>
                <p class="text-red-500 text-xs italic" style={wrongUsername ? {visibility:'visible'} : {visibility:'hidden'}}>Wrong username or password</p>
            </div>
            <div class="mb-4 mr-64 ml-8">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input class="shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 
                leading-tight focus:outline-none focus:shadow-outline" 
                id="password" type="password" placeholder="******************" onChange={onInputChange}/>
                {/*<p class="text-red-500 text-xs italic">Please choose a password.</p>*/}
            </div>
            <div class="flex items-center justify-start mx-8 mb-6">
                <button class="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none 
                focus:shadow-outline" type="button" onClick={onLogin}>
                    Sign In
                </button>
                {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/ }
                <a class="mr-2 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                </a>
                {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/ }
                <a  style={{visibility:'hidden'}} href="/signup" ref={hiddenLinkRef}/>
                <button to='/signup' class="mr-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none 
                focus:shadow-outline" type="button" onClick={onSignUp}>
                    <link to="/signup" />
                    Sign Up
                </button>
            </div>
            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
        </form>
        
    )
}

export default Login;