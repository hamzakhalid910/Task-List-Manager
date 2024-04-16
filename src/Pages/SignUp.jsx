import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";


function SignUp() {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(`Name: ${fullName}, Email: ${email}, Password: ${password}`);
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Sign Up for an Account</h1>

      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Enter your Full Name"
          value={fullName}
          onchange={(e) => setFullName(e.target.value)}
          required
        />
        <br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          
        />
        <p>Your password must have atleast 8 characters</p>
        
        <input type="checkbox" name="signUpCheckBox"/>
        <label htmlFor="signUpCheckbox">
          By creating an account means you agree to the Terms & Conditions and our Privacy Policy
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account?</p>

      <Link to="/login">Log In</Link>
    </>
  );
}

export default SignUp;