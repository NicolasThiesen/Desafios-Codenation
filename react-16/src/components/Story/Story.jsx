import React, { useCallback, useState } from "react";

import { Link } from 'react-router-dom';

import './Story.scss';

const Story = ({ story, user, handleClose }) => {
  const [currentTime,setCurrentTime] = useState(null);
  const [duration, setDuration] = useState(null);
  
  const handleChangeProgress = useCallback(()=>{
    if(duration!=null && currentTime!=null){
      const elapsed_time = ((currentTime/duration)*100)
      return `${elapsed_time.toFixed(2)}%`;
    }else{
      return "0%"
    }
  },[duration,currentTime])
  return (
    <section className="story" data-testid="story">
      <div className="container">
        <header className="story__header">
          <div className="user">
            <Link to={`/users/${user["username"]}`} className="user__thumb">
              <img src={user["avatar"]} alt={user["name"]}/>
            </Link>
            <Link to={`/users/${user["username"]}`} className="user__name">
              {user["username"]}
            </Link>
            
          </div>
          <button className="story__close" onClick={() => handleClose()}>
              <i className="fas fa-times"></i>
            </button>
        </header>

        <div className="story__progress">
          <div className="story__progress__elapsed" style={{ width: handleChangeProgress()}} ></div>
        </div>

        <div className="story__video__wrapper">
          <video autoPlay loop playsInline onTimeUpdate={e => {setCurrentTime(e.target.currentTime)}} onLoadedMetadata={e => setDuration(e.target.duration)} src={story["videoUrl"]} className="video-player"></video>
        </div>
      </div>
    </section>
  );
};

export default Story;
