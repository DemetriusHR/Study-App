import React from 'react';
import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';

import Header from '../Header';

const Layout = () => (
  <Grid container spacing={2} p={2}>
    <Grid item xs={3}>
      <Header />
    </Grid>
    <Grid item xs={9}>
      <Outlet />
    </Grid>
  </Grid>
);

export default Layout;
