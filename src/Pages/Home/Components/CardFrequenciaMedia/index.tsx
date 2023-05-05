import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import BoxMostraStatusInformacao from './BoxMostraStatusInformacao';
import StackRow from '../../../../Components/StackRow';

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
      <StackRow paddingX={4}>
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
      </StackRow>
    </CardContent>
  </Card>
);

export default CardFrequenciaMedia;
