import React from 'react';
import Stack from '@mui/material/Stack';

import InformacaoAulaComData from './InformacaoComData';

const aulas = [
  {
    aula: 'Português',
    onde: 'Online - Google Meet',
    data: new Date('02-14-2023 19:30'),
  },
  {
    aula: 'Matemática',
    onde: 'Online - Zoom Meeting',
    data: new Date('02-14-2023 21:00'),
  },
];

const InformacoesAulaDia = () => (
  <Stack spacing={2}>
    {aulas.map((aula) => (
      <InformacaoAulaComData
        key={aula.data.toJSON()}
        aula={aula.aula}
        onde={aula.onde}
        data={aula.data}
      />
    ))}
  </Stack>
);

export default InformacoesAulaDia;
