// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "../styles/dashboardNavBar.css";
// import logo_3 from "../assets/images/arti-reach logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse } from "@fortawesome/free-solid-svg-icons";
// import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
// import { faWrench } from "@fortawesome/free-solid-svg-icons";
// import { faCalendar } from "@fortawesome/free-solid-svg-icons";
// import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { FaUser } from "react-icons/fa";
// import { FaBell } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const CorrectNavBar = () => {
//   return (
//     <>
//       <div className="container">
//         <div className="left">
//           <div className="sidebar">
//             <h1>
//               <img src={logo_3} alt="" />
//             </h1>
//             <div>
//               {" "}
//               <FontAwesomeIcon icon={faHouse} className="icon_22" />
//               <Link to="/dashboard">Dashboard</Link>
//             </div>
//             <div>
//               {" "}
//               <FontAwesomeIcon icon={faBagShopping} className="icon_22" />
//               <Link to="/hireNow">Hire Now!</Link>
//             </div>
//             <div>
//               {" "}
//               <FontAwesomeIcon icon={faWrench} className="icon_22" />
//               <Link to="/hireNow">Services</Link>
//             </div>
//             <div>
//               {" "}
//               <FontAwesomeIcon icon={faCalendar} className="icon_22" />
//               <a href="#">Bookings</a>
//             </div>
//             <div>
//               <FontAwesomeIcon icon={faCreditCard} className="icon_22" />
//               <a href="#">Payments</a>
//             </div>
//           </div>
//         </div>
//         <div className="right">
//           <div className="flex_main">
//             <div className="input-wrapper">
//               <input type="text" placeholder="Search" className="input" />
//               <button type="submit" className="btu">
//                 <FontAwesomeIcon icon={faMagnifyingGlass} />
//               </button>
//             </div>
//             <div className="profile">
//               <div>
//                 <FaBell />
//               </div>
//               <div>
//                 <FaUser />
//                 {/* {userName} */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CorrectNavBar;