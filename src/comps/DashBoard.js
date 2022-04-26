import React, { useState } from 'react'
import Header from './Header'
import CustomCard from './CustomCard'
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';

export default function DashBoard() {
 let [isOnline, setIsOnline] = useState(false)

 function valuetext(value: number) {
  return `${value}°C`;
}

 let DiscreteSlider = () => {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks={true}
        min={0}
        max={100}
      />
    </Box>
  );
}

  return (
    <div>
     <Header />
     <div className='contents'>
      
     <div className='welcome'>
      <h1 >Welcome User!</h1>
     </div>
     
     
     <div className='cards'>
     <CustomCard 
     state={isOnline} 
     setState={setIsOnline}
     title="Online Mode"
     body="Is this application connected to the internet?"
     component={Switch}
     />

     <CustomCard 
     state={isOnline} 
     setState={setIsOnline}
     title="Master Volume"
     body="Overrides all other sound settings in this application"
     component={DiscreteSlider}
     />

     <CustomCard 
     state={isOnline} 
     setState={setIsOnline}
     title="Sound Quality"
     body="Manually control the music quality in event of poor connection"
     component={Switch}
     />
     </div>


      <div className="notifications">
       <h2>System Notifcations:</h2>
      {isOnline === false && (
       <p>
        Your application is offline. You won't be able to share or stream music to other devices.
       </p>
      )}
      </div>
     </div>
    </div>
  )
}
