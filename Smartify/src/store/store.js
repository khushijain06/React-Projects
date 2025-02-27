import { configureStore } from '@reduxjs/toolkit'
import latlongSlice from './latlongSlice'
export default configureStore({
  reducer: {
    latlong: latlongSlice,
  },
})