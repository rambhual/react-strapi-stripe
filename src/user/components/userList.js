import React from "react";
import { useHistory } from "react-router-dom";

export const UserList = ({
  id,
  name,
  email,
  address}) => {
  const history = useHistory();
  return (
    <div className="column is-4" onClick={() => history.push(`/users/${id}`)}>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{name}</p>
              <p className="subtitle is-6">{email}</p>
            </div>
          </div>

          <div className="content">
            Address: {address.street}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
