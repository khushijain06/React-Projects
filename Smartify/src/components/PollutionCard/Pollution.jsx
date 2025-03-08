import React from 'react'
import Aqi from './Aqi'

function Pollution({parentstyles,childstyles}) {
  return (
    <div className={parentstyles} >
        <Aqi styles={childstyles}/>
    </div>
  )
}

export default Pollution
