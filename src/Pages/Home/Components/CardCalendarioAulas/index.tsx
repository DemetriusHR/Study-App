import React, { useState, useCallback, useMemo } from 'react';
import Button from '@mui/material/Button';
import CardMui from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowRight from '@mui/icons-material/ArrowRight';
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import { styled } from '@mui/material/styles';

import InformacaoAulaComData from './InformacaoComData';

const Card = styled(CardMui)`
  height: 100%;
  text-align: center;
`;

const dataAtual = new Date();
const meses = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const CardCalendarioAulas = () => {
  const [mesAtual, setMesAtual] = useState(dataAtual.getMonth());

  const mesTexto = useMemo(() => {
    return meses[mesAtual];
  }, [mesAtual]);

  const irParaMesAnterior = useCallback(() => {
    setMesAtual((prevMesAtual) => {
      if (prevMesAtual > 1) {
        return prevMesAtual - 1;
      }

      return prevMesAtual;
    });
  }, []);

  const irParaProximoMes = useCallback(() => {
    setMesAtual((prevMesAtual) => {
      if (prevMesAtual < 11) {
        return prevMesAtual + 1;
      }

      return prevMesAtual;
    });
  }, []);

  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="space-between"
            justifyItems="center"
          >
            <Button
              variant="outlined"
              startIcon={<ArrowLeft />}
              onClick={irParaMesAnterior}
            >
              Mês anterior
            </Button>
            <Typography flex="1">
              {mesTexto} {dataAtual.getFullYear()}
            </Typography>
            <Button
              variant="outlined"
              endIcon={<ArrowRight />}
              onClick={irParaProximoMes}
            >
              Próximo mês
            </Button>
          </Stack>
          <Typography textAlign="left">Aulas do dia</Typography>
          <InformacaoAulaComData
            aula="Português"
            onde="Online - Google Meet"
            data={new Date('02-14-2023 19:30')}
          />
          <InformacaoAulaComData
            aula="Matemática"
            onde="Online - Zoom Meeting"
            data={new Date('02-14-2023 21:00')}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardCalendarioAulas;
