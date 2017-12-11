import React from "react";

const UserProfile = ({ match }) => {
  const { id } = match.params;
  return <div>I am user {id}</div>;
};

export default UserProfile;
