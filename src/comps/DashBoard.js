import React, { useState } from 'react'
import Header from './Header'
import CustomCard from './CustomCard'
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function DashBoard() {
 let [isOnline, setIsOnline] = useState(true)
 let [volume, setVolume] = useState(30)
 let [musicQuality,setMusicQuality] = useState(1)

 /*-------------------------------------------------------------------------------------------*/

 let DiscreteSlider = () => { 
 
  function valuetext(value: number) {
  return `${value}°C`;
}
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={volume}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks={true}
        min={0}
        max={100}
        onChangeCommitted={(e, val) => {
         setVolume(val)
        }}
      />
    </Box>
  );
}

 /*-------------------------------------------------------------------------------------------*/

let updatedSwitch = () => {


 const theme = createTheme({
  palette: {
    primary: {
      main: '#F50057',
    },
    secondary: {
      main: '#FB86AD',
    },
  },
});

let handleChange = () => {
 setIsOnline(!isOnline)
}

 return (
  <ThemeProvider theme={theme}>
     <Switch
       checked={isOnline}
       onChange={handleChange}
     />
   </ThemeProvider>
 );
}

/*-------------------------------------------------------------------------------------------*/

let SelectBox = () => {

 let handleChange = (event: SelectChangeEvent) => {
  setMusicQuality(event.target.value)
  console.log(musicQuality)
};
 return (
   <Box sx={{ minWidth: 244 }}>
     <FormControl fullWidth>
       <NativeSelect
         onChange={handleChange}
         defaultValue={musicQuality}
       >
         <option value={0}>Low</option>
         <option value={1}>Normal</option>
         <option value={2}>High</option>
       </NativeSelect>
     </FormControl>
   </Box>
 );
}

  return (
    <>
     <Header />
     <div className='contents'>
      
     <section className='welcome'>
      <h1 >Welcome User!</h1>
     </section>
     
     
     <section className='cards'>
     <CustomCard 
     title="Online Mode"
     body="Is this application connected to the internet?"
     component={updatedSwitch}
     />

     <CustomCard 
     title="Master Volume"
     body="Overrides all other sound settings in this application"
     component={DiscreteSlider}
     />

     <CustomCard 
     title="Sound Quality"
     body="Manually control the music quality in event of poor connection"
     component={SelectBox}
     />
     </section>


      <section className="notifications">
       <h2>System Notifcations:</h2>
      {isOnline === false && (
       <p>
        Your application is offline. You won't be able to share or stream music to other devices.
       </p>
      )}

      {volume > 80 && (
       <p>
        Listening to music at a high volume could cause long-term hearing loss.
       </p>
      )}

      {musicQuality == 0 && (
       <p>
        Music quality is degraded. Increase quality if your connection allows it.
       </p>
      )}

      </section>
     </div>
    </>
  )
}
