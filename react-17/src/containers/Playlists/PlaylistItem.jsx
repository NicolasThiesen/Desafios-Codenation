import React  from 'react';
import PropTypes from 'prop-types';
import Ink from 'react-ink';
import { Link } from 'react-router-dom';

const PlaylistItem = ({ categoryId, description, id, image, name, path }) => (
    <div className="playlists__item" data-testid="playlist" >
        <Link style={{backgroundImage: `url(${image.url})`}} className="playlists__item__link" to={`${path}/${categoryId}/${id}`}>
            <Ink></Ink>
        </Link>
        <p className="playlists__item__description">
                <strong>{name}</strong>
                {description}
            </p>
    </div>)

export default PlaylistItem;

