import React from 'react'

const User = ({user}) => {
    const { name, subscribeDate } = user;
  return (
    <div>
      User : {name} , {subscribeDate}
    </div>
  );
}

export default User