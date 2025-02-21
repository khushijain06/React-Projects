import {useEffect, useState} from 'react'
import {useDispatch } from 'react-redux'
import {login,logout} from './store/authSlice';
import authService, { AuthService } from './appwrite/Auth';
import './App.css'

function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getcurrentuser()
      .then((userdata)=>{
          if(userdata){
            dispatch(login({userdata}))
          } else {
            dispatch(logout())
          }
      })
      .finally(()=>setloading(false))
  },[])
  return !loading(
    <>
    </>
  )
}

export default App
