import React, { useState, useEffect } from 'react';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

import api from "../../services/api";

const ProfileRoute = (props) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState("");
  const [name, setName] = useState(""); 
  const [avatar, setAvatar] = useState(""); 
  
  useEffect(() =>{
    api.get(`/users?search=${props.match.params.username}`)
      .then((res)=>{
        setUser(res["data"][0]);
        setUsername(res["data"][0]["name"]);
        setAvatar(res["data"][0]["avatar"]);
        setName(res["data"][0]["name"]);
        api.get(`/users/${res["data"][0]["id"]}/posts`)
          .then((resPost)=>{
            setPosts(resPost["data"]);
          })
      });
  },[])
  return (
    <div data-testid="profile-route">
      {user &&  <UserProfile avatar={avatar} name={name} username={username} ></UserProfile>}
      {user ? <UserPosts posts={posts} user={user} /> : <Loading/> }
    </div>
  );
};

export default ProfileRoute;
