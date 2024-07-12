import React, { useState } from 'react';
import './UserCard.css';

function SimpleForm() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const onPassChange=()=>{

return str
}
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(document.getElementById('userName').value);
    setEmail(document.getElementById('Email').value);
  };

  return (
    <>
      <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userName">Name</label>
            <input type="text" className="form-control" id="userName" placeholder="Enter your name" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email address</label>
            <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
      </div>
      <div className="container" id="contain">
        <div id="user_card_heading">
          <h1>USER DETAILS</h1>
        </div>
        <div>
          <h2>UserName: {userName}</h2>
          <h3>Email: {email.length>30?'WHY THE HELL THIS IS TO LONG':email}</h3>
          <h3>Password: {password.length<10?'*'.repeat(password.length):'too long pass'}</h3>
        </div>
      </div>
    </>
  );
}

export default SimpleForm;
