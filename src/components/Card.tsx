
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';

import Avatar from '@mui/material/Avatar';

import Typography from '@mui/material/Typography';


interface CardProps {
message:string,
name:string,
photo: string,
}

export const Fancy: React.FC<CardProps> = (props) => {
  
    return (
      <Card className='card'>
        <CardHeader
          avatar={
            <Avatar  aria-label="user photo.">
              <img src={props.photo} alt="" />
            </Avatar>
          }
          
          title={props.name}
          
        />

        <CardContent>
          <Typography variant="body1" >
            {props.message}
          </Typography>
        </CardContent>
        
      </Card>
    );
}



