// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../ArtisanSectionStyling/artisannotification.css";
// import vector from "../assets/images/Vector (3).png";
// import ArtiModal from "./ArtiModal";

// const ArtisanNotification = () => {
//   const [loading, setLoading] = useState(true);
//   const [myJobs, setMyJobs] = useState([]);
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);
//   const [selectedJob, setSelectedJob] = useState(null);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserData = () => {
//       const storedToken = localStorage.getItem("myToken");
//       const storedUser = localStorage.getItem("user");

//       if (storedToken && storedUser) {
//         setToken(JSON.parse(storedToken));
//         setUser(JSON.parse(storedUser));
//       } else {
//         navigate("/artisanlogin");
//       }
//     };

//     fetchUserData();
//   }, [navigate]);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (user && token) {
//         try {
//           const res = await axios.get(
//             `https://artireach.onrender.com/api/v1/job/jobs/${user._id}?status=pending`,
//             {
//               headers: {
//                 Authorization: `Bearer ${token}`,
//                 "Content-Type": "application/json",
//               },
//             }
//             // {
//             //   headers: {
//             //     "Content-Type": "application/json",
//             //   },
//             // },
//           );
//           if (res.data.success) {
//             setMyJobs(res.data.jobs);
//           } else {
//             console.error("Error fetching jobs:", res.data.message);
//           }
//         } catch (error) {
//           console.error("Error fetching data:", error.message);
//         } finally {
//           setLoading(false);
//         }
//       }
//     };

//     fetchData();
//   }, [user, token]);

//   const handleOpenModal = (job) => {
//     setSelectedJob(job);
//   };

//   const handleCloseModal = () => {
//     setSelectedJob(null);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!myJobs.length) {
//     return <div>No jobs available</div>;
//   }

//   return (
//     <>
//       <h2 className="client_notification">Clients Notifications</h2>
//       <div className="gridContainer">
//         {myJobs.map((job) => (
//           <div key={job._id} className="gridItem1">
//             <div className="vector_img">
//               <img src={vector} alt="Vector icon" />
//             </div>
//             <div>Task: {job.taskName}</div>
//             <div className="t_description">
//               Description: {job.taskDescription}
//             </div>
//             <div className="lo_cation">Location: {job.location}</div>
//             <div>
//               <button
//                 onClick={() => handleOpenModal(job)}
//                 className="button_main2"
//               >
//                 Accept
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       {selectedJob && (
//         <ArtiModal
//           isOpen={!!selectedJob}
//           onClose={handleCloseModal}
//           jobId={selectedJob._id}
//         />
//       )}
//     </>
//   );
// };

// export default ArtisanNotification;

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../ArtisanSectionStyling/artisannotification.css";
import vector from "../assets/images/Vector (3).png";
import ArtiModal from "./ArtiModal";
import Loading from "../components/Loading"; // Import the Loading component

const ArtisanNotification = () => {
  const [loading, setLoading] = useState(true);
  const [myJobs, setMyJobs] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

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
            `https://artireach.onrender.com/api/v1/job/jobs/${user._id}?status=pending`,
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
    };

    fetchData();
  }, [user, token]);

  const handleOpenModal = (job) => {
    setSelectedJob(job);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  if (loading) {
    return <Loading />; // Use the Loading component here
  }

  if (!myJobs.length) {
    return <div>No jobs available</div>;
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
