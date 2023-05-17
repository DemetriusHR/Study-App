import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import Header from '../Header';
import Navigation from '../Navigation';

const GridItemNavigation = styled(Grid)((props) => ({
  [props.theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const Layout = () => (
  <Grid container spacing={2} p={2}>
    <GridItemNavigation item xs={0} md={3}>
      <Paper elevation={2}>
        <Navigation />
      </Paper>
    </GridItemNavigation>
    <Grid item xs={12} md={9}>
      <Header />
      <Box paddingTop={4}>
        <Outlet />
      </Box>
    </Grid>
  </Grid>
);

export default Layout;
