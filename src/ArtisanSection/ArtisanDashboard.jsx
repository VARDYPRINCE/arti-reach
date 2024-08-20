import React, { useEffect, useState } from "react";
import "../ArtisanSectionStyling/artisandashboard.css";
import Switcher from "./Switcher";
import { useNavigate } from "react-router-dom";

const ArtisanDashboard = () => {
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
      <div className="ad_1">
        <div>
          <div className="toggle_section">
            <h1>Welcome {user ? user.name : ""}! !!</h1>
            <Switcher className="tog" />
          </div>
          <div>This is your Artisan Dashboard.</div>
        </div>
        <div className="main_line_done">
          <div className="first_linejob">
            <div>Jobs Done</div>
            <div>12</div>
          </div>
          <div className="second_linejob">
            <div>Customer Ratings</div>
            <div>5/5</div>
            <div>Ratings</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtisanDashboard;
