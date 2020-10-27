import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserProvider } from './context/UserContext';
import { EmailProvider } from './context/EmailContext';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <EmailProvider>
        <App />
      </EmailProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
