"use client";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/config";
import { FcGoogle } from "react-icons/fc";

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
        
        alert("Login failed");
      });
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);
      alert("login")
    } catch (error) {
     
      const errorMessage = error.message;
      alert(errorMessage);
     
      // ...
    }
  };

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
              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginRight: "10px" }}
              >
                Login
              </button>

              <button
                type="button"
                className="btn btn-light"
                onClick={signInWithGoogle}
                style={{ paddingLeft: "20px", paddingRight: "20px" }}
              >
                <FcGoogle  size={25}/> Sign in with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
