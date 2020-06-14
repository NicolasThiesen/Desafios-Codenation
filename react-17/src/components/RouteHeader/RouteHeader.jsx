import React  from 'react';

import { RiArrowLeftLine } from 'react-icons/ri';

import './RouteHeader.scss';

import { Link } from "react-router-dom";

const RouterHeader = ({ categoryName, path }) => (
    <div className="route-header" data-testid="route-header">
        <div className="route-header__title-group">
            {path !== undefined 
                ? <Link to={path}>
                    <RiArrowLeftLine></RiArrowLeftLine>
                </Link>
                : <Link to="/dashboard">
                    <RiArrowLeftLine></RiArrowLeftLine>
                </Link>
             }
            <span className="route-header__title">{categoryName}</span>
        </div>
    </div>);

export default RouterHeader;

