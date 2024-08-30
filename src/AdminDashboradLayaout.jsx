import { useEffect, useState } from "react";
import "./AdminStyling/AdminDashboard.css";
import logoArtisan from "./assets/images/arti-reach logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FaUser } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminDashboradLayaout = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user data from localStorage
    const userData = localStorage.getItem("user");

    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      // Handle case where there is no user data (e.g., redirect to login)
    }
  }, []); //

  // ---
  // console.log(user);
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
              <a href="/admindashboard">Dashboard</a>
            </div>
            <div className="artisan_icons">
              {" "}
              <FontAwesomeIcon icon={faBagShopping} className="icon_" />
              <a href="/Allnotification">Notification</a>
            </div>

            <div className="artisan_icons">
              {" "}
              <FontAwesomeIcon icon={faWrench} className="icon_" />
              <a href="/Service">Services</a>
            </div>
            <div className="artisan_icons">
              {" "}
              <FontAwesomeIcon icon={faUser} className="icon_" />
              <a href="/profile">Profile</a>
            </div>
            <div className="artisan_icons">
              <FontAwesomeIcon icon={faCreditCard} className="icon_" />
              <a href="/adminpayment">Payments</a>
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
            <div className="profileArtisan1">
              <div className="pa1">
                <div className="pa_11">
                  <FaBell className="art_icon" />
                </div>
                <div className="artisan_1">
                  <FaUser className="art_icon" />
                  <br />

                  <div className="okay_oo1">
                    <span className="profile_name">
                      {user ? user.name : ""}
                    </span>
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

export default AdminDashboradLayaout;
