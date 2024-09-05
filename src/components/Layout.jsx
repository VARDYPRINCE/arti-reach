import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";
import "../styles/dashboardNavBar.css";
import logo_3 from "../assets/images/Do.png";
import accountProfile from "../assets/images/account_circle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import Notification from "../notifications/Notification";
import { useSelector } from "react-redux";

const Layout = () => {
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

 
  return (
    <div>
      <div className="container">
        <div className="left">
          <div className="sidebar">
            <div className="dope_img_side">
              <img src={logo_3} alt="" className="artisan_3" />
            </div>
            <div className="letssee">
              {" "}
              {/* <FontAwesomeIcon icon={faHouse} className="icon_22" /> */}
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <FontAwesomeIcon icon={faHouse} className="icon_22" />
                Dashboard
              </NavLink>
            </div>
            <div className="letssee">
              {" "}
              {/* <FontAwesomeIcon icon={faBagShopping} className="icon_22" /> */}
              <NavLink
                to="/hireNoww"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <FontAwesomeIcon icon={faBagShopping} className="icon_22" />{" "}
                Hire Now!
              </NavLink>
            </div>
            <div className="letssee">
              {" "}
              {/* <FontAwesomeIcon icon={faWrench} className="icon_22" /> */}
              <NavLink
                to="/serviceforclients"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <FontAwesomeIcon icon={faWrench} className="icon_22" /> Services
              </NavLink>
            </div>
            <div className="letssee">
              {" "}
              {/* <FontAwesomeIcon icon={faCalendar} className="icon_22" /> */}
              <NavLink
                to="/clientbooking"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <FontAwesomeIcon icon={faCalendar} className="icon_22" />{" "}
                Bookings
              </NavLink>
            </div>
            <div className="paymentsection">
              {/* <FontAwesomeIcon icon={faCreditCard} className="icon_22" /> */}
              <NavLink
                to="/payments"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <FontAwesomeIcon icon={faCreditCard} className="icon_22" />{" "}
                Payments
              </NavLink>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="flex_main">
            <div className="profile">
              <div className="prof">
                <Notification className="typo" />
                <div className="prof2">
                  <img src={accountProfile} alt="" />
                  <div className="compo">{user ? user.name : ""}</div>
                  <Dropdown />
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
