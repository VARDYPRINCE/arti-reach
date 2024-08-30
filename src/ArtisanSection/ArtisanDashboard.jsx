// import { useEffect, useState } from "react";
// import "../ArtisanSectionStyling/artisandashboard.css";
// import box from "../assets/images/notificationBox.png";
// import smallbag from "../assets/images/Vector (4).png";
// import Switcher from "./Switcher";
// import { useNavigate } from "react-router-dom";

// const ArtisanDashboard = () => {
//   const [user, setUser] = useState(null);

//   const navigate = useNavigate();

//   useEffect(() => {
//     // Retrieve user data from localStorage
//     const userData = localStorage.getItem("user");

//     if (userData) {
//       setUser(JSON.parse(userData));
//     } else {
//       // Handle case where there is no user data (e.g., redirect to login)
//       navigate("/artisanlogin");
//     }
//   }, []); //

//   return (
//     <>
//       <div className="ad_1">
//         <div>
//           <div className="toggle_section">
//             <h1>Welcome {user ? user.name : ""}! !!</h1>
//             <Switcher className="tog" />
//           </div>
//           <div>This is your Artisan Dashboard.</div>
//         </div>
//         <div className="main_line_done">
//           <div className="first_linejob">
//             <div>Jobs Done</div>
//             <div>12</div>
//           </div>
//           <div className="second_linejob">
//             <div>Customer Ratings</div>
//             <div>5/5</div>
//             <div>Ratings</div>
//           </div>
//         </div>
//         <div className="boxesnotification">
//           <div className="boxesnotification2">
//             <img src={box} alt="" className="boxesnot" />
//             <div className="bxnot">
//               <button className="boxesnotification3">Open Notification</button>
//               <img src={smallbag} alt="" className="vv" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ArtisanDashboard;

import { useEffect, useState } from "react";
import "../ArtisanSectionStyling/artisandashboard.css";
import box from "../assets/images/notificationBox.png";
import smallbag from "../assets/images/Vector (4).png";
import Switcher from "./Switcher";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Loading from "../components/Loading"; // Import the Loading component

const ArtisanDashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = () => {
      const userData = localStorage.getItem("user");

      if (userData) {
        setUser(JSON.parse(userData));
        setLoading(false); // Set loading to false once user data is retrieved
      } else {
        navigate("/login");
      }
    };

    fetchUserData();
  }, [navigate]);

  if (loading) {
    return <Loading />; // Show loading component while fetching data
  }

  return (
    <>
      <div className="ad_1">
        <div className="togs">
          {" "}
          <Switcher className="tog" />
        </div>
        <div>
          <div className="toggle_section">
            <h1>Welcome {user ? user.name : ""}!</h1>
            {/* <Switcher className="tog" /> */}
            <div className="dotted_line">This is your Artisan Dashboard.</div>
          </div>
        </div>
        {/* <div className="input-wrapper_arti" id="phase">
          <input type="text" placeholder="Search" className="input" />
          <button type="submit" className="artisan_btu">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div> */}

        <div className="main_line_done">
          <div className="first_linejob">
            <div className="lineejob_1">Jobs Done</div>
            <div className="twelves">12</div>
          </div>
          <div className="second_linejob">
            <div  className="lineejob_1">Customer Ratings</div>
            <div className="twelves1">5/5</div>
            <div className="twelvess">Ratings</div>
          </div>
        </div>
        <div className="boxesnotification">
          <div className="boxesnotification2">
            <img src={box} alt="" className="boxesnot" />
            <div className="bxnot">
              <button className="boxesnotification3">Open Notification</button>
              <img src={smallbag} alt="" className="vv" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtisanDashboard;
