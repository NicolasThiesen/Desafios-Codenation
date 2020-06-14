import React, { useState, useEffect } from 'react';

import UsersList from '../../containers/UsersList/UsersList';

import api from "../../services/api";
import Loading from '../../components/Loading';
const UsersRoute = () => {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    api.get("/users")
      .then((res) => {
        setUsers(res["data"])
      });
  },[])
  return (
    <div className="container" data-testid="users-route">
      {users.length > 0 ? <UsersList users={users}></UsersList> : <Loading></Loading>}
    </div>
  );
};

export default UsersRoute;
