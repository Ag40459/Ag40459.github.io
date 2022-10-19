import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserProvider } from './contexts/UserContext';
import SignIn from '../src/pages/SignIn';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <SignIn />
    </UserProvider>
  </React.StrictMode>
)
