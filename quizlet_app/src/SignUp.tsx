import React, { useState } from 'react'

export default function SignUp() {
  const [username, setUsername] = useState<string>();
  const [firstname, setFirstname] = useState<string>();
  const [lastname, setLastname] = useState<string>();
  const [password, setPassword] = useState<string>();

  function Submit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault()
  }
    
  return (
    <div>
      <form onSubmit={Submit}>
        <label htmlFor="firstname">Firstname: </label>
        <input type="text" id="firstname" name='firstname' onChange={(e)=>{setFirstname(e.target.value)}}/> <br/>
            
        <label htmlFor="lastname">Lastname: </label>
        <input type="text" id="lastname" name='lastname' onChange={(e)=>{setLastname(e.target.value)}}/> <br/>
            
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" name='username' onChange={(e)=>{setUsername(e.target.value)}}/> <br/>

        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name='password' onChange={(e)=>{setPassword(e.target.value)}}/> <br/>
        
        <button type="submit"> SIGN UP </button> <br/>
            <p> {username} and {password} and {firstname} and {lastname} </p>
        </form>
    </div>
  )
}
