import React, { useMemo } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type InformacaoComDataProps = {
  informacao: string;
  data: Date;
  dataComHoras?: boolean;
};

const InformacaoComData = ({
  informacao,
  data,
  dataComHoras = false,
}: InformacaoComDataProps) => {

  const dataFormatada = useMemo(() => {
    let dataRetornada = data.toLocaleDateString();
    dataRetornada = dataRetornada.substring(0, dataRetornada.lastIndexOf('/'));

    if (dataComHoras) {
      dataRetornada = `${dataRetornada} ${data.getHours()}:${data.getMinutes()}`;
    }

    return dataRetornada;
  }, [data, dataComHoras]);

  return (
    <Card elevation={5}>
      <CardActionArea>
        <CardContent>
          <Stack spacing={2} direction="row" justifyContent="space-between">
            <Typography>{informacao}</Typography>
            <Typography>{dataFormatada}</Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default InformacaoComData;
