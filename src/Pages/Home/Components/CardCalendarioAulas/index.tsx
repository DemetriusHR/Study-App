import React from 'react';
import CardMui from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import DiasCalendario from './DiasCalendario';
import NavegacaoMeses from './NavegacaoMeses';
import InformacoesAulaDia from './InformacoesAulaDia';

const Card = styled(CardMui)`
  height: 100%;
  text-align: center;
`;

const CardCalendarioAulas = () => (
  <Card>
    <CardContent>
      <Stack spacing={2}>
        <NavegacaoMeses />
        <Typography textAlign="left" gutterBottom>
          Aulas do dia
        </Typography>
        <DiasCalendario />
        <InformacoesAulaDia />
      </Stack>
    </CardContent>
  </Card>
);

export default CardCalendarioAulas;
