import { Button, Typography } from '@material-ui/core/';
import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const Header = () => {
  return (
    <div className="container-fluid border-bottom">
      <nav className="navbar">
        <div className="container justify-content-left">
          <h1 className="TITLE">
            DIO SHOPPING
          </h1>
          <div className="row row-cols-auto align-items-center">
            <div className="col">
              <Link to="/" className="text-decoration-none">
                <Button className="btn bg-secondary">Home</Button>
              </Link>
            </div>
            <div className="col">
              <Link to="/contato" className="text-decoration-none">
                <Button className="btn bg-secondary">Contato</Button>
              </Link>
            </div>
            <div className="col">
              <Cart />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;
/*
<Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
  <div className="justify-content-center align-items-center py-1">
    <Typography variant='h3'>
      Dio Shopping
    </Typography>
  </div>
  <div className="justify-content-left align-items-center py-1">
  <Link to="/" className="text-decoration-none">
    <Button className="btn border">Home</Button>
  </Link>
  <Link to="/contato" className="text-decoration-none">
    <Button className="btn border">Contato</Button>
  </Link>
  </div>
  <Cart />
</Grid>
*/