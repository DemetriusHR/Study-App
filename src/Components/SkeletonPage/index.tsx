import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const SkeletonPage = () => (
  <Stack spacing={1}>
    <Skeleton variant="rounded" height={60} />
    <Skeleton variant="rounded" height={60} />
  </Stack>
);

export default SkeletonPage;
