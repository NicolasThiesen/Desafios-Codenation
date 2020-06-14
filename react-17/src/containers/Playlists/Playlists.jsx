import React  from 'react';

import './Playlists.scss';

import { RouteHeader, Loading } from '../../components';

import PlaylistItem from './PlaylistItem';


const Playlists = ({ data, categoryName, categoryId, isLoading, path }) => (
    <div className="playlists" data-testid="playlists">
        <div className="container">
            <RouteHeader path={path} categoryName={categoryName.name}></RouteHeader>
            {isLoading 
                ? <div className="playlists__content">
                    {data !== undefined && data.map(playlist => 
                        <PlaylistItem 
                            categoryId={categoryId} 
                            description={playlist.description} 
                            id={playlist.id}
                            key={playlist.id}
                            name={playlist.name}
                            path={path}
                            image={playlist.images[0]}  
                        ></PlaylistItem>)}
                </div>
                : <Loading></Loading>
            }
        </div>
    </div>);

export default Playlists;

