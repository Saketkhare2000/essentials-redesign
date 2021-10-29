import React, { useState } from "react";
import { auth, db } from "../firebase";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = () => {
    // console.log(email);
    //returns user
    auth.signInWithEmailAndPassword(email, password).then((user) => {
      //redirect to ho
    });
  };
  return (
    <div>
      <h2>Sign In</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}>SignIn</button>
    </div>
  );
};

export default SignIn;
