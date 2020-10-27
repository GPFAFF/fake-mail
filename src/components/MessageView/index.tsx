import React from 'react';
import { useEmail } from '../../context/EmailContext';

const MessageViewer = () => {
  const { currentEmail, setCurrentEmail } = useEmail();

  console.log('MV', currentEmail);

  return (
    <div className="MessageViewer">
      <h2>{currentEmail.subject}</h2>
      <div>{currentEmail.body}</div>
      <button onClick={() => setCurrentEmail(null)}>
        Back
      </button>
    </div>
  );
};

export default MessageViewer;