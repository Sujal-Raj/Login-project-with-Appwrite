import React, { useEffect, useState } from 'react'
import { account } from '../lib/appwrite';


function Homepage() {

    const [user, setUser] = useState(null);

    const checkSession = async () => {
        try {
          const user = await account.get();
          setUser(user);
        } catch (error) {
          window.location.href = '/Login'; // Redirect if not authenticated
        }
      };

      const fetchUserData = async () => {
        try {
          const userData = await account.get();  // Fetch the logged-in user's details
          setUser(userData);
        } catch (error) {
          console.error('Failed to fetch user data', error);
        }
      };
    
      useEffect(() => {
        checkSession();
        fetchUserData();
      }, []);
      console.log(user)
  return (
    <>
        <div>
            {user ? <h1>Welcome, {user.name}!</h1> : <p>Loading...</p>}
        </div>
    </>
  )
}

export default Homepage