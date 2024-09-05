import { useEffect, useState } from "react";
import "../styles/dashboardNavBar.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {useSelector} from 'react-redux'

const DashboardNavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [myServices, setMyServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const userData = useSelector((state) => state.user);
  console.log(userData);

  useEffect(() => {
    if (userData) {
      // setUser(JSON.parse(userData));
      setUser(userData.user)
    } else {
      // navigate("/login");
    }
  }, [navigate]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://artireach.onrender.com/api/v1/service/"
      );
      setMyServices(res.data.services);
    } catch (error) {
      console.error("Error fetching data", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredServices = myServices?.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="new_container">
        <div className="newUpdate">
          <div className="nc_1">
            <div className="update_new1">
              Welcome Back <span>{user ? user.name : ""}!</span>
            </div>
            <div className="sub_nc_1">
              What do you want to achieve here today
            </div>
          </div>
          <div className="input-wrapper_1">
            <input
              type="text"
              placeholder="Search"
              className="input"
              value={searchTerm}
              onChange={handleSearchOnChange}
            />
            <button type="submit" className="btu">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
        <div className="nc_2">
          <div>Service Categories</div>
        </div>

        <div className="apii">
          {loading ? <Loading /> : null}
          {myServices && filteredServices.length > 0
            ? filteredServices.map((serv) => (
                <div key={serv._id} className="main_map_container">
                  <img
                    src={serv.imageUrl}
                    alt={serv.name}
                    className="service-image"
                  />
                  <h4 className="name_service">{serv.name}</h4>
                  <p className="serv_description_map">{serv.description}</p>
                  <Link to={`/artisans/${serv._id}`}>
                    <div className="dash_btn2">
                      <button className="dasbtn">Hire Me</button>
                    </div>
                  </Link>
                </div>
              ))
            : !loading && <p>No services found</p>}
        </div>
      </div>
    </>
  );
};

export default DashboardNavBar;
