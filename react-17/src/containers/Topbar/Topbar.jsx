import React from 'react';

import './Topbar.scss';

import { Link } from "react-router-dom";

import { Logo } from "../../components";

import { connect }  from "react-redux";

const Topbar = ({auth,user,dispatch}) => (
    <header className="topbar"  data-testid="topbar">
        <div className="container">
            <Link to="/dashboard">
                <Logo></Logo>
            </Link>
            <div className="user">
                <span className="user__name">{user.name}</span>
                <img className="user__thumb" src={user.thumb} alt={user.name}/>
            </div>
        </div>
    </header>);

export default connect(state=> ({auth: state.auth, user: state.user}))(Topbar);
