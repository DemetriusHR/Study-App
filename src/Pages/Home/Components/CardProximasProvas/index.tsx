import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowRight from '@mui/icons-material/ArrowRightAlt';

import InformacaoComData from '../InformacaoComData';

const CardProximasProvas = () => (
  <Card>
    <CardContent>
      <Stack spacing={2}>
        <Typography variant="h6">Próximas provas</Typography>
        <Stack spacing={1}>
          <Typography variant="caption" textAlign="right">
            Data
          </Typography>
          <InformacaoComData
            informacao="Português"
            data={new Date('02-14-2023 19:00')}
            dataComHoras
          />
          <InformacaoComData
            informacao="Matemática"
            data={new Date('02-18-2023 19:00')}
            dataComHoras
          />
        </Stack>
        <Button variant="text" endIcon={<ArrowRight />}>
          Ver todas as provas
        </Button>
      </Stack>
    </CardContent>
  </Card>
);

export default CardProximasProvas;
