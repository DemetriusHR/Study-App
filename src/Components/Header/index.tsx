import React from 'react';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Header = () => (
  <Paper elevation={2}>
    <Stack spacing={4} p={2}>
      <Skeleton variant="rounded" height={60} />
      <Stack spacing={2}>
        <Typography>Início</Typography>
        <Typography>Calendário de aulas</Typography>
        <Typography>Notas e frequência</Typography>
        <Typography>Atividades das aulas</Typography>
        <Typography>Arquivos das aulas</Typography>
      </Stack>
    </Stack>
  </Paper>
);

export default Header;
