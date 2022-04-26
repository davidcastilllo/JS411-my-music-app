import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CustomCard(props) {
const { component: Component, setState, state} = props
 let handleChange = () => {
  setState(!state)
  console.log(state)
 }

  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h4" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2">
          {props.body}
        </Typography>
      </CardContent>
      <CardActions>
      <Component onChange={handleChange}/>
      </CardActions>
    </Card>
  );
}
