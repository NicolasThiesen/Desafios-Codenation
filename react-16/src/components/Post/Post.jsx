import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo, complement }) => {
  const [followed,setFollow] = useState(false)
  const [like,setLike] = useState({liked:false, like:0});
  const handleChange = (state) => {
    switch (state){
      case "follow":
        setFollow(!followed);
        break;
      case "like":
        setLike({liked:!like.liked, like: like.like === 0 ? 1 : 0 });
        break; 
      default:
        console.log("error")
    }

  }
  return (
    <article className="post" data-testid="post"> 
      {complement && (
      <div className="post__header">
        <div className="user">
        <Link to={`/users/${userInfo["username"]}`} className="user__thumb">
            <img src={userInfo["avatar"]} alt={userInfo["name"]}/>
          </Link>
          <Link to={`/users/${userInfo["username"]}`}>
            <span className="user__name">T'Challa</span>
          </Link>
        </div>

        <button className="post__context" onClick={()=>handleChange("follow")}>
          { followed ? <span className="follow-btn is-following">Seguindo</span> : <span className="follow-btn">Seguir</span> }
        </button>
      </div>)}
      <div className="post__figure">
        <img src={postInfo["imageUrl"]} alt={userInfo["name"]} onDoubleClick={() => handleChange("like")} />
      </div>
      {complement && <div className="post__controls">
        <button className="post__control" onClick={() =>handleChange("like")}>
          {like.liked ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
        </button>
        <div className="user">
          <span>
            Curtido por <Link to={`/`}> {postInfo["comments"][0]["name"]} </Link> { postInfo["comments"].length >0 ? <span> e outras <Link to={`/`}>{postInfo["comments"].length -1 + like.like } pessoas</Link></span> : <span></span>}
          </span>
        </div>
      </div>}
    </article>
  );
};

export default Post;
