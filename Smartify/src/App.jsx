import React from 'react'
import CityName from './components/CityName'
import Header from './components/Header'
import Weather from './components/WeatherCard/Weather'
function App() {
  const parentCardStyle = "flex text-white bg-gray-950 p-4 rounded-xl border-1 border-sky-400 hover:shadow-[0_0_10px_theme('colors.sky.400')] space-x-4 ";
 const childCardStyle = "flex-auto text-white  bg-gray-950 p-4 rounded-xl border-1 border-sky-400 hover:shadow-[0_0_10px_theme('colors.sky.400')]";

  return (
    <>
      <Header/>
      <div className="space-x-4  mt-4  ">
      <CityName />
      <Weather parentstyles={parentCardStyle} childstyles={childCardStyle}/>
      </div>
     </>
  )
}

export default App
