import React from 'react';
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

const listAttributesButtons = [
  {
    route: '/',
    iconDefault: <Home />,
    iconActived: <HomeOutlined />,
    name: 'Início',
  },
  {
    route: '/calendario-aulas',
    iconDefault: <CalendarToday />,
    iconActived: <CalendarTodayOutlined />,
    name: 'Calendário de aulas',
  },
  {
    route: '/notas-frequencias',
    iconDefault: <Assessment />,
    iconActived: <AssessmentOutlined />,
    name: 'Notas e frequência',
  },
  {
    route: '/atividades-aulas',
    iconDefault: <CollectionsBookmark />,
    iconActived: <CollectionsBookmarkOutlined />,
    name: 'Atividades das aulas',
  },
  {
    route: '/arquivos-aulas',
    iconDefault: <Collections />,
    iconActived: <CollectionsOutlined />,
    name: 'Arquivos das aulas',
  },
];

export default listAttributesButtons;
