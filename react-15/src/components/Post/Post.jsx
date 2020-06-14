import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  return (
    <article className="post" data-testid="post">
      <div className="post__header">
        <div className="user">
          <Link to={`/`} className="user__thumb">
            <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg" alt="T'Challa"/>
            
          </Link>
          <Link to="/">
            <span className="user__name">T'Challa</span>
          </Link>
        </div>

        <button className="post__context"><span className="follow-btn">Seguir</span></button>
      </div>
      <div className="post__figure">
        <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-1.jpg" alt="Post"/>
      </div>
      <div className="post__controls">
        <button className="post__control">
          <i class="far fa-heart"></i>
        </button>
        <div className="user">

          <span>
            Curtido por <Link to="/">Yoda</Link> e outras <Link>pessoas</Link>
          </span>
        </div>
      </div>
    </article>
  );
};

export default Post;
