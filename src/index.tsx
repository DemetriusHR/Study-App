import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import Routes from './Routes';
import Theme from './Theme';
import SkeletonPage from './Components/SkeletonPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <React.Suspense fallback={<SkeletonPage />}>
        <BrowserRouter>
          <Routes />
          <CssBaseline />
        </BrowserRouter>
      </React.Suspense>
    </ThemeProvider>
  </React.StrictMode>,
);

