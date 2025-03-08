import  { useState, useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import  {getLocation} from "../store/latlongSlice"


const Location = () => {
    const dispatch =  useDispatch();
    const { lat, lon } = useSelector((state) => state.latlong);
    const [city, setcity] = useState(null);
    const [state, setstate] = useState(null);
    const [country, setcountry] = useState(null);
    const [Error, setError] = useState(null);

    const API_KEY = "1358d9914bec4f23a30b1765e57f1f67";
   

    useEffect(() => {
       dispatch(getLocation())
    }, [dispatch]);

    useEffect(() => {
        if (lat && lon) {
            fetchLocationName(lat, lon);
        }
    }, [lat, lon]);

    const fetchLocationName = async (lat, lon) => {
        try {
            const response = await fetch(
                `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${API_KEY}`
            );
            const data = await response.json();
          //  console.log("Geocoding API Response:", data);

            if (data.results && data.results.length > 0) {
                const components = data.results[0].components;
                console.log(`${lat} . ${lon}`)
                 setcity(
                    components.city || 
                    components.town || 
                    components.village || 
                    components.hamlet || 
                    components.suburb || 
                    components.locality || 
                    components.neighbourhood || 
                    "Unknown City"
                 )
                setstate ( components.state || components.province || "Unknown State");
                setcountry (components.country || "Unknown Country")

                console.log("Location Components:", components);

                if (city === "Unknown City" || state === "Unknown State") {
                    setError("Incomplete location data received.")
                }
            } else {
                console.error("No results found in the API response:", data);
                setError("Unable to fetch location name.");
            }
        } catch (error) {
            console.error("Error fetching location name:", error);
            setError("Error fetching location name.");
        }
    };

    return (
        <div className="text-center text-white  mt-6">
          <p className="mb-2">You are in </p>
          {city || state || country ? (
            <h1 className="text-4xl font-bold ">
               {city && `${city}, `}
              {state && `${state}, `}
              {country} 👋
            </h1>
          ) : (
            <p className="text-gray-400 text-lg italic animate-pulse">
              Fetching your exact location...
            </p>
          )}
      
          {Error && <p className="text-red-500 mt-2 text-lg font-semibold">{Error}</p>}
        </div>
      );
      
};

export default Location;