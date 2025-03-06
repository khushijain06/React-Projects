import  { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLocation } from "../../store/latlongSlice";

function Aqi({styles}) {
  const [aqiscore, setaqiscore] = useState(0);
  const [color, setcolor] = useState("#38BDF8");
  const [quality, setquality] = useState('loading');
  const [pm10, setpm10] = useState(0);
  const [pm2_5, setpm2_5] = useState(0);
  const dispatch = useDispatch();
  const API_key = "540c20df6282dc94ea35ff28a407f44b";
  const { lat, lon } = useSelector((state) => state.latlong);
  useEffect(() => {
    dispatch(getLocation());
  }, [dispatch]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await fetch(
          `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_key}`
        );
        if (!data.ok) {
          throw new Error(`HTTP error! status : ${data.status}`);
        }
        const res = await data.json();
        console.log(res);
        setaqiscore(res.list[0].main.aqi);
        setpm10(res.list[0].components.pm10);
        setpm2_5(res.list[0].components.pm2_5)
        console.log(aqiscore);
      } catch (error) {
        console.log("Got this error, ", error);
      }
    };
    fetchdata();
  }, [lat, lon, API_key, aqiscore]);

  useEffect(() => {
    if (aqiscore == 1) {
      setcolor("#00FF00")
      setquality('Good');
    } else if (aqiscore == 2) {
      setcolor("#FFFF33");
      setquality('Fair')
    } else if (aqiscore == 3){
       setcolor("#FF5F1F");
       setquality('Moderate')
    }
    else if (aqiscore == 4){
       setcolor("#FF69B4");
       setquality('Poor')
    }
    else if (aqiscore == 5){
       setcolor("#FF0033");
       setquality('Very Poor')
    }
  },[aqiscore]);
  console.log(color);
  return (
    <>
    <div className={styles}>
              <p >Air Quality is <strong>{quality}</strong> </p>
              <p ><strong>PM10:</strong> {pm10} </p>
              <p><strong>PM2.5:</strong> {pm2_5}</p>
          </div>
    </>
  );
}

export default Aqi;
