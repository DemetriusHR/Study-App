import React, { useMemo } from 'react';
import BoxMui from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme, styled } from '@mui/material/styles';

const Box = styled(BoxMui)((props) => ({
  paddingLeft: props.theme.spacing(5),
  paddingRight: props.theme.spacing(5),
  paddingTop: props.theme.spacing(6),
  paddingBottom: props.theme.spacing(6),
  marginBottom: props.theme.spacing(2),
  borderRadius: '100%',
  border: '2px solid',
  borderColor: props.borderColor?.toString(),
}));

type BoxMostraStatusInformacaoProps = {
  informacao: string;
  status: 'bom' | 'medio' | 'ruim';
  titulo: string;
};

const BoxMostraStatusInformacao = ({
  informacao,
  status,
  titulo,
}: BoxMostraStatusInformacaoProps) => {
  const theme = useTheme();

  const corStatus = useMemo(() => {
    if (status === 'bom') {
      return theme.palette.success.main;
    }

    if (status === 'medio') {
      return theme.palette.warning.main;
    }

    return theme.palette.error.main;
  }, [status, theme.palette]);

  return (
    <BoxMui textAlign="center">
      <Box borderColor={corStatus}>
        <Typography
          color={corStatus}
          fontSize={theme.typography.h6.fontSize}
          minWidth="50px"
        >
          {informacao}
        </Typography>
      </Box>
      <Typography>{titulo}</Typography>
    </BoxMui>
  );
};

export default BoxMostraStatusInformacao;
