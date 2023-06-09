import React from 'react';
import Grid from '@mui/material/Grid';
import StackMui from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import CardFrequenciaMedia from './Components/CardFrequenciaMedia';
import CardConexoes from './Components/CardConexoes';
import CardTarefasPendentes from './Components/CardTarefasPendentes';
import CardProximasProvas from './Components/CardProximasProvas';
import CardCalendarioAulas from './Components/CardCalendarioAulas';

const Stack = styled(StackMui)`
  height: 100%;
`;

const Home = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Typography variant="h5">Seja bem vindo de volta, Demétrius</Typography>
    </Grid>
    <Grid item xs={12} md={6}>
      <Stack spacing={2}>
        <CardFrequenciaMedia />
        <CardConexoes />
      </Stack>
    </Grid>
    <Grid item xs={12} md={6}>
      <CardCalendarioAulas />
    </Grid>
    <Grid item xs={12} md={6}>
      <CardTarefasPendentes />
    </Grid>
    <Grid item xs={12} md={6}>
      <CardProximasProvas />
    </Grid>
  </Grid>
);

export default Home;
