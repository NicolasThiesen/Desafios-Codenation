import React  from 'react';
import PropTypes from 'prop-types';

import { Loading, RouteHeader } from '../../components';
import Track from './Track';

import './Tracks.scss';


const Tracks = ({ categoryName, data, isLoading, path }) => (
    <div className="tracks" data-testid="tracks" >
        <div className="container">
            <RouteHeader path={path} categoryName={categoryName.name}/>
            {isLoading 
                ? <div className="tracks__content">
                    {data!== undefined && data.map(({track}, index) => <Track key={`${index} - ${track.id}`} track={track}></Track>)}
                </div>
                : <Loading></Loading>
        }
        </div>
    </div>);

export default Tracks;

