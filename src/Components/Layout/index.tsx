import React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Navigation from '../Navigation';

const Layout = () => (
  <Grid container spacing={2} p={2}>
    <Grid item xs={3}>
      <Navigation />
    </Grid>
    <Grid item xs={9}>
      <Stack spacing={4}>
        <Header />
        <Outlet />
      </Stack>
    </Grid>
  </Grid>
);

export default Layout;
