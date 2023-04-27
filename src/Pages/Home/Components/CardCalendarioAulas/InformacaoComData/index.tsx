import React, { useMemo } from 'react';
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

const CardHorario = styled(Card)`
  border-radius: 10px;
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
            <CardHorario variant="outlined">
              <CardContent>
                <Typography>{horaFormatada}</Typography>
              </CardContent>
            </CardHorario>
            <Stack spacing={1}>
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
