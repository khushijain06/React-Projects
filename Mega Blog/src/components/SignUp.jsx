import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/Auth";
import { useForm } from "react-hook-form";

 function SignUp(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register,handleSubmit}=useForm()
    const [error,seterror] = useState("")
    const signup=async (data)=>{
        seterror("")
        try{
        const session = await authService.createAccount(data)
        if(session){
            const userData = await authService.getcurrentuser();
             if(userData) dispatch(authLogin(session))
            navigate('/') 
        }
    }
    catch(error){
        seterror(error.message)
    }
}
    return(
        <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                <span className="inline-lock w-full max-w-[100px]">
                    <Logo width="100%"/>
                </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">
                    Sign Up to create account
                </h2>
                <p className="mt-2 text-center text-base text-black/60">
                Already have an account?&nbsp;
                <Link 
                 to='/login'
                 className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                    Sign In
                </Link>
                </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(signup)}>
            <div className="space-y-5">
            <Input label="Full Name" placeholder="Enter Nmae: "{...register("name",{required:true})}/>
            <Input label="email" placeholder="Enter Email: "{...register("email", {required:true})}/>
            <Input label="password" type="password" placeholder="Enter password" {...register("password",{required:true})}/>
            <Button type="submit" className="w-full">Sign Up</Button>
            </div>
        </form></div>
        </div>
    )
 }
 export default SignUp