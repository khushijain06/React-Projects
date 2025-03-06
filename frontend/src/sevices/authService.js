import axios from "axios";
import API_URL from "../api";
 
export const registerUser = async (userData) => {
  const res = await axios.post(`${API_URL}/users/register`, userData);
  return res.data;
};
 
export const loginUser = async (userData) => {
  const res = await axios.post(`${API_URL}/users/login`, userData);
  return res.data;
};