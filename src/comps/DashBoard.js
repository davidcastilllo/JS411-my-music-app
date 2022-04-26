import React, { useState } from 'react'
import Header from './Header'
import CustomCard from './CustomCard'
import Switch from '@mui/material/Switch';

export default function DashBoard() {
 let [isOnline, setIsOnline] = useState(false)

  return (
    <div>
     <Header />

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
     component={Switch}
     />

     <CustomCard 
     state={isOnline} 
     setState={setIsOnline}
     title="Sound Quality"
     body="Manually control the music quality in event of poor connection"
     component={Switch}
     />
     
     


     <div>
      <h2>System Notifcations</h2>
     {isOnline === false && (
      <p>
       Your application is offline. You won't be able to share or stream music to other devices.
      </p>
     )}
     </div>
    </div>
  )
}
