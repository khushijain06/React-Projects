import {LoadScript,GoogleMap, Marker} from '@react-google-maps/api'

const Map=()=>{
    const mapStyles={
        height:"100vh",
        width:"100%"
    };

    const defaultCenter={
        lat:28.6139,lng:77.2090
    }
    return(
        <LoadScript googleMapsApiKey="AIzaSyA5uNl0vEa2BFFkK7MquqDDj3k9f5v2avc">
        <GoogleMap 
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
            >
            <Marker position={defaultCenter}/>
        </GoogleMap>
        </LoadScript>
    )
}
export default Map;