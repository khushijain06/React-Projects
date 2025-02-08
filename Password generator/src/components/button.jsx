
// eslint-disable-next-line react/prop-types
function Button({height = '20',width ='40',content ='default button', f}){
  return(
    <>
        <button className={`h-${height} w-${width} text-amber-50 bg-gradient-to-r from-indigo-500 to-indigo-700  rounded-2xl px-6 py-3 my-1.5 shadow-lg transition-transform transform hover:-translate-y-1  cursor-pointer`}
          onClick={f}
        >
    {content}
</button>

    </>
  )
}

export default Button;