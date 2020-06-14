import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [showStore, setShowStore] = useState(false);
  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          
          <button className="user__thumb user__thumb--hasNew">
            <div className={"user__thumb__wrapper "}>
              <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg" alt="T'Challa"/>
            </div>
          </button>
          <button className="user__thumb false">
            <div className="user__thumb__wrapper">
              <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/bruce/bruce-profile.jpg" alt="Bruce Wayne"/>

            </div>
          </button>
        
        
          <button className="user__thumb false">
            <div className="user__thumb__wrapper">
              <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/gamora/gamora-profile.jpg" alt="Gamora"/>
            </div>
          </button>
        
        </div>
      </section>

      {showStore && <Story></Story>}
    </React.Fragment>
  );
};

export default Stories;
