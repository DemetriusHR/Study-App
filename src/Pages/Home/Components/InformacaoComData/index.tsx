import React, { useMemo } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import StackRow from '../../../../Components/StackRow';

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
    let dataRetornada = data.toLocaleDateString('pt-BR');

    dataRetornada = dataRetornada.substring(0, dataRetornada.lastIndexOf('/'));

    if (dataComHoras) {
      const dataComIntl = new Intl.DateTimeFormat('pt-BR', {
        timeStyle: 'short',
      });

      dataRetornada = `${dataRetornada} ${dataComIntl.format(data)}`;
    }

    return dataRetornada;
  }, [data, dataComHoras]);

  return (
    <Card elevation={5}>
      <CardActionArea>
        <CardContent>
          <StackRow spacing={2}>
            <Typography>{informacao}</Typography>
            <StackRow spacing={1}>
              <Typography>{dataFormatada}</Typography>
              <ArrowOutwardIcon color="primary" />
            </StackRow>
          </StackRow>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default InformacaoComData;
