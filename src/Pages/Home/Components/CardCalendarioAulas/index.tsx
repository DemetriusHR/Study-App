import React from 'react';
import Box from '@mui/material/Box';
import CardMui from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import DiasCalendario from './DiasCalendario';
import NavegacaoMeses from './NavegacaoMeses';
import InformacoesAulaDia from './InformacoesAulaDia';

const Card = styled(CardMui)`
  text-align: center;
`;

const CardCalendarioAulas = () => (
  <Card>
    <CardContent>
      <Stack spacing={3}>
        <NavegacaoMeses />
        <Box>
        <Typography textAlign="left" gutterBottom>
          Aulas do dia
        </Typography>
        <DiasCalendario />
        </Box>
        <InformacoesAulaDia />
      </Stack>
    </CardContent>
  </Card>
);

export default CardCalendarioAulas;
