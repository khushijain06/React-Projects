import Button from './button';
import { useCallback, useEffect, useState,useRef } from 'react';
// eslint-disable-next-line react/prop-types
function Card() {
     const [password, setpassword] = useState("");
     const [length,setlength] = useState(8);
     const [charAllow,setcharAllow]=useState(false);
     const [numAllow,setnumAllow] = useState(false);
     const generatepass = useCallback(()=>{
        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(numAllow) str+="0123456789"
        if(charAllow) str+="@#$^*%~"

        for(let i=0;i<length;i++){
             let char = Math.floor(Math.random()*str.length+1)
             pass+=str.charAt(char)   
        }
        setpassword(pass)
     },[length,numAllow,charAllow,setpassword])

    const passwordref = useRef(null)

    const copypass = useCallback(()=>{
        passwordref.current?.select();
        passwordref.current?.setSelectionRange(0,999);
        window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(()=>{
      generatepass()  
    },[length,numAllow,charAllow,generatepass]) 
    return (
        <div className='h-full flex justify-center items-center'>
            <div className='h-100 w-100 bg-white rounded-2xl flex flex-col justify-center items-center p-4'>
                <span className='text-xl font-bold mb-4'>Password Generator</span>
                <input type='text' value={password} className='bg-gray-200 h-12 w-full rounded-2xl outline-sky-300 mb-4 px-4' />
                <Button height='11' width='3' content='Copy' f={copypass}/>
                <div className='w-full mt-4'>
                    <span className='block mb-2'>Password length (4-20) <br/> Length: {length} </span>
                    <input type='range' min={6} max={15} value={length} onChange={(e)=>{
                        setlength(e.target.value)
                    }} className='w-full mb-4 accent-blue-500' />
                    <div className='flex justify-between items-center'>
                        <div>
                            <span className='mr-2'>Include numbers</span>
                            <input type='checkbox' defaultChecked={numAllow} onChange={()=>{
                                setnumAllow((prev)=>!prev)
                            }} className='accent-blue-500' />
                        </div>
                        <div>
                            <span className='mr-2'>Include symbols</span>
                            <input type='checkbox' defaultChecked={charAllow} onChange={()=>{
                                setcharAllow((prev)=>!prev)
                           }} className='accent-blue-500' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;
