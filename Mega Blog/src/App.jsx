import {useEffect, useState} from 'react'
import {useDispatch }  from 'react-redux'
import {login,logout} from './store/authSlice';
import { Outlet } from 'react-router-dom';
import authService from './appwrite/Auth';
import {Header , Footer} from './components/index'

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
  return !loading?(
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400"> 
    <div className='w-full block'>
      <Header/>
      <main>
       <Outlet/> 
      </main>
      <Footer/>
      </div>
    </div>
  ):
      null
}

export default App
