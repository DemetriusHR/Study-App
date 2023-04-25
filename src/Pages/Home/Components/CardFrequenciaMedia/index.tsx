import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';

import BoxMostraStatusInformacao from '../BoxMostraStatusInformacao';

const CardFrequenciaMedia = () => (
  <Card>
    <CardContent>
      <Stack direction="row" paddingX={4} justifyContent="space-between">
        <BoxMostraStatusInformacao informacao="98%" status="ruim" titulo="Frequência geral" />
        <BoxMostraStatusInformacao informacao="A" status="medio" titulo="Média de nota" />
      </Stack>
    </CardContent>
  </Card>
);

export default CardFrequenciaMedia;
