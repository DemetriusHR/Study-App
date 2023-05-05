import React from 'react';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

import ButtonNav from './ButtonNav';
import listAttributesButtons from './listAttributesButtons';

const Navigation = () => (
  <Paper elevation={2}>
    <Stack spacing={4} p={2}>
      <Skeleton variant="rounded" height={60} />
      <Stack spacing={2}>
        {listAttributesButtons.map((attribute) => (
          <ButtonNav
            key={attribute.route}
            route={attribute.route}
            iconDefault={attribute.iconDefault}
            iconActived={attribute.iconActived}
          >
            {attribute.name}
          </ButtonNav>
        ))}
      </Stack>
    </Stack>
  </Paper>
);

export default Navigation;
