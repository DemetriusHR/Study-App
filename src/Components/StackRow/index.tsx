import React from 'react';
import Stack, { StackProps } from '@mui/material/Stack';

const StackRow = (props: StackProps) => (
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    {...props}
  />
);

export default StackRow;
