import {useDispatch} from 'react-redux'
import authService from '../../appwrite/Auth'
import logout from '../../store/authSlice'

function Logoutbtn(){
    const dispatch = useDispatch()
     const logoutHandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })

     }
    return(
        <button onClick={()=>{ logoutHandler()}}>
            Logout 
        </button>
    )
}
export default Logoutbtn