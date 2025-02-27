import  { useState, useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import  {getLocation} from "../store/latlongSlice"

const LocationApp = () => {
    const dispatch =  useDispatch();
    const { lat, lon } = useSelector((state) => state.latlong);
    const [location, setLocation] = useState(null);
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
            console.log("Geocoding API Response:", data);

            if (data.results && data.results.length > 0) {
                const components = data.results[0].components;
                console.log(`${lat} . ${lon}`)
                const city = 
                    components.city || 
                    components.town || 
                    components.village || 
                    components.hamlet || 
                    components.suburb || 
                    components.locality || 
                    components.neighbourhood || 
                    "Unknown City";

                const state = components.state || components.province || "Unknown State";
                const country = components.country || "Unknown Country";

                console.log("Location Components:", components);

                if (city !== "Unknown City" || state !== "Unknown State") {
                    setLocation(`${city}, ${state}, ${country}`);
                    setError(null);
                } else {
                    setError("Incomplete location data received.");
                    setLocation(null);
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
            <div className=" p-4 bg-white rounded shadow-md w-80 text-center">
                {location ? (
                    <p className="text-green-600">
                        <strong>Your Location:</strong> {location}
                    </p>
                ) : (
                    <p className="text-gray-500">Fetching your exact location...</p>
                )}

                {Error && <p className="text-red-500 mt-2">{Error}</p>}
            </div>
    );
};

export default LocationApp;