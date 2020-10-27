import React from 'react'
import User from '../User';
import MessageList from '../MessageList';
import { useEmail } from '../../context/EmailContext';
import MessageViewer from '../MessageView';

export const Wrapper = () => {

  const { currentEmail } = useEmail();

  console.log('Wrapper', currentEmail);

  return (
    <div>
      <User />
      {currentEmail
        ? <MessageViewer />
        : <MessageList />
      }
    </div>
  )
}
