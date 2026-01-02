import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    const user = { name, email, password }
    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup Successful!, Please Login");
    navigate("/login");
  }

  return (
    <>
      <h1>Sign-Up</h1>
      <form onSubmit={handleSignup}>
        <input placeholder="name" onChange={(e) => setName(e.target.value)} required />
        <input placeholder="email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Create Account</button>
      </form>
    </>
  )
}

export default Signup;