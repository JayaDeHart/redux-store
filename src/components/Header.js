import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import ActiveCategory from './ActiveCategory';
import '../app.scss';

function Header() {
  return (
    <AppBar className="header">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          Shop Till You Drop
        </Typography>
        <ActiveCategory />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
