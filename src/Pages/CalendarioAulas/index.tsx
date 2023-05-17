import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SelectMes from './Components/SelectMes';

const CalendarioAulas = () => (
  <Box>
    <Card>
      <CardContent>
        <SelectMes />
      </CardContent>
    </Card>
  </Box>
);

export default CalendarioAulas;
