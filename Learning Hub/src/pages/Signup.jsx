import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("HANDLE SIGNUP CALLED");

    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup Successful!, Please Login");
    navigate("/login");
  }

  return (
    <div className="container">
      <h2>Sign-Up</h2>
      <form onSubmit={handleSignup}>
        <input placeholder="name" onChange={(e) => setName(e.target.value)} />
        <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Create Account</button>
      </form>
    </div>
  )
};

export default Signup;