

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../ArtisanSectionStyling/artisannotification.css";
import vector from "../assets/images/Vector (3).png";
import ArtiModal from "./ArtiModal";
import Loading from "../components/Loading"; // Import the Loading component
import { useSelector } from "react-redux";

const ArtisanNotification = () => {
  const [loading, setLoading] = useState(true);
  const [myJobs, setMyJobs] = useState([]);
  const [user, setUser] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    if (userData) {
      setUser(userData.user);
    } else {
      navigate("/login");
    }
  }, [navigate, userData]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://artireach.onrender.com/api/v1/job/jobs/${user._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );          
      if (res.data.success) {
        setMyJobs(res.data.jobs);
      } else {
        console.error("Error fetching jobs:", res.data.message);
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user && token) {
      fetchData();
    }
  }, [user, token]);

  const handleOpenModal = (job) => {
    setSelectedJob(job);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  if (loading) {
    return <Loading />;
  }

  if (!myJobs.length) {
    return <div className="no_jobs">No jobs available</div>;
  }

  return (
    <>
      <h2 className="client_notification">Number of Clients</h2>
      <div className="gridContainer">
        {myJobs.map((job) => (
          <div key={job._id} className="gridItem1">
            <div className="vector_img">
              <img src={vector} alt="Vector icon" className="nonsen"/>
            </div>
            <div className="tsk_1">Task: {job.taskName}</div>
            <div className="t_description">
              Description: {job.taskDescription}
            </div>
            <div className="lo_cation">Location: {job.location}</div>
            <div className="nn">
              <button
                onClick={() => handleOpenModal(job)}
                className="button_main2"
              >
                Accept
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedJob && (
        <ArtiModal
          isOpen={!!selectedJob}
          onClose={handleCloseModal}
          jobId={selectedJob._id}
        />
      )}
    </>
  );
};

export default ArtisanNotification;



