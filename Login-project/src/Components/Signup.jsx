import React, { useState } from 'react'
import { account, ID } from '../lib/appwrite'
import config from '../Config/Config';



function Signup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await account.create(ID.unique(), email, password);
    //   alert('Account created! Please log in.');
    await account.updateName(name);
      window.location.href = '/login'; // Redirect to login page
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
        <div>
        <form onSubmit={handleSignUp}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
        </div>
    </>
  )
}

export default Signup