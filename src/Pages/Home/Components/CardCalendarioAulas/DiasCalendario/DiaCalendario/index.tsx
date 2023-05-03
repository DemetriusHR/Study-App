import React from 'react';
import BoxMui from '@mui/material/Box';
import { useTheme, styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const Box = styled(BoxMui)({
  borderRadius: '10px',
  height: '100%',
  cursor: 'pointer',
});

const dia = ['DOM', 'SEG', 'TER', 'QUA', 'QUA', 'SEX', 'SÁB'];

type DiaCalendarioProps = {
  data: Date;
  diaSelecionado?: boolean;
  onClick: () => void;
};

const DiaCalendario = ({
  data,
  diaSelecionado = false,
  onClick,
}: DiaCalendarioProps) => {
  const theme = useTheme();

  return (
    <Box
      boxShadow={theme.shadows[4]}
      paddingX={theme.spacing(3)}
      paddingY={diaSelecionado ? theme.spacing(4) : theme.spacing(3)}
      onClick={onClick}
    >
      <Typography gutterBottom>{dia[data.getDay()]}</Typography>
      <Typography>{data.getDate()}</Typography>
    </Box>
  );
};

export default DiaCalendario;
