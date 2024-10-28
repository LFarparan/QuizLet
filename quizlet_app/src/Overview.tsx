import React from 'react'

interface Props{
  setView : React.Dispatch<React.SetStateAction<string>>,

}


export default function Overview({setView}: Props) {


  return (
    <div>
      <button className="signs" onClick={()=>{setView('signup')}}>Sign In</button>
      <button className="signs" onClick={()=>{setView('signin')}}>Sign Up</button>
    </div>
  )
}
