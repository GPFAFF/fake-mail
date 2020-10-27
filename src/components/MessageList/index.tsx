import React, { memo } from 'react'
import { useUser } from '../../context/UserContext';
import { useEmail } from '../../context/EmailContext';
import { EmailType } from '../../app.types';
import './index.css';

const MessageList = () => {
  const { firstName } = useUser();
  const { emails, errors, loading, setCurrentEmail } = useEmail();

  return (
    <div className="message-list">
      {errors && <p>There was an error!</p>}
      {loading && <p>Loading ... </p>}
      {!emails &&
        <div className="no-messages">
          Your mailbox is empty, {firstName} 🎉🎉🎉
        </div>
      }
      {emails &&
        <ul className="message">
          {emails.map((item: EmailType) => (
            <Email
              key={item.id}
              email={item}
              onClick={setCurrentEmail}
            />
          ))}
        </ul>
      }
    </div>
  )
}

const Email = memo((props: any) => {
  const { email, onClick } = props;
  return (
    <li onClick={() => onClick(email)}>
      <div className="subject">{email.subject}</div>
      <div className="preview">{email.preview}</div>
    </li>
  )
})


export default MessageList;
