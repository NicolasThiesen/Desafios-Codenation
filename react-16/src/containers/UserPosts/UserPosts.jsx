import React from 'react';

import Post from '../../components/Post';

import './UserPosts.scss';

const UserPosts = ({ posts, user }) => (
  <div className="container" data-testid="user-posts">
    <section className="user-posts">
    {
      posts.length > 0 
      ? posts.map((post)=> <Post postInfo={post} userInfo={user} complement={false} key={post["id"]} /> )
      : (
        <div className="no-possts">
          <span className="no-posts__content">Não há publicações deste usuário!</span>
          <span className="no-posts__emoji" role="img">😥</span>
        </div>
      ) 
    }
    </section>
  </div>
);

export default UserPosts;
