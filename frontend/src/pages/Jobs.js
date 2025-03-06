import { useEffect, useState } from "react";
import { getJobs } from "../sevices/jobService";
 
const Jobs = () => {
  const [jobs, setJobs] = useState([]);
 
  useEffect(() => {
    const fetchJobs = async () => {
      const data = await getJobs();
      setJobs(data);
    };
    fetchJobs();
  }, []);
 
  return (
    <div>
      <h2>Available Jobs</h2>
      {jobs.map((job) => (
        <div key={job._id}>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <p>Budget: ${job.budget}</p>
        </div>
      ))}
    </div>
  );
};
 
export default Jobs;