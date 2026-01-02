import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/auth";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();


    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser && storedUser.email === email && storedUser.password === password
    ) {
      loginUser();
      alert("Login Successful!");
      navigate("/dashboard")
    } else {
      alert("Invalid credentials")
    }
  }

  return (
    <>
      <h2>LOGIN</h2>
      <form onSubmit={handleLogin}>
        <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login;