import React from 'react';

import './Dashboard.scss';

import { Player } from '../';

import {connect} from 'react-redux';

const Dashboard = ({ children, playerHeight }) => (
    <div className="dashboard" data-testid="dashboard" style={{paddingBottom: `${playerHeight}px` }}>
        {children}
        <Player/>
    </div>);

export default connect(state=>({playerHeight: state.content.playerHeight}))(Dashboard);

