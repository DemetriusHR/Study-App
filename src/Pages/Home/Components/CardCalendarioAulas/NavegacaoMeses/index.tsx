import React, { useState, useCallback, useMemo } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowRight from '@mui/icons-material/ArrowRight';
import ArrowLeft from '@mui/icons-material/ArrowLeft';

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

const NavegacaoMeses = () => {
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
    <Stack
      spacing={2}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
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
  );
};

export default NavegacaoMeses;
