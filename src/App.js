import React from 'react';
import logo from './logo.svg';
import './App.css';
import {auth, provider} from './firebase';
import {useDispatch, useSelector} from 'react-redux';
import {setActiveUser,setUserLogOutState,selectUserEmail,selectUserName} from './features/userSlice'

function App() {
  const dispatch= useDispatch()
  
  const userName=useSelector(selectUserName)
  const userEmail = useSelector(selectUserEmail)

  const handleSignIn=()=>{

  } 
  const handleSignOut=()=>{
    
  } 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       {
         userName ? (
           <button onclick={handleSignOut}>Sign Out</button>
         ):(
           <button onClick={handleSignIn}>Sign In </button>
         )
       }
       
      </header>
    </div>
  );
}

export default App;
