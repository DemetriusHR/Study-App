import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Components/Layout';

const Home = React.lazy(() => import('../Pages/Home'));
const CalendarioAulas = React.lazy(() => import('../Pages/CalendarioAulas'));

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/calendario-aulas" element={<CalendarioAulas />} />
      <Route path="*" element={<p>404</p>} />
    </Route>
  </Routes>
);

export default RoutesComponent;
