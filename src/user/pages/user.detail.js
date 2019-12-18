import React from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  return <div>User detail page! {id}</div>;
};
export default UserDetail;
