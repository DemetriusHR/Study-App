import React, { useState, useCallback, useMemo } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowRight from '@mui/icons-material/ArrowRight';
import ArrowLeft from '@mui/icons-material/ArrowLeft';

import StackRow from '../../../../../Components/StackRow';

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
    <StackRow spacing={2}>
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
    </StackRow>
  );
};

export default NavegacaoMeses;
