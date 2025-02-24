import {useEffect,useState} from 'react'
import { GlowArea, Glow } from './components/Glow';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from './components/Card';
import { Button } from './components/Button';
function App() {
  const [error,seterror]= useState(null)
  const [load,setload]=useState(true)
  const [lat, setlat] = useState(-74.0096);
  const [long, setlong] = useState(40.7105);
  //const [aqi,setaqi] = useState(0)
  const [location, setlocation] = useState('Delhi');
  const [temp, settemp] = useState(0);
  const [weather, setweather] = useState('clear');
  const [humidity, sethumidity] = useState(0);
  const [windspeed, setwindspeed] = useState(0);
  const apikey = '540c20df6282dc94ea35ff28a407f44b'
  useEffect(()=>{
  const fetchdata = async()=>{
    try{
       const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}`)
       if(!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)
    const data = await response.json()
      setlocation(data.name)
    settemp(data.main.temp)
      sethumidity(data.main.humidity)
      setweather(data.weather[0].description)
      setwindspeed(data.wind.speed)
      setload(false)
     }catch(error){
          seterror(error.message)
          setload(false)
     }
  }; fetchdata();},[lat,long,apikey])
  return (
    <div className='bg-gray-900'>
    <GlowArea className="flex p-50 items-center justify-center"> 
  <Glow  color="#38BDF8"  className="rounded-xl">
    <Card className="max-w-lg">
      <CardHeader>
        <CardTitle className='text-white' >Weather Details </CardTitle>
        </CardHeader>
        <CardContent>
        <CardDescription className='text-white'>
      <div >
      {load ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <h1>Weather in {location}</h1>
        <p>Temperature: {(temp - 273.15).toFixed(2)}°C</p>
          <p>Weather: {weather}</p>
          <p>Humidity: {humidity}%</p>
          <p>Wind Speed: {windspeed} m/s</p>
        </div>
      )}</div>
      </CardDescription>
           </CardContent>
           <CardFooter>
      <Button className='cursor-pointer flex-1 bg-white'>Button</Button>
 </CardFooter>
 </Card>
    </Glow>
    </GlowArea>
    
    </div>
  )}
export default App
