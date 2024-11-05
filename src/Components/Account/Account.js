import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Account = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [maskedPwd, setMaskedPwd] = useState('');

  useEffect(() => {
    const name = localStorage.getItem('name') || '';
    const password = localStorage.getItem('password') || '';
    const email = localStorage.getItem('email') || '';
    setUserName(name);
    setMaskedPwd('*'.repeat(password.length));
    setEmail(email);
  }, []);

  return (
    <div className="container-fluid p-0">
      

      {/* Main Content */}
      <div className="container mt-5 pt-5 pb-5 bg-white rounded shadow-lg" style={{ maxWidth: '600px' }}>
        <h1 id="my-account" className="text-dark mb-4">My Account</h1>
        <div className="details mb-4">
          <p>Username: <span id="userNameDisplay">{userName}</span></p>
          <p>Password: <span id="pwdDisplay">{maskedPwd}</span></p>
          <p>Email: <span id="emailDisplay">{email}</span></p>
        </div>
        <div className="buttons d-flex justify-content-between">
          <button type="button" className="btn btn-success btn-lg">Edit</button>
          <button type="button" className="btn btn-success btn-lg">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
