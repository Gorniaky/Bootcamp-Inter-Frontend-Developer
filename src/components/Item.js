import { ListItem, ListItemText } from '@material-ui/core/';
import React from 'react';

const Item = ({ name, details }) => {
  return (
    <ListItem>
      <ListItemText primary={name} secondary={details} className="text-center bg-secondary rounded-pill" />
    </ListItem>
  )
}

export default Item;
