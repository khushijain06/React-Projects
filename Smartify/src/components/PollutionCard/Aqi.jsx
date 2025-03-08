import  { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLocation } from "../../store/latlongSlice";

function Aqi({styles}) {
  const [aqiscore, setaqiscore] = useState(0);
  const [color, setcolor] = useState("white");
  const [quality, setquality] = useState('loading');
  const [pm10, setpm10] = useState(0);
  const [pm2_5, setpm2_5] = useState(0);
  const dispatch = useDispatch();
  const [CO, setCO] = useState(0);
  const [NO, setNO] = useState(0);
  const [NO_2, setNO_2] = useState(0);
  const [O_3, setO_3] = useState(0);
  const [SO_2, setSO_2] = useState(0);
  const [NH_3, setNH_3] = useState(0);
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
        setCO(res.list[0].components.co)
        setNH_3(res.list[0].components.nh3)
        setNO(res.list[0].components.no)
        setNO_2(res.list[0].components.no2)
        setO_3(res.list[0].components.o3)
        setSO_2(res.list[0].components.so2)
      
        console.log(aqiscore);
      } catch (error) {
        console.log("Got this error, ", error);
      }
    };
    fetchdata();
  }, [lat, lon, API_key, aqiscore]);

  useEffect(() => {
    if (aqiscore == 1) {
      setcolor("text-green-600")
      setquality('Good');
    } else if (aqiscore == 2) {
      setcolor("text-yellow-600");
      setquality('Fair')
    } else if (aqiscore == 3){
       setcolor("text-orange-600");
       setquality('Moderate')
    }
    else if (aqiscore == 4){
       setcolor("text-red-600");
       setquality('Poor')
    }
    else if (aqiscore == 5){
       setcolor("text-purple-600");
       setquality('Very Poor')
    }
  },[aqiscore]);
  console.log(color);
  return (
    <div className="flex flex-wrap gap-4 items-center">
    <div className={`${styles} flex-grow`}>
              <p  >Air Quality is <strong className={color}>{quality}</strong> </p>
          </div>
          <div className={`${styles} flex-grow`}>
          <p><strong>CO - Carbon Monoxide:</strong> {CO} µg/m³</p>
          </div>
          <div className={`${styles} flex-grow`}>
        <p><strong>NO₂ - Nitrogen Dioxide:</strong> {NO_2} µg/m³</p>
        </div>
        <div className={`${styles} flex-grow`}>
        <p><strong>O₃ - Ozone:</strong> {O_3} µg/m³</p>
        </div>
        <div className={`${styles} flex-grow`}>
        <p><strong>SO₂ - Sulfur Dioxide:</strong> {SO_2} µg/m³</p>
        </div>
        <div  className={`${styles} flex-grow`}>
        <p><strong>PM2.5 - Fine Particulate Matter:</strong> {pm2_5} µg/m³</p>
        </div>
        <div className={`${styles} flex-grow`}>
        <p><strong>PM10 - Coarse Particulate Matter:</strong> {pm10} µg/m³</p>
        </div>
        <div className={`${styles} flex-grow`}><strong>NO - Nitric Oxide:</strong> {NO} µg/m³</div>
        <div className={`${styles} flex-grow`}>
        <p><strong>NH₃ - Ammonia:</strong> {NH_3} µg/m³</p>
          </div>

    </div>
  );
}

export default Aqi;
