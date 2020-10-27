import React from 'react'
import { useUserActions, useUser } from '../../context/UserContext';
import './index.css';

const User = () => {
  const { avatar, firstName, lastName, username } = useUser();
  const { logout } = useUserActions();

  return (
    <div className='user'>
      <div>
        <img
          src={avatar}
          alt={`${firstName} ${lastName}`}
        />
        <h2>{username}</h2>
      </div>
      <div>
        <p>{firstName} {lastName}</p>
        <button className="logout" onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

export default User
