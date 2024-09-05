import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/dashboardNavBar.css";
import { Link } from "react-router-dom";
import Ratings from "../components/Ratings";
import proifilepicture from "../assets/images/Vector (3).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const ServiceById = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
  useEffect(() => {
    if (serviceId) {
      fetchArtsansByIdData(serviceId);
    }
  }, [serviceId]);

  const handleSearchOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredServices = artisans?.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container_2001">
        <div className="ServicesbyId">
          <div className="updated_new">
            <div className="service_1">Select a Service Provider</div>
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
          <div className="serviceContainer">
            {artisans &&
              filteredServices.map((item) => {
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
                      <Link to={`/artisan/profile/${item._id}`}>
                        <button className="action_items">View Profile</button>
                      </Link>
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

{
  /* <div className="item_actions">
              </div> */
}
