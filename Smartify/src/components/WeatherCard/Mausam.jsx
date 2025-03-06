import { useEffect, useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { getLocation } from "../../store/latlongSlice";



function WeatherData({styles}) {
  const dispatch=useDispatch()
  const { lat, lon } = useSelector((state) => state.latlong);
  const [error, seterror] = useState(null);
  const [load, setload] = useState(true);
  //const [aqi,setaqi] = useState(0)
  const [location, setlocation] = useState("Delhi");
  const [temp, settemp] = useState(0);
  const [weather, setweather] = useState("clear");
  const [humidity, sethumidity] = useState(0);
  const [windspeed, setwindspeed] = useState(0);
  const apikey = "540c20df6282dc94ea35ff28a407f44b";

   useEffect(() => {
         dispatch(getLocation())
      }, [dispatch]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        console.log(`${lat} && ${lon}`)
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`
        );
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setlocation(data.name);
        settemp(data.main.temp);
        sethumidity(data.main.humidity);
        setweather(data.weather[0].description);
        setwindspeed(data.wind.speed);
        setload(false);
      } catch (error) {
        seterror(error.message);
        setload(false);
      }
    };
    fetchdata();
  }, [lat, lon, apikey]);
  return ( 
                <div className={styles}>
                  {load ? (
                    <p>Loading...</p>
                  ) : error ? (
                    <p>Error: {error}</p>
                  ) : (
                    <div>
                   <p className="pb-1">Weather in {location} </p>
                      <p className="pb-1">Temperature: {(temp - 273.15).toFixed(2)}°C</p>
                      <p className="pb-1">Weather: {weather}</p>
                      <p className="pb-1">Humidity: {humidity}%</p>
                      <p >Wind Speed: {windspeed} m/s</p>
                    </div>
                  )}
                </div>
  )
}
export default WeatherData;
