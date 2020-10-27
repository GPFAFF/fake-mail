import React from 'react';
import './App.css';
import { Login } from './components/Login';
import { Wrapper } from './components/Wrapper';
import { useUser } from './context/UserContext';

function App() {
  const { username } = useUser();

  return (
    <div className="App">
      <h1>FakeMail</h1>
        {username
          ? <Wrapper />
          : <Login />
        }
    </div>
  );
}

export default App;
