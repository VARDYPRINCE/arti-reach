import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../ArtisanSectionStyling/artisannotification.css";
import vector from "../assets/images/Vector (3).png";
import ArtiModal from "./ArtiModal";

const ArtisanNotification = () => {
  const [loading, setLoading] = useState(true);
  const [myJobs, setMyJobs] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [jobId, setJobId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = () => {
      const storedToken = localStorage.getItem("myToken");
      const storedUser = localStorage.getItem("user");

      if (storedToken && storedUser) {
        setToken(JSON.parse(storedToken));
        setUser(JSON.parse(storedUser));
      } else {
        navigate("/artisanlogin");
      }
    };

    fetchUserData();
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      if (user && token) {
        try {
          const res = await axios.get(
            `https://artireach.onrender.com/api/v1/job/jobs/${user._id}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          if (res.data.success) {
            setMyJobs(res.data.jobs); // Set the jobs array from the response
          } else {
            console.error("Error fetching jobs:", res.data.message);
          }
        } catch (error) {
          console.error("Error fetching data:", error.message);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [user, token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!myJobs.length) {
    return <div>No jobs available</div>;
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Handle closing modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <h2 className="client_notification">Clients Notifications</h2>
      <div className="gridContainer">
        {myJobs.map((job) => {
          return (
            <div key={job._id} className="gridItem1">
              <div className="vector_img">
                <img src={vector} alt="" />
              </div>
              <div>Task:{job.taskName}</div>
              <div className="t_description">
                Description:{job.taskDescription}
              </div>
              <div className="lo_cation">Location:{job.location}</div>
              <div>
                <button
                  onClick={() => {
                    setJobId(job._id);
                    handleOpenModal();
                  }}
                  className="button_main2"
                >
                  Accept
                </button>
              </div>
              <ArtiModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                jobId={jobId}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ArtisanNotification;


