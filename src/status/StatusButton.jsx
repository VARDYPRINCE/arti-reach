import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./StatusButton.css"; // Optional: Import a CSS file for styling
import { useSelector } from "react-redux";

const StatusButton = ({ myStatus, jobId }) => {
  const [status, setStatus] = useState(myStatus);
  const [user, setUser] = useState(null);

  const userData = useSelector((state) => state.user);
  const token = useSelector((state) => state.user.token);
  console.log(userData);

  useEffect(() => {
    if (userData) {
      // setUser(JSON.parse(userData));
      setUser(userData.user);
    } else {
      // navigate("/login");
    }
  }, [userData]);

  const fetchData = async () => {
    try {
      const res = await axios.put(
        `https://artireach.onrender.com/api/v1/job/${jobId}/ongoing`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
      setStatus(res.data.job.status);
    } catch (error) {
      console.error("Error fetching data", error.message);
    }
  };

  const fetchDataComplete = async () => {
    try {
      const response = await axios.put(
        `https://artireach.onrender.com/api/v1/job/${jobId}/complete`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      setStatus(response.data.job.status);
    } catch (error) {
      console.error("Error fetching data", error.message);
    }
  };

  const handlePendingToOngoing = () => {
    fetchData();
  };

  const handleOngoingToComplete = () => {
    fetchDataComplete();
  };

  const handleOngoingToCompleted = () => {
    console.log("HandleOngoingToCompleted");
  };

  if (status === "incomplete") {
    return (
      <button onClick={handlePendingToOngoing} className="pending_btn">
        Pending
      </button>
    );
  }
  if (status === "ongoing") {
    return (
      <button onClick={handleOngoingToComplete} className="ongoing_button">
        Ongoing
      </button>
    );
  }

  if (status === "completed") {
    return (
      <div onClick={handleOngoingToCompleted} className="btn_div_btn">
        Done
      </div>
    );
  }

  return <button className="btn_com">{status}</button>;
};

export default StatusButton;
