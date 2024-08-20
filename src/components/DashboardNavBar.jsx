import React, { useEffect, useState } from "react";
import "../styles/dashboardNavBar.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";

const DashboardNavBar = () => {
  // const [images, setImages] = useState([]);
  const [myServices, setMyServices] = useState([]);
  const [loading, setLoading] = useState(false);
  // const userName = useSelector((store) => store.user.email);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user data from localStorage
    const userData = localStorage.getItem("user");

    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      // Handle case where there is no user data (e.g., redirect to login)
      navigate("/login");
    }
  }, []); //

  // ---
  // console.log(user);
  // --

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://artireach.onrender.com/api/v1/service/"
      );
      console.log(res.data);
      setMyServices(res.data.services);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (myServices) {
      console.log("all services", myServices);
    }
  }, [myServices]);

  return (
    <>
      <div className="new_container">
        <div className="nc_1">
          <h2>
            {" "}
            Welcome Back <span>{user ? user.name : ""}!</span>
          </h2>
        </div>
        <div className="sub_nc_1">What do you want to achieve here today</div>
        <div className="nc_2">
          <div>Service Categories</div>
        </div>

        <div className="nc_3">
          <div className="sub_nc_3">Popular Services</div>
          <button className="nc_3btn">See More</button>
        </div>

        <div className="apii">
          {loading ? <Loading /> : null}
          {myServices &&
            myServices.map((serv) => {
              return (
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
                      <button
                        onClick={() => console.log(serv.name)}
                        className="dasbtn"
                      >
                        Hire Me
                      </button>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default DashboardNavBar;
