import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/dashboardNavBar.css";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import Ratings from "../components/Ratings";
import proifilepicture from "../assets/images/Vector (3).png";

const ServiceById = () => {
  // const userName = useSelector((store) => store.user.email);
  const [artisans, setArtisans] = useState([]);
  const { serviceId } = useParams();

  const fetchArtsansByIdData = async (serviceId) => {
    try {
      const res = await axios.get(
        `https://artireach.onrender.com/api/v1/users?serviceType=${serviceId}`
      );
      console.log(res.data);
      setArtisans(res.data.data);
    } catch (error) {
      console.error("Error fetching data", error.message);
    }
  };
  //artireach.onrender.com/api/v1/users/66b4f84521a1bdf62b7db9a4  https:
  useEffect(() => {
    if (serviceId) {
      fetchArtsansByIdData(serviceId);
    }
  }, [serviceId]);

  return (
    <>
      <div className="container_2001">
        <div className="ServicesbyId">
          <h3 className="service_1">Select a Service Provider</h3>
          <div className="serviceContainer">
            {artisans &&
              artisans.map((item) => {
                return (
                  <div key={item._id} className="main_item_container">
                    <div className="pressure">
                      <img
                        src={proifilepicture}
                        alt=""
                        className="card-image"
                      />
                    </div>

                    <div className="card-content">
                      {/* <h3>Carpentry Service</h3> */}
                      <p className="item-description">{item.bio}</p>
                      <div className="item-name">{item.name}</div>{" "}
                      <div className="item-ratings">
                        <Ratings />
                      </div>
                      <div className="item_actions">
                        <button className="action_items">View Profile</button>
                      </div>
                      <Link to={`/booking/${item._id}`}>
                        <button className="dasbtn_1">HIRE ME</button>
                      </Link>
                      <div></div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceById;
