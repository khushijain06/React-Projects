import { useState } from "react";
import { registerUser } from "../sevices/authService";
 
const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "", role: "freelancer" });
 
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(user);
    alert("Registration successful!");
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <select name="role" onChange={handleChange}>
        <option value="freelancer">Freelancer</option>
        <option value="client">Client</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};
 
export default Register;