import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import SimpleForm from './Form';
import './index.css';
import UserCard from './userCard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <SimpleForm />
    <UserCard />
  </React.StrictMode>
);
