import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as LogoSvg } from '../../assets/img/instagram-logo.svg';

import './Topbar.scss';

const Topbar = () => (
  <header className="topbar" data-testid="topbar">
    <div className="container">
      <div className="topbar__logo">
        <Link to="/">
          <LogoSvg alt="Logo do instagram"></LogoSvg>
        </Link>
      </div>
      <div className="topbar__group">
        <Link to="/" className="topbar__icon">
          <i class="fas fa-users"></i>
          <span>Usuários</span>
        </Link>
        <Link to="/" className="topbar__icon">
          <i class="fas fa-user-plus"></i>
          <span>Nova Conta</span>
        </Link>
      </div>
    </div>
  </header>
);

export default Topbar;
