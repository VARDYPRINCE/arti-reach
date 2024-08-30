
import { useEffect, useState } from "react";
import "../ArtisanSectionStyling/artisanservice.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import StatusButton from "../status/StatusButton";

const ArtisanService = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = () => {
      const storedToken = localStorage.getItem("myToken");
      const storedUser = localStorage.getItem("user");

      if (storedToken && storedUser) {
        setToken(JSON.parse(storedToken));
        setUser(JSON.parse(storedUser));
      } else {
        navigate("/login");
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
            // `https://artireach.onrender.com/api/v1/job/jobs/${user._id}?status=incomplete`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
          setData(res.data.jobs);
        } catch (error) {
          console.error(
            "Error fetching data:",
            error.response?.data?.message || error.message
          );
          if (error.response?.status === 401) {
            localStorage.removeItem("myToken");
            localStorage.removeItem("user");
            navigate("/login");
          }
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [user, token, navigate]);

  // Helper function to format date and time
  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const dateString = date.toLocaleDateString(); // Format the date as needed
    const timeString = date.toLocaleTimeString(); // Format the time as needed
    return { date: dateString, time: timeString };
  };

  if (loading) {
    return <div><Loading /></div>;
  }

  return (
    <div className="service-records">
      <h2 className="records_service">Service Records</h2>
      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Date</th>
            <th>Time</th>
            <th>Service</th>
            <th>Location</th>
            <th>Service Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((record, index) => {
            const { date, time } = formatDateTime(record.date);

            return (
              <tr key={index}>
                {record.client.map((client, clientIndex) => (
                  <td key={clientIndex} className="bored">
                    {client.name}
                  </td>
                ))}
                <td className="bored">{date}</td>
                <td className="bored">{time}</td>
                <td className="bored">{record.taskName}</td>
                <td className="bored">{record.location}</td>
                <td className="bored">
                  <StatusButton myStatus={record.status} jobId={record._id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ArtisanService;



// import React from 'react'
// import "../ArtisanSectionStyling/artisanservice.css";

// const ArtisanService = () => {
  
//   return (
//     <div>ArtisanService</div>
//   )
// }

// export default ArtisanService