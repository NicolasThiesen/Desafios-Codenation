import React from 'react';

import './UserProfile.scss';

const UserProfile = ({ avatar, name, username }) => {
  return (
    <section className="profile" data-testid="user-profile">
      <div className="container">
        <div className="profile-data">
          <div className="user">
            <div className="user__thumb">
              {avatar.length > 0 && <img src={avatar} alt={name}></img>}
            </div>
            <p className="user__name">
              {name}
              <span>@{username}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default UserProfile;
