// import { useEffect, useState } from "react";
// import "../styles/clientservice.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import StatusButton from "../status/StatusButton";

// const ClientService = () => {
//   const [loading, setLoading] = useState(true);
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);
//   const [data, setData] = useState([]);

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
//             `https://artireach.onrender.com/api/v1/job/jobs/${user._id}?status=incomplete`, {},
//             {
//               headers: {
//                 Authorization: `Bearer ${token}`,
//                 "Content-Type": "application/json",
//               },
//               withCredentials: true, // Include if needed for CORS
//             }
//           );
//           setData(res.data.jobs);
//         } catch (error) {
//           console.error(
//             "Error fetching data:",
//             error.response?.data?.message || error.message
//           );
//           if (error.response?.status === 401) {
//             localStorage.removeItem("myToken");
//             localStorage.removeItem("user");
//             navigate("/artisanlogin");
//           }
//         } finally {
//           setLoading(false);
//         }
//       }
//     };

//     fetchData();
//   }, [user, token, navigate]);

//   if (loading) {
//     return (
//       <div className="loading-overlay">
//         <div className="spinner"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="service-records">
//       <h2>Service Records</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Artisan</th>
//             <th>Date</th>
//             <th>Service</th>
//             {/* <th>Status</th> */}
//             <th>Service Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data?.map((record, index) => (
//             <tr key={index}>
//               <td className="bored">{record.artisan.name}</td>
//               <td className="bored">{record.date}</td>
//               <td className="bored">{record.taskName}</td>
//               {/* <td className="bored">
//                 <button className="bored_1">{record.status}</button>
//               </td> */}
//               <td className="bored"> <StatusButton /> </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ClientService;


import { useEffect, useState } from "react";
import "../styles/clientservice.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import StatusButton from "../status/StatusButton";

const ClientService = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = () => {
      const storedToken = localStorage.getItem("myToken");
      const storedUser = localStorage.getItem("user");

      console.log('Stored Token:', storedToken);
      console.log('Stored User:', storedUser);

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
            `https://artireach.onrender.com/api/v1/job/jobs/${user._id}?status=incomplete`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              withCredentials: true, // Include if needed for CORS
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

  if (loading) {
    return (
      <div className="loading-overlay">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="service-records">
      <h2>Service Records</h2>
      <table>
        <thead>
          <tr>
            <th>Artisan</th>
            <th>Date</th>
            <th>Service</th>
            <th>Service Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((record, index) => (
            <tr key={index}>
              <td className="bored">{record.artisan.name}</td>
              <td className="bored">{record.date}</td>
              <td className="bored">{record.taskName}</td>
              <td className="bored"><StatusButton /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientService;
