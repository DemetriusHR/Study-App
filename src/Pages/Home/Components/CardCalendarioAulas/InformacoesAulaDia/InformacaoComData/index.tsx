import React, { useMemo } from 'react';
import BoxMui from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useTheme, styled } from '@mui/material/styles';

import StackRow from '../../../../../../Components/StackRow';

type InformacaoAulaComDataProps = {
  aula: string;
  data: Date;
  onde: string;
};

const Box = styled(BoxMui)`
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  border: 1px solid #d4d4d4;
  display: flex;
  align-items: center;
`;

const InformacaoAulaComData = ({
  aula,
  data,
  onde,
}: InformacaoAulaComDataProps) => {
  const theme = useTheme();

  const horaFormatada = useMemo(() => {
    const dataComIntl = new Intl.DateTimeFormat('pt-BR', {
      timeStyle: 'short',
    });

    return dataComIntl.format(data);
  }, [data]);

  return (
    <Card elevation={5}>
      <CardActionArea>
        <CardContent>
          <StackRow spacing={2}>
            <Box>{horaFormatada}</Box>
            <Stack spacing={1} flex="1 0 auto">
              <Typography textAlign="left">{aula}</Typography>
              <Typography textAlign="left">{onde}</Typography>
            </Stack>
            <StackRow spacing={2} color={theme.palette.primary.main}>
              <Typography>Assistir a aula</Typography>
              <ArrowOutwardIcon />
            </StackRow>
          </StackRow>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default InformacaoAulaComData;
