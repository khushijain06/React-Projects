import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLocation } from "../../store/latlongSlice";
import { FaRegFaceGrinBeam, FaRegFaceSmileBeam, FaRegFaceSmile, FaRegFaceSadTear, FaRegFaceSadCry } from "react-icons/fa6";
import aqi1 from '../../assets/aqi1.webp'
import aqi2 from "../../assets/aqi2.webp";
import aqi3 from "../../assets/aqi3.webp";
import aqi4 from "../../assets/aqi4.webp";
import aqi5 from "../../assets/aqi5.webp";

function Aqi({ styles }) {
  const [aqiscore, setaqiscore] = useState(0);
  const [color, setcolor] = useState("text-white");
  const [quality, setquality] = useState("Loading...");
  const [emoji, setemoji] = useState(null);
  const [image, setimage] = useState(null);
  const [recommendations, setrecommendations] = useState([]);
  
  const dispatch = useDispatch();
  const { lat, lon } = useSelector((state) => state.latlong);
  const API_key = "540c20df6282dc94ea35ff28a407f44b";

  useEffect(() => {
    dispatch(getLocation());
  }, [dispatch]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch(
          `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_key}`
        );
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        const aqiValue = data.list[0].main.aqi;
        setaqiscore(aqiValue);
      } catch (error) {
        console.error("Got this error: ", error);
      }
    };
    fetchdata();
  }, [lat, lon, API_key]);

  useEffect(() => {
    const aqiLevels = {
      1: { color: "text-green-600", quality: "Good", emoji: <FaRegFaceGrinBeam />, image: aqi1, recommendations: ["Enjoy outdoor activities!", "Keep windows open for fresh air."] },
      2: { color: "text-yellow-600", quality: "Fair", emoji: <FaRegFaceSmileBeam />, image: aqi2, recommendations: ["Sensitive groups should limit outdoor activity.", "Use an air purifier indoors."] },
      3: { color: "text-orange-600", quality: "Moderate", emoji: <FaRegFaceSmile />, image: aqi3, recommendations: ["Limit outdoor activities.", "Wear a mask if necessary."] },
      4: { color: "text-red-600", quality: "Poor", emoji: <FaRegFaceSadTear />, image: aqi4, recommendations: ["Avoid prolonged outdoor exposure.", "Use an N95 mask outside."] },
      5: { color: "text-red-800", quality: "Very Poor", emoji: <FaRegFaceSadCry />, image: aqi5, recommendations: ["Stay indoors as much as possible.", "Use air purifiers and close windows."] },
    };
    
    const { color, quality, emoji, image, recommendations } = aqiLevels[aqiscore] || aqiLevels[1];
    setcolor(color);
    setquality(quality);
    setemoji(emoji);
    setimage(image);
    setrecommendations(recommendations);
  }, [aqiscore]);

  return (
    <div className="flex flex-wrap gap-4 items-center">
      <div className={`${styles} flex-grow flex gap-2 justify-center items-center`}> 
        <p>Air Quality is <strong className={color}>{quality}</strong></p>
        <p className={`${color} text-5xl `}>{emoji}</p>
      </div>
      <div className={`${styles} flex-grow flex justify-center items-center`}>
        <img src={image} alt="AQI level" className="h-72 w-72" />
      </div>
      <div className={`${styles} flex-grow`}> 
        <strong>Recommendations:</strong>
        <ul>
          {recommendations.map((rec, index) => (<li key={index}>- {rec}</li>))}
        </ul>
      </div>
    </div>
  );
}

export default Aqi;
