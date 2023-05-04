import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowRight from '@mui/icons-material/ArrowRightAlt';

import InformacaoComData from '../InformacaoComData';

const tarefasPendentes = [
  {
    informacao: 'Pesquisa de linguística',
    data: new Date('02-07-2023'),
  },
  {
    informacao: 'Cálculos',
    data: new Date('02-04-2023'),
  },
];

const CardTarefasPendentes = () => (
  <Card>
    <CardContent>
      <Stack spacing={2}>
        <Typography variant="h6">Tarefas pendentes</Typography>
        <Stack spacing={1}>
          <Typography variant="caption" textAlign="right">
            Data de entrega
          </Typography>
          {tarefasPendentes.map((tarefa) => (
            <InformacaoComData key={tarefa.data.toJSON()} {...tarefa} />
          ))}
        </Stack>
        <Button variant="text" endIcon={<ArrowRight />}>
          Ver todas as tarefas
        </Button>
      </Stack>
    </CardContent>
  </Card>
);

export default CardTarefasPendentes;
