// import { useState, useEffect } from "react";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import axios from "axios";

// function ClientSection() {
//   const [loading, setLoading] = useState(true);
//   const [clientData, setClientData] = useState([]);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   const userData = useSelector((state) => state.user);
//   const token = useSelector((state) => state.user.token);

//   useEffect(() => {
//     if (userData) {
//       setUser(userData.user);
//     } else {
//       navigate("/login");
//     }
//   }, [userData, navigate]);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(
//         "https://artireach.onrender.com/api/v1/job/",
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       console.log(res);
//       if (res.data.success) {
//         setClientData(res.data.data);
//       } else {
//         console.error("Error fetching jobs:", res.data.message);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (user && token) {
//       fetchData();
//     }
//   }, [user, token]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <div className="input-wrapper_art">
//         <input type="text" placeholder="Search" className="input" />
//         <button type="submit" className="artisan_btu">
//           <FontAwesomeIcon icon={faMagnifyingGlass} />
//         </button>
//       </div>
//       <br /> <br />
//       <h1>Client Activities</h1>
//       <div>
//         <table>
//           <thead>
//             <tr>
//               <th>Client</th>
//               <th>Artisan</th>
//               <th>Date</th>
//               <th>Hire Time</th>
//               <th>Service</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {clientData.length > 0 &&
//               clientData.map((client) => (
//                 <tr key={client._id}>
//                   <td>{client.clientName || 'N/A'}</td>
//                   <td>{client.artisan[0]?.name || 'N/A'}</td>
//                   <td>{client.date || 'N/A'}</td>
//                   <td>{client.hireTime || 'N/A'}</td>
//                   <td>{client.taskName || 'N/A'}</td>
//                   <td>{client.status || 'N/A'}</td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default ClientSection;


import { useState, useEffect } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function ClientSection() {
  const [loading, setLoading] = useState(false);
  const [clientData, setClientData] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const userData = useSelector((state) => state.user);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    if (userData) {
      setUser(userData.user);
    } else {
      navigate("/login");
    }
  }, [userData, navigate]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://artireach.onrender.com/api/v1/job/",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (res.data.success) {
        setClientData(res.data.data);
      } else {
        console.error("Error fetching jobs:", res.data.message);
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user && token) {
      fetchData();
    }
  }, [user, token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="input-wrapper_art">
        <input type="text" placeholder="Search" className="input" />
        <button type="submit" className="artisan_btu">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <br /> <br />
      <h1>Client Activities</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Client</th>
              <th>Artisan</th>
              <th>Date</th>
              <th>Hire Time</th>
              <th>Service</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {clientData.length > 0 &&
              clientData.map((client) => (
                <tr key={client._id}>
                  <td>{client.artisan[0].name}</td>
                  <td>{client.artisan[0].name}</td>
                  <td>{client.date}</td>
                  <td>{client.hireTime}</td>
                  <td>{client.taskName}</td>
                  <td>{client.clientStatus}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClientSection;
