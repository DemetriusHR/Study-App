import React from 'react';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Home from '@mui/icons-material/Home';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import CalendarToday from '@mui/icons-material/CalendarToday';
import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined';
import Assessment from '@mui/icons-material/Assessment';
import AssessmentOutlined from '@mui/icons-material/AssessmentOutlined';
import CollectionsBookmark from '@mui/icons-material/CollectionsBookmark';
import CollectionsBookmarkOutlined from '@mui/icons-material/CollectionsBookmarkOutlined';
import Collections from '@mui/icons-material/Collections';
import CollectionsOutlined from '@mui/icons-material/CollectionsOutlined';

import ButtonNav from './ButtonNav';

const Navigation = () => (
  <Paper elevation={2}>
    <Stack spacing={4} p={2}>
      <Skeleton variant="rounded" height={60} />
      <Stack spacing={2}>
        <ButtonNav
          route="/"
          iconDefault={<Home />}
          iconActived={<HomeOutlined />}
        >
          Início
        </ButtonNav>
        <ButtonNav
          route="/calendario-aulas"
          iconDefault={<CalendarToday />}
          iconActived={<CalendarTodayOutlined />}
        >
          Calendário de aulas
        </ButtonNav>
        <ButtonNav
          route="/notas-frequencias"
          iconDefault={<Assessment />}
          iconActived={<AssessmentOutlined />}
        >
          Notas e frequência
        </ButtonNav>
        <ButtonNav
          route="/atividades-aulas"
          iconDefault={<CollectionsBookmark />}
          iconActived={<CollectionsBookmarkOutlined />}
        >
          Atividades das aulas
        </ButtonNav>
        <ButtonNav
          route="/arquivos-aulas"
          iconDefault={<Collections />}
          iconActived={<CollectionsOutlined />}
        >
          Arquivos das aulas
        </ButtonNav>
      </Stack>
    </Stack>
  </Paper>
);

export default Navigation;
