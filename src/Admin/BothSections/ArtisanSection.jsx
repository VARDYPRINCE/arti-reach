import { useState, useEffect } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function ArtisanSection() {
  const [loading, setLoading] = useState(false);
  const [artisanData, setArtisanData] = useState([]);
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
    if (user && token) {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://artireach.onrender.com/api/v1/job/",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (res.data.success) {
          setArtisanData(res.data.data); // Set the artisan data from the response
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

  useEffect(() => {
    if (user && token) {
      fetchData();
    }
  }, [user, token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (artisanData.length < 1) {
    return <div>No Artisan available</div>;
  }

  return (
    <div>
      <div className="input-wrapper_art">
        <input type="text" placeholder="Search" className="input" />
        <button type="submit" className="artisan_btu">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <br />
      <h1>Artisan Activities</h1>
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
          {artisanData.length > 0 &&
              artisanData.map((Artisan) => (
                <tr key={Artisan._id}>
                  <td>{Artisan.artisan[0].name}</td>
                  <td>{Artisan.artisan[0].name}</td>
                  <td>{Artisan.date}</td>
                  <td>{Artisan.hireTime}</td>
                  <td>{Artisan.taskName}</td>
                  <td>{Artisan.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ArtisanSection;
