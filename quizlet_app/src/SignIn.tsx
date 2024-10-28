import React, { useState } from 'react'

export default function SignIn() {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  function Submit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault()
  }
    
  return (
    <div>
      <form onSubmit={Submit}>  
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" name='username' onChange={(e)=>{setUsername(e.target.value)}}/> <br/>

        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name='password' onChange={(e)=>{setPassword(e.target.value)}}/> <br/>
        
        <button type="submit"> SIGN IN </button> <br/>
            <p> {username} and {password} </p>
        </form>
    </div>
  )
}
