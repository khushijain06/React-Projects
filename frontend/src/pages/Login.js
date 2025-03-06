import { useState } from "react";
import { loginUser } from "../sevices/authService";
 
const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
 
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await loginUser(credentials);
    localStorage.setItem("token", data.token);
    alert("Login successful!");
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
};
 
export default Login;

 