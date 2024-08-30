// import React, { useState, useEffect } from "react";
// import "./StatusButton.css"; // Optional: Import a CSS file for styling
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const StatusButton = ({ myStatus, jobId }) => {
//   const [status, setStatus] = useState(myStatus);
//   const [token, setToken] = useState(null);

//   const navigate = useNavigate();

//   useEffect(() => {
//     // const fetchUserData = () => {
//       const storedToken = localStorage.getItem("myToken");

//       if (storedToken) {
//         setToken(JSON.parse(storedToken));
//       } else {
//         navigate("/artisanlogin");
//       }
//     // };

//     // fetchUserData();
//   }, [navigate]);

//   const fetchData = async () => {
//     // setLoading(true);
//     try {
//       const res = await axios.put(
//         `https://artireach.onrender.com/api/v1/job/${jobId}/ongoing`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//           // withCredentials: true,
//         }
//       );
//       console.log(res.data);
//       setStatus(res.data.job.status);
//       // setLoading(false);
//     } catch (error) {
//       console.error("Error fetching data", error.message);
//       // setLoading(false);
//     }
//   };
  
  
//   // ----------------------
//   const fetchDataComplete = async () => {
//     // setLoading(true);
//     try {
//       const response = await axios.put(
//         `http://artireach.onrender.com/api/v1/job/${jobId}/complete`, {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             // "Content-Type": "application/json",
//           },
//           // withCredentials: true,
//         }
//       );
//       console.log(response.data);
//       setStatus(response.data.job.status);
//       // setLoading(false);
//     } catch (error) {
//       console.error("Error fetching data", error.message);
//       // setLoading(false);
//     }
//   };
  
//   const handlePendingToOngoing = () => {
//     fetchData();
//   };
//   const handleOngoingToComplete = () => {
//     console.log("HandleOngoingToComplete");
//     fetchDataComplete();
//   };
  
//   const handleOngoingToCompleted = () => {
//     console.log("HandleOngoingToCompleted");
//   };

//   if (status === "incomplete") {
//     return (
//       <button onClick={handlePendingToOngoing} className="pending_btn">
//         Pending
//       </button>
//     );
//   }
//   if (status === "ongoing") {
//     return <button onClick={handleOngoingToComplete} className="ongoing_button">Ongoing</button>;
//   }

//   if (status === "completed") {
//     return <button onClick={handleOngoingToCompleted}>Completed</button>;
//   }

//   return <button className="btn_com">{status}</button>;
// };

// export default StatusButton;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./StatusButton.css"; // Optional: Import a CSS file for styling

const StatusButton = ({ myStatus, jobId }) => {
  const [status, setStatus] = useState(myStatus);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("myToken");

    if (storedToken) {
      setToken(JSON.parse(storedToken));
    } else {
      navigate("/login");
    }
  }, [navigate]);

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
    return <div onClick={handleOngoingToCompleted} className="btn_div_btn">Done</div>;
  }

  return <button className="btn_com">{status}</button>;
};

export default StatusButton;
