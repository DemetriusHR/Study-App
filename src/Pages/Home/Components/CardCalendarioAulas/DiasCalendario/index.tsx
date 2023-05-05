import React, { useCallback, useState } from 'react';

import DiaCalendario from './DiaCalendario';
import StackRow from '../../../../../Components/StackRow';

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
    <StackRow spacing={2} overflow="auto" paddingY={2} paddingX={1}>
      {datas.map((data, index) => (
        <DiaCalendario
          key={data.toJSON()}
          data={data}
          diaSelecionado={diaSelecionado === index}
          onClick={() => mudaDiaSelecionado(index)}
        />
      ))}
    </StackRow>
  );
};

export default DiasCalendario;
