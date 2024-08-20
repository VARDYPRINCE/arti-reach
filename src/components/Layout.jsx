import React, { useEffect, useState } from "react";
import "../styles/dashboardNavBar.css";
import logo_3 from "../assets/images/arti-reach logo.png";
import accountProfile from "../assets/images/account_circle.png"
import NotificationIcon from "../assets/images/Notification Icon.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { FaUser } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
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
  return (
    <div>
      <div className="container">
        <div className="left">
          <div className="sidebar">
            <h1>
              <img src={logo_3} alt="" />
            </h1>
            <div className="letssee">
              {" "}
              <FontAwesomeIcon icon={faHouse} className="icon_22" />
              <Link to="/dashboard">Dashboard</Link>
            </div>
            <div>
              {" "}
              <FontAwesomeIcon icon={faBagShopping} className="icon_22" />
              <Link to="/hireNoww">Hire Now!</Link>
            </div>
            <div>
              {" "}
              <FontAwesomeIcon icon={faWrench} className="icon_22" />
              <Link to="/hireNow">Services</Link>
            </div>
            <div>
              {" "}
              <FontAwesomeIcon icon={faCalendar} className="icon_22" />
              <a href="#">Bookings</a>
            </div>
            <div>
              <FontAwesomeIcon icon={faCreditCard} className="icon_22" />
              <a href="#">Payments</a>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="flex_main">
            <div className="input-wrapper_1">
              <input type="text" placeholder="Search" className="input" />
              <button type="submit" className="btu">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
            <div className="profile">
              <div className="prof">
                <FaBell className="typo" />
                <div className="prof2">
                <img src={accountProfile} alt="" />
                <div className="compo">
                {user ? user.name : "" }

                </div>
                </div>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
