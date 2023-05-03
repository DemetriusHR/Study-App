import React from 'react';
import CardMui from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import WhatsApp from '@mui/icons-material/WhatsApp';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import { styled } from '@mui/material/styles';

import ButtonConexao from './ButtonConexao';

const Card = styled(CardMui)`
  height: 100%;
`;

const CardConexoes = () => (
  <Card>
    <CardContent>
      <Stack spacing={2}>
        <Typography variant="h6">Conexões</Typography>
        <Stack spacing={2} direction="row" justifyContent="space-between">
          <ButtonConexao
            icon={<WhatsApp fontSize="large" />}
            texto="Entrar no grupo da sala no Whatsapp"
          />
          <ButtonConexao
            icon={<CalendarMonth fontSize="large" />}
            texto="Marcar um horário para falar com um professor"
          />
        </Stack>
      </Stack>
    </CardContent>
  </Card>
);

export default CardConexoes;
