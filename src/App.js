// src/App.js
import React, { useState } from "react";
import { auth, provider, signInWithPopup, signOut } from "./firebase";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="App">
      {!user ? (
        <div className="login-container">
          <h1>Login to Google Auth App</h1>
          <button onClick={handleLogin}>Login with Google</button>
        </div>
      ) : (
        <div className="dashboard">
          <h1>Welcome, {user.name}</h1>
          <p>Email: {user.email}</p>
          <p>You are now logged in to my Google-auth app!</p>
          <button onClick={handleLogout}>Logout</button>
          <div className="message">
            
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

