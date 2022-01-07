import { Button, FormControl, FormControlLabel, Grid, makeStyles, Paper, Radio, RadioGroup, Typography } from '@material-ui/core/';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cartActions from './store/actions/cart';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    background: '#343a40',
    color: 'white'
  },
}));

const Card = ({ product, children }) => {
  const cart = useSelector(state => state.cart.value)
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Grid item xs={3}>
      <Paper className={classes.paper}>
        <Grid container direction='column'>
          <Grid item>
            <img max-width="140px" height="140px" src={product.image} alt={product.name_product} />
            <Typography variant='h6'>
              {children}
            </Typography>
            <Typography variant='subtitle1'>
              R$ {product.price.toFixed(2)}
            </Typography>
          </Grid>

          <Button variant="contained" className='bg-dark text-light'
            onClick={() => dispatch(cartActions.Add(cart, product))}>
            Adicionar
          </Button>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Card;
