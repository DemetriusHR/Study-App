import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Home = () => (
  <Grid container spacing={2} paddingTop={4}>
    <Grid item xs={12}>
      <Typography variant="h6">Seja bem vindo de volta, Demétrius</Typography>
    </Grid>
    <Grid item xs={6}>
      <Stack spacing={2}>
        <Paper>teste</Paper>
        <Paper>teste</Paper>
      </Stack>
    </Grid>
    <Grid item xs={6}>
      <Paper>teste</Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper>teste</Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper>teste</Paper>
    </Grid>
  </Grid>
);

export default Home;
