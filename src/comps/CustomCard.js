import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CustomCard(props) {
const { component: Component} = props

  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h6" component="div" class="cardTitle">
          <b>{props.title}</b>
        </Typography>
        <Typography variant="body2">
          {props.body}
        </Typography>
      </CardContent>
      <CardActions>
      <Component />
      </CardActions>
    </Card>
  );
}
