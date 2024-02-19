"use client"
import React from 'react';
import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/config';

function Login() { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault(); 

    
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }

  return (
    <>
      <div
        className="container my-3 justify-content-center align-items-center mt-5 pt-5 .bg-secondary"
        style={{ color: "white" }}
      >
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <form onSubmit={signUp}>
              <div className="justify-content-center mt-5 p-2">
                <h1> Login </h1>
              </div>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  style={{ backgroundColor: "#8d9199" }}
                  id="title"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="rating" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  style={{ backgroundColor: "#8d9199" }}
                  id="rating"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary p-2">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
