import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowRight from '@mui/icons-material/ArrowRightAlt';

import InformacaoComData from '../InformacaoComData';

const proximasProvas = [
  {
    prova: 'Português',
    data: new Date('02-14-2023 19:00'),
  },
  {
    prova: 'Matemática',
    data: new Date('02-18-2023 19:00'),
  },
];

const CardProximasProvas = () => (
  <Card>
    <CardContent>
      <Stack spacing={2}>
        <Typography variant="h6">Próximas provas</Typography>
        <Stack spacing={1}>
          <Typography variant="caption" textAlign="right">
            Data
          </Typography>
          {proximasProvas.map((prova) => (
            <InformacaoComData
              dataComHoras
              key={prova.data.toJSON()}
              informacao={prova.prova}
              data={prova.data}
            />
          ))}
        </Stack>
        <Button variant="text" endIcon={<ArrowRight />}>
          Ver todas as provas
        </Button>
      </Stack>
    </CardContent>
  </Card>
);

export default CardProximasProvas;
