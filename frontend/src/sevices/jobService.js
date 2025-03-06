import axios from "axios";
import API_URL from "../api";
 
export const getJobs = async () => {
  const res = await axios.get(`${API_URL}/jobs/all`);
  return res.data;
};