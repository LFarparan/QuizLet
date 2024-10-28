import React from 'react'

export default function SignUp() {
    function Submit(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault()
    }
    
  return (
    <div>
        <form onSubmit={()=>{Submit}}>
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" name='username'/> <br/>
            <label htmlFor="password">Password: </label>
            <input type="text" id="password" name='password'/> <br/>
            <button type="submit"> SUBMIT </button>
        </form>
        
    </div>
  )
}
