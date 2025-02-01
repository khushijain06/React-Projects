import { useState } from "react";

const App = () => {
  const [color, setcolor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="bg-white gap-2 rounded-3xl fixed flex flex-wrap justify-center inset-x-0 px-2 bottom-12 font-medium ">
          <button  className="bg-gray-400 rounded-2xl py-1 my-2 px-4 hover:bg-red-500"
          onClick={()=>{setcolor('red')}}>Red</button>
          <button className="bg-gray-400 rounded-2xl py-1 my-2 px-4 hover:bg-green-500"
          onClick={()=>{setcolor('green')}}>Green</button>
          <button className="bg-gray-400 rounded-2xl py-1 my-2 px-4 hover:bg-blue-500" 
          onClick={()=>{setcolor('blue')}}>Blue</button>
          <button className="bg-gray-400 rounded-2xl py-1 my-2 px-4 hover:bg-yellow-500"
          onClick={()=>{setcolor('yellow')}}>Yellow</button>
          <button  className="bg-gray-400 rounded-2xl py-1 my-2 px-4 hover:bg-purple-500"
          onClick={()=>{setcolor('purple')}}>Purple</button>
          <button  className="bg-gray-400 rounded-2xl py-1 my-2 px-4 hover:bg-pink-500"
          onClick={()=>setcolor('pink')}>Pink</button>
          <button  className="bg-gray-400 rounded-2xl py-1 my-2 px-4 hover:bg-orange-500"
          onClick={()=>{setcolor('orange')}}>Orange</button>
          <button  className="bg-gray-400 rounded-2xl py-1 my-2 px-4 hover:bg-indigo-500"
         onClick={()=>{setcolor('indigo')}} >Indigo</button>
          <button  className="bg-gray-400 rounded-2xl py-1 my-2 px-4 hover:bg-cyan-500"
          onClick={()=>{setcolor('cyan')}}>  Cyan</button>
          <button  className="bg-gray-400 rounded-2xl py-1 my-2 px-4 hover:bg-lime-500"
         onClick={()=>{setcolor('lime')}} >Lime</button>
          <button  className="bg-gray-400 rounded-2xl py-1 my-2 px-4 hover:bg-teal-500"
          onClick={()=>{setcolor('teal')}}>Teal</button>
          <button  className="bg-gray-400 rounded-2xl py-1 my-2 px-4 hover:bg-white"
          onClick={()=>{setcolor('white')}}>White</button>
          <button  className="bg-gray-400 rounded-2xl py-1 my-2 px-4 hover:bg-amber-900"
            onClick={()=>{setcolor('brown')}}>Brown</button>
        </div>
      </div>
    </>
  );
};

export default App;
