import React, { useState } from 'react'
import { useHistory } from 'react-router'

const Signup = () => {

    const history = useHistory();

    const [userName, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [email, setEmail] = useState(null)

    const [isUsernameTaken, setIsUsernameTaken] = useState(false)
    const [isEmailTaken, setIsEmailTaken] = useState(false)

    const onInputChange = (e) =>{
        switch (e.target.id){
            case "username":
                setUsername(e.target.value);
                break;
            case "password":
                setPassword(e.target.value)
                break;
            case "email":
                setEmail(e.target.value)
                break;
            default:
                console.log("wrong id")
        }
    }

    const apiSignup = () =>{
        console.log("fetch signup with username = "+userName+" password = "+password+" email = "+email)
        fetch('/api/auth/signup',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                username: userName,
                password: password,
                email: email,
                roles:["user"]
            })
        }).then((response) => {
            response.json().then(json => {
                if(response.ok){
                    console.log("gg")
                    history.push('/post')
                }
                if(json.message != null &&  json.message === 'Error : Username already taken'){
                    setIsUsernameTaken(true);
                } else if(json.message != null &&  json.message === 'Error : Email already in use'){
                    setIsEmailTaken(true);
                    setIsUsernameTaken(false)
                } else {
                    setIsEmailTaken(false)
                }
                console.log(json.message);
            })
            console.log(response)
        })
    }


    return (
        <form className="MainDiv bg-indigo-200 flex content-center flex-col justify-around shadow-lg
            max-w-2xl mx-auto mt-10 h-3/5 border-solid rounded-lg border-4 border-indigo-200">
                <div className='text-gray-700 text-5xl m-8 '>
                    <span className=''  >Sign Up</span>
                </div>
                <div className='mb-4 mr-64 ml-8'>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                    focus:outline-none focus:shadow-outline" 
                id="username" type="text" placeholder="Username" onChange={onInputChange}/>
                <p class="text-red-500 text-xs italic" style={isUsernameTaken ? {visibility:'visible'} : {visibility:'hidden'}}>Username already taken</p>
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
                <div class="mb-4 mr-64 ml-8">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Email
                    </label>
                    <input class="shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 
                    leading-tight focus:outline-none focus:shadow-outline" 
                    id="email" type="email" placeholder="Email" onChange={onInputChange}/>
                    <p class="text-red-500 text-xs italic" style={isEmailTaken ? {visibility:'visible'} : {visibility:'hidden'}}>Email already taken</p>
                </div>
                <div class="flex items-center justify-start mx-8 mb-6">
                    <button class="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none 
                    focus:shadow-outline" type="button" onClick={apiSignup}>
                        Sign Up
                    </button>

                </div>
            </form>
    )
}

export default Signup