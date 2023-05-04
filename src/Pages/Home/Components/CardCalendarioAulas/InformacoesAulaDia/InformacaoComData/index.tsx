import React, { useMemo } from 'react';
import BoxMui from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { styled } from '@mui/material/styles';

type InformacaoAulaComDataProps = {
  aula: string;
  data: Date;
  onde: string;
};

const Box = styled(BoxMui)`
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid #D4D4D4;
  display: flex;
  align-items: center;
`;

const InformacaoAulaComData = ({
  aula,
  data,
  onde,
}: InformacaoAulaComDataProps) => {
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
          <Stack
            spacing={2}
            direction="row"
            justifyContent="space-between"
            justifyItems="center"
          >
            <Box>{horaFormatada}</Box>
            <Stack spacing={1} flex="1 0 auto">
              <Typography textAlign="left">{aula}</Typography>
              <Typography textAlign="left">{onde}</Typography>
            </Stack>
            <Button variant="text" endIcon={<ArrowOutwardIcon />}>
              Assistir a aula
            </Button>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default InformacaoAulaComData;