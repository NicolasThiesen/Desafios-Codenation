import React from 'react';

import Post from '../../components/Post';

const Posts = ({ posts, getUserHandler }) => (
  <div className="container" data-testid="posts">
    <section className="feed">
      {
        posts.map((userPosts)=> {
          if(userPosts.length>0){
            return userPosts.map((post)=> <Post postInfo={post} userInfo={getUserHandler(post["userId"])} complement={true} key={post["id"]} />);
          } 
        })
      }
    </section>
  </div>
);

export default Posts;
