import Header from './Header'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../App.css'

let SignUp = (props) => {
 let {setLogin} = props

 let handleClick = () => {
  setLogin('true')
 }
 
  return (
    <div >
     <Header />

     <div id="signup">
      <section className='username'>
       <Box
      
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '32ch' },
      }}
      noValidate
      autoComplete="off"
      
    >
      <TextField margin="normal" id="standard-basic" label="Username *" variant="standard" />
    </Box>
      </section>
      <section className='password'>
       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '32ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Password *" variant="standard" />
    </Box>
      </section>

    <Stack spacing={2} direction="row">
      <Button variant="contained" className='btn' onClick={handleClick}>Login</Button>
    </Stack>

     </div>
     

    </div>
  )
}

export default SignUp