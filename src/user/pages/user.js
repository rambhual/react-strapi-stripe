import React, { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { UserList } from "../components/userList";
export const User = () => {
  const { users, loading } = useContext(UserContext);
  console.log(users);
  if (loading) {
    return <div>Please wait while loading...</div>;
  }
  return (
    <React.Fragment>
      <div className="columns is-multiline">
        {users && users.map(u => <UserList key={u.id} {...u}></UserList>)}
      </div>
    </React.Fragment>
  );
};
