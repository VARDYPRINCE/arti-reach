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
import { Outlet, useNavigate, NavLink } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../dropdown/Dropdown";
import { useSelector } from "react-redux";

const AdminLayout = () => {
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
  }, [userData]);

  console.log(userData);
  console.log(token);

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
              <NavLink
                to="/admindashboard"
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
                to="/Allnotification"
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
                to="/Service"
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
                to="/profile"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <FontAwesomeIcon icon={faUser} className="icon_" />
                <a href="/profile">Profile</a>
              </NavLink>
            </div>
            <div className="artisan_icons">
              <NavLink
                to="/adminpayment"
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

        {/* ---------------   */}

        <div className="right-pane">
          <div className="artisan">
            <div className="profileArtisanhn">
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
                  <Dropdown />
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
