import { useState } from 'react'
import './App.css'
import Overview from './Overview'
import SignUp from './SignUp';



function App() {
  const [view, setView] = useState<string>('default');

  return (
    <>
      <h1> QuizLet </h1>
      { (view == 'default') ? <Overview setView = {setView}/> :
        (view == 'signup')? <SignUp/> : <SignUp/>}
      
    </>
  )
}

export default App
