/*
import { createSlice } from "@reduxjs/toolkit";
const initialState={
    lon:12,
    lat:78
}
const longlatSlice =createSlice({
    name:"latlong",
    initialState,
    reducers:{
        getLocation : (state) => {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                         state.lat = position.coords.latitude;
                         state.lon = position.coords.longitude;
                        console.log(`Latitude: ${state.lat}, Longitude: ${state.lon}`);
                    },
                    (error) => {
                        console.error("Geolocation error:", error.message);
                        //setError(`Location error: ${error.message}`);
                   //     setLocation(null);
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 30000,
                        maximumAge: 0,
                    }
                );
            } else {
               console.log("Geolocation not supported by your browser.");
            }
        }
    
    }
})
export const {getLocation} = longlatSlice.actions;
export default longlatSlice.reducer;

*/
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to get user's location
export const getLocation = createAsyncThunk(
    "latlong/getLocation",
    async (_, { rejectWithValue }) => {
        return new Promise((resolve, reject) => {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        resolve({
                            lat: position.coords.latitude,
                            lon: position.coords.longitude
                        });
                    },
                    (error) => {
                        reject(rejectWithValue(error.message));
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 30000,
                        maximumAge: 0,
                    }
                );
            } else {
                reject(rejectWithValue("Geolocation not supported by your browser."));
            }
        });
    }
);

const longlatSlice = createSlice({
    name: "latlong",
    initialState: {
        lon: 0,
        lat: 0,
        error: null,
        loading: false
    },
    reducers: {}, // No direct reducer for async state updates
    extraReducers: (builder) => {
        builder
            .addCase(getLocation.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getLocation.fulfilled, (state, action) => {
                state.lat = action.payload.lat;
                state.lon = action.payload.lon;
                state.loading = false;
            })
            .addCase(getLocation.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    }
});

export default longlatSlice.reducer;
