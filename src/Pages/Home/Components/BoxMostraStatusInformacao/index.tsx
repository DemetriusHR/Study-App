import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

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
    <Box textAlign="center">
      <Box
        p={5}
        paddingY={6}
        marginBottom={2}
        borderRadius="100%"
        border="2px solid"
        borderColor={corStatus}
      >
        <Typography
          color={corStatus}
          fontSize={theme.typography.h6.fontSize}
          minWidth="50px"
        >
          {informacao}
        </Typography>
      </Box>
      <Typography>{titulo}</Typography>
    </Box>
  );
};

export default BoxMostraStatusInformacao;
