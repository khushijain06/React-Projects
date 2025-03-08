import CityName from './components/CityName'
import Header from './components/Header'
import Weather from './components/WeatherCard/Weather'
function App() {
  const parentCardStyle = " flex items-start  justify-center items-center text-white bg-slate-950 p-7 rounded-xl border-1 border-sky-400 shadow-[0_0_9px_theme('colors.sky.400')] space-x-4 w-fit m-auto hover:scale-102  hover:border-2 transition-transform duration-300 ease-in-out";
  const childCardStyle = " text-white bg-gray-900 p-4 rounded-xl border-1 border-sky-400 hover:shadow-[0_0_7px_theme('colors.sky.400')] hover:scale-102  hover:border-2 transition-transform duration-300 ease-in-out";
return (  
        <>
      <Header/>
      <div className="space-x-4  mt-4  ">
      <CityName />
      <div className="space-x-4 mt-8  ">
      <Weather parentstyles={parentCardStyle} childstyles={childCardStyle}/>
      </div>
      </div>
     </>
  )
}

export default App
