import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/auth";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUserlogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser && storedUser.email === email && storedUser.password === password
    ) {
      loginUser();
      navigate("/dashboard");
    } else {
      alert("Invalid credentials")
    }
  };
  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleUserlogin}>
        <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;