/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/jsx-one-expression-per-line */
import Home from './pages/home/Home';
import { BrowserRouter as Router, Navigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import {
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from 'react-router';

// https://reactrouter.com/docs/en/v6

function AppRoutes() {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route element={<Navigate replace to="/home" />} index />
      <Route element={<Home />} path="/home" />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AppContainer />
    </Router>
  );
}

function AppContainer() {
  const location = useLocation();
  const action = useNavigationType();

  useEffect(() => {
    const { pathname = '', search = '' } = location;
    console.log(`router mode: ${action}, url: ${pathname}${search}`);
  });

  return (
    <AppRoutes />
  );
}

export enum Action {
  Pop = 'POP',
  Push = 'PUSH',
  Replace = 'REPLACE',
}
