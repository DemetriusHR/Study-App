import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';

import BoxMostraStatusInformacao from './BoxMostraStatusInformacao';

type IInformacoes = {
  frequencia: {
    porcentagem: number;
    status: 'bom' | 'medio' | 'ruim';
  };
  nota: {
    nota: string;
    status: 'bom' | 'medio' | 'ruim';
  };
};

const informacoes: IInformacoes = {
  frequencia: {
    porcentagem: 98,
    status: 'bom',
  },
  nota: {
    nota: 'A',
    status: 'bom',
  },
};

const CardFrequenciaMedia = () => (
  <Card>
    <CardContent>
      <Stack direction="row" paddingX={4} justifyContent="space-between">
        <BoxMostraStatusInformacao
          informacao={`${informacoes.frequencia.porcentagem}%`}
          status={informacoes.frequencia.status}
          titulo="Frequência geral"
        />
        <BoxMostraStatusInformacao
          informacao={informacoes.nota.nota}
          status={informacoes.nota.status}
          titulo="Média de nota"
        />
      </Stack>
    </CardContent>
  </Card>
);

export default CardFrequenciaMedia;
