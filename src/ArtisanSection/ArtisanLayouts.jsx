import { useEffect, useState } from "react";
import "../ArtisanSectionStyling/artisanlayout.css";
import logoArtisan from "../assets/images/arti-reach logo.png";
import profileIcon from "../assets/images/account_circle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBagShopping,
  faWrench,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import Notification from "../notifications/Notification";

const ArtisanLayouts = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate("/artisanlogin");
    }
  }, [navigate]);

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
              <NavLink
                to="/artisandashboard"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
              }
              >
              <FontAwesomeIcon icon={faHouse} className="icon_" />
                Dashboard
              </NavLink>
            </div>
            <div className="artisan_icons">
              <NavLink
                to="/artisannotification"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
              }
              >
              <FontAwesomeIcon icon={faBagShopping} className="icon_" />
                Notification
              </NavLink>
            </div>
            <div className="artisan_icons">
              <NavLink
                to="/artisanservice"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
              }
              >
              <FontAwesomeIcon icon={faWrench} className="icon_" />
                Services
              </NavLink>
            </div>
            <div className="artisan_icons">
              <NavLink
                to="/artisanpayment"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
              }
              >
              <FontAwesomeIcon icon={faCreditCard} className="icon_" />
                Payments
              </NavLink>
            </div>
          </div>
        </div>

        <div className="right-pane">
          <div className="artisan">
            <div className="profileArtisans">
              <div className="pa">
                <div className="pa_1">
                  <Notification className="art_icon_1" />
                </div>
                <div className="artisan_">
                  <div>
                    <img src={profileIcon} alt="" />
                  </div>
                  <div className="okay_oo">
                    <span>{user ? user.name : ""}</span>
                    <Dropdown />
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
