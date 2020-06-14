import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Stories from "../Stories"
import Topbar from '../../components/Topbar';

import Routes from '../../routes';

import './App.scss';

const App = () => (
  <div data-testid="app">
    <BrowserRouter>
      <Topbar></Topbar>
      <Stories></Stories>
      <Routes></Routes>

    </BrowserRouter>
  </div>
);

export default App;
