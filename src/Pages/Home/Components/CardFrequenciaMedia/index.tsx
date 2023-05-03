import React from 'react';
import CardMui from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import BoxMostraStatusInformacao from './BoxMostraStatusInformacao';

const Card = styled(CardMui)`
  height: 100%;
`;

const CardFrequenciaMedia = () => (
  <Card>
    <CardContent>
      <Stack direction="row" paddingX={4} justifyContent="space-between">
        <BoxMostraStatusInformacao informacao="98%" status="bom" titulo="Frequência geral" />
        <BoxMostraStatusInformacao informacao="A" status="bom" titulo="Média de nota" />
      </Stack>
    </CardContent>
  </Card>
);

export default CardFrequenciaMedia;
