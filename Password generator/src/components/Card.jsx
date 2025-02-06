import Button from './button'
// eslint-disable-next-line react/prop-types
function Card(){
    return (
        <>
         <div className='h-full flex justify-center items-center'>
          <div className={`h-100 w-100 bg-white rounded-2xl flex justify-center items-center`}>
            <span>Password Generator</span>
            <input className='bg-gray-200 h-12 rounded-2xl outline-sky-300'/> 
            <Button height='11' width='3' content='Copy' />
            <Button content='Generate'/>
            </div>  
            </div>
        </>
    )
}
export default Card;