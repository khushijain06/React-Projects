import React from 'react'
import Mausam from './Mausam'
import Aqi from './Aqi'

function Weather({parentstyles , childstyles}) {
  return (
    <div className={parentstyles}>
      <Mausam styles={childstyles}/>
      <Aqi styles={childstyles}/>
    </div>
  )
}

export default Weather
