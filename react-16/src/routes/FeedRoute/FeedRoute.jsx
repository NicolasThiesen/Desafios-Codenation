import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

import api from "../../services/api";

const FeedRoute = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([])
  useEffect(() => {
    api.get("/users")
      .then((res) => {
        setUsers(res["data"]);
        res["data"].map((user)=>{
          api.get(`/users/${user.id}/posts`)
            .then((resPost)=>{
              setPosts(posts =>[...posts ,resPost["data"]]);
            });
        })
      });
    api.get("/stories")
      .then( (res) => {
        setStories(res["data"]);
      })
  },[]);
  const getUserByPostID = (userPost) => users.find((user)=> user.id === userPost);
  return (
    <div data-testid="feed-route" data-testid="feed-route">
      { stories.length > 0 ? <Stories stories={stories} getUserHandler={getUserByPostID}></Stories> : <div/> }
      { posts.length !== users.length && users.length !==0 ? <Loading></Loading> : <Posts posts={posts} getUserHandler={getUserByPostID}></Posts>}
    </div>
  );
};

export default FeedRoute;
