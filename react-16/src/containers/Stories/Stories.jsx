import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [showStorie, setShowStore] = useState(false);
  const [storieSelected, setStorie] = useState();
  const [user, setUser] = useState();


  const handleStorie = (storie) => {
   setStorie(storie);
   setUser(getUserHandler(storie["userId"]));
   setShowStore(true);

  }
  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
        {stories.map((storie,index)=> { return (
          <button className={`user__thumb ${ index == 0 && "user__thumb--hasNew" }`} false key={storie["id"]} onClick={() =>handleStorie(storie)}>
            <div className="user__thumb__wrapper">
              <img src={(getUserHandler(storie["userId"])["avatar"])} alt={(getUserHandler(storie["userId"])["name"])}/>
            </div>
          </button>)}
          )}
          
        </div>
      </section>

      {showStorie && <Story story={storieSelected} user={user} handleClose={()=> setShowStore(!showStorie)}></Story>}
    </React.Fragment>
  );
};

export default Stories;
