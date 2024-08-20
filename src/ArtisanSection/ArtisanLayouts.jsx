import React, { useEffect, useState } from "react";
import "../ArtisanSectionStyling/artisanlayout.css";
import logoArtisan from "../assets/images/arti-reach logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FaUser } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";

const ArtisanLayouts = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user data from localStorage
    const userData = localStorage.getItem("user");

    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      // Handle case where there is no user data (e.g., redirect to login)
      navigate("/artisanlogin");
    }
  }, []); //

  return (
    <>
      <div className="grid-container">
        <div className="left-pane">
          <div className="artisanSidebar_1">
            <h1 className="artisan_2_container">
              <img
                src={logoArtisan}
                alt="Arti-Reach Logo"
                className="artisan_2"
              />
            </h1>
            <div className="artisan_icons">
              {" "}
              <FontAwesomeIcon icon={faHouse} className="icon_" />
              <Link to="/artisandashboard">Dashboard</Link>
            </div>
            <div className="artisan_icons">
              {" "}
              <FontAwesomeIcon icon={faBagShopping} className="icon_" />
              <Link to="/artisannotification">Notification</Link>
            </div>

            <div className="artisan_icons">
              {" "}
              <FontAwesomeIcon icon={faWrench} className="icon_" />
              <Link to="/artisanservice">Services</Link>
            </div>
            <div className="artisan_icons">
              <FontAwesomeIcon icon={faCreditCard} className="icon_" />
              <a href="/artisanpayment">Payments</a>
            </div>
          </div>
        </div>

        {/* ---------------   */}

        <div className="right-pane">
          <div className="artisan">
            <div className="input-wrapper_art">
              <input type="text" placeholder="Search" className="input" />
              <button type="submit" className="artisan_btu">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
            <div className="profileArtisan">
              <div className="pa">
                <div className="pa_1">
                  <FaBell className="art_icon_1" />
                </div>
                <div className="artisan_">
                  <FaUser className="art_icon" />
                  <div className="okay_oo">

                  <span>{user ? user.name : ""}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ArtisanLayouts;
