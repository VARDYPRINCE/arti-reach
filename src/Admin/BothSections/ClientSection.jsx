import { useState, useEffect } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

function ClientSection() {
  const [loading, setLoading] = useState(true);
  const [myJobs, setMyJobs] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user data from localStorage
    const userData = localStorage.getItem("user");

    if (userData) {
      setUser(JSON.parse(userData));
      // } else {
      //   // Handle case where there is no user data (e.g., redirect to login)
      //   navigate("/adminlogin");
    }
  }, []);

  const fetchUserData = () => {
    const storedToken = localStorage.getItem("myToken");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(JSON.parse(storedToken));
      setUser(JSON.parse(storedUser));
      // } else {
      //   navigate("/adminlogin");
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchData = async () => {
    console.log("got herre");

    console.log(token);
    console.log(user);

    if (user && token) {
      try {
        const res = await axios.get(
          `https://artireach.onrender.com/api/v1/job/`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log(res);
        if (res.data.success) {
          setMyJobs(res.data.jobs); // Set the jobs array from the response
        } else {
          console.error("Error fetching jobs:", res.data.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [user, token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!myJobs.length) {
    return <div>No jobs available</div>;
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
      {/* <ul>
        { client && client.map((client) => (
          <li key={client._id}>{client.name}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default ClientSection;
