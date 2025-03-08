import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLocation } from "../../store/latlongSlice";
import { FaWind } from "react-icons/fa";
import { TbTemperatureSun } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";

function WeatherData({ styles }) {
  const dispatch = useDispatch();
  const { lat, lon } = useSelector((state) => state.latlong);
  const [error, seterror] = useState(null);
  const [load, setload] = useState(true);
  //const [aqi,setaqi] = useState(0)
  const [location, setlocation] = useState("Delhi");
  const [temp, settemp] = useState(0);
  const [feelslike, setfeelslike] = useState(0);
  const [weather, setweather] = useState("clear");
  const [humidity, sethumidity] = useState(0);
  const [windspeed, setwindspeed] = useState(0);
  const [winddeg, setwinddeg] = useState(0);
  const [pressure, setpressure] = useState(0);
  const [mintemp, setmintemp] = useState(0);
  const [maxtemp, setmaxtemp] = useState(0);

  const apikey = "540c20df6282dc94ea35ff28a407f44b";

  useEffect(() => {
    dispatch(getLocation());
  }, [dispatch]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        console.log(`${lat} && ${lon}`);
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
        setmintemp(data.main.temp_min);
        setmaxtemp(data.main.temp_max);
        setwinddeg(data.wind.deg);
        setfeelslike(data.main.feels_like);
        setpressure(data.main.pressure);
        setload(false);
      } catch (error) {
        seterror(error.message);
        setload(false);
      }
    };
    fetchdata();
  }, [lat, lon, apikey]);
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <div className={`${styles} flex-grow`}>
        {load ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div>
            <TbTemperatureSun />
            <h1 className="text-5xl mb-2">{(temp - 273.15).toFixed(2)}°C</h1>
            <p className="text-2xl mb-2"> {weather}</p>
            <p> Feels like : {(feelslike - 273.15).toFixed(2)}°C</p>
            <p> Min Temp: {mintemp} </p>
            <p>Max Temp: {maxtemp}</p>
          </div>
        )}
      </div>
      <div className="space-y-4">
      <div className={`${styles} flex-grow`}>
        <FaWind />
        <p className="m-2">
          Wind Speed: {windspeed}
          <br />
          Wind Degree: {winddeg}°
        </p>
      </div>
      <div className={`${styles} flex-grow`}>
        <WiHumidity />
        <p>Humidity : {humidity}%
          <br/>
        Air Pressure : {pressure} hPa
        </p>
        </div>
      </div>
    </div>
  );
}
export default WeatherData;
