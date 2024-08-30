import { useEffect, useState } from "react";
import "../AdminStyling/AdminLayout.css";
import logoArtisan from "../assets/images/arti-reach logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FaUser } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const AdminLayout = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user data from localStorage
    const userData = localStorage.getItem("user");

    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      // Handle case where there is no user data (e.g., redirect to login)
      //   navigate("/adminlogin");
    }
  }, []); //

  return (
    <>
      <div className="grid-container">
        <div className="left-pane">
          <div className="artisanSidebar_1">
            <div className="artisan_2_container">
              <img
                src={logoArtisan}
                alt="Arti-Reach Logo"
                className="artisan_2"
              />
            </div>

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
            <div className="profileArtisan">
              <div className="pa">
                <div className="pa_1">
                  <FaBell className="art_icon_1" />
                </div>
                <div className="artisan_">
                  <FaUser className="art_icon" />
                  <br></br>
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

export default AdminLayout;
