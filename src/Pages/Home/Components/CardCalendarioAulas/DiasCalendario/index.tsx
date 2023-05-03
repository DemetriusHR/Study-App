import React, { useCallback, useState } from 'react';
import Stack from '@mui/material/Stack';

import DiaCalendario from './DiaCalendario';

const datas = [
  new Date('02-14-2023'),
  new Date('02-15-2023'),
  new Date('02-16-2023'),
  new Date('02-17-2023'),
  new Date('02-20-2023'),
];

const DiasCalendario = () => {
  const [diaSelecionado, setDiaSelecionado] = useState(0);

  const mudaDiaSelecionado = useCallback((novoDiaSelecionado: number) => {
    setDiaSelecionado(novoDiaSelecionado);
  }, []);

  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      overflow="auto"
      padding="4px"
    >
      {datas.map((data, index) => (
        <DiaCalendario
          key={data.toJSON()}
          data={data}
          diaSelecionado={diaSelecionado === index}
          onClick={() => mudaDiaSelecionado(index)}
        />
      ))}
    </Stack>
  );
};

export default DiasCalendario;
