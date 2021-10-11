import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Popper, Button } from '@mui/material';
import Cart from './Cart';
import ActiveCategory from './ActiveCategory';
import '../app.scss';

function Header() {
  const [anchor, setAnchor] = useState(null);

  const [open, setOpen] = useState(false);

  function togglePopper(e) {
    setAnchor(e.currentTarget);
    setOpen(!open);
  }

  return (
    <AppBar className="header">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          Shop Till You Drop
        </Typography>
        <ActiveCategory />
        <Button variant="contained" color="secondary" onClick={togglePopper}>
          Cart
        </Button>
        <Popper open={open} anchorEl={anchor} placement="bottom">
          <Cart />
        </Popper>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
