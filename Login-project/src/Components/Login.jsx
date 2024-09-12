import React, { useState } from 'react'
import { account } from '../lib/appwrite';


function Login() {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await account.createEmailPasswordSession(email, password);
    //   alert('Logged in successfully!');
      window.location.href = '/homepage'; // Redirect to homepage
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
        <div>
        <form onSubmit={handleLogin}>
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
      <button type="submit">Login</button>
    </form>
        </div>
    </>
  )
}

export default Login