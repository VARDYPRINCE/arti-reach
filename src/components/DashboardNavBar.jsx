// import { useEffect, useState } from "react";
// import "../styles/dashboardNavBar.css";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import Loading from "./Loading";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// // import SearchBar from "../SearchBar/SearchBar"

// const DashboardNavBar = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [myServices, setMyServices] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Retrieve user data from localStorage
//     const userData = localStorage.getItem("user");

//     if (userData) {
//       setUser(JSON.parse(userData));
//     } else {
//       // Handle case where there is no user data (e.g., redirect to login)
//       navigate("/login");
//     }
//   }, []); //

//   // ---
//   // console.log(user);
//   // --

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(
//         "https://artireach.onrender.com/api/v1/service/"
//       );
//       console.log(res.data);
//       setMyServices(res.data.services);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching data", error.message);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (myServices) {
//       console.log("all services", myServices);
//     }
//   }, [myServices]);

//   const handleSearchonchange = (e) => {
//     setSearchTerm(e.target.value);
    
//   }
//   const filteredServices = myServices?.filter(service => service.name.tolowerCase().includes(searchTerm.toLowerCase()));

//   return (
//     <>
//       <div className="new_container">
//         <div className="nc_1">
//           {/* <div> <SearchBar /> </div> */}
//           <h2>
//             {" "}
//             Welcome Back <span>{user ? user.name : ""}!</span>
//           </h2>
//           {/* <div className="input-wrapper_1">
//             <input type="text" placeholder="Search" className="input" />
//             <button type="submit" className="btu">
//               <FontAwesomeIcon icon={faMagnifyingGlass} />
//             </button>
//           </div> */}
//         </div>
//         <div className="sub_nc_1">What do you want to achieve here today</div>
//         <div className="input-wrapper_1">
//             <input type="text"
//              placeholder="Search" 
//              className="input"
//              value={searchTerm}             
//              onChange={handleSearchonchange}
//              />
//             <button type="submit" className="btu">
//               <FontAwesomeIcon icon={faMagnifyingGlass} />
//             </button>
//           </div>
//         <div className="nc_2">
//           <div>Service Categories</div>
//         </div>

//         <div className="nc_3">
//           {/* <div className="sub_nc_3">Services</div> */}
//           {/* <button className="nc_3btn">See More</button> */}
//         </div>

//         <div className="apii">
//           {loading ? <Loading /> : null}
//           {myServices &&
//             filteredServices.map((serv) => {
//               return (
//                 <div key={serv._id} className="main_map_container">
//                   <img
//                     src={serv.imageUrl}
//                     alt={serv.name}
//                     className="service-image"
//                   />
//                   <h4 className="name_service">{serv.name}</h4>
//                   <p className="serv_description_map">{serv.description}</p>
//                   <Link to={`/artisans/${serv._id}`}>
//                     <div className="dash_btn2">
//                       <button
//                         onClick={() => console.log(serv.name)}
//                         // onClick={() => (serv.name)}
//                         className="dasbtn"
//                       >
//                         Hire Me
//                       </button>
//                     </div>
//                   </Link>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default DashboardNavBar;


import { useEffect, useState } from "react";
import "../styles/dashboardNavBar.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const DashboardNavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [myServices, setMyServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://artireach.onrender.com/api/v1/service/"
      );
      setMyServices(res.data.services);
    } catch (error) {
      console.error("Error fetching data", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredServices = myServices?.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="new_container">
        <div className="nc_1">
          <h2>
            Welcome Back <span>{user ? user.name : ""}!</span>
          </h2>
        </div>
        <div className="sub_nc_1">What do you want to achieve here today</div>
        <div className="input-wrapper_1">
          <input
            type="text"
            placeholder="Search"
            className="input"
            value={searchTerm}
            onChange={handleSearchOnChange}
          />
          <button type="submit" className="btu">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="nc_2">
          <div>Service Categories</div>
        </div>

        <div className="nc_3">
          {/* Optional additional content */}
        </div>

        <div className="apii">
          {loading ? <Loading /> : null}
          {myServices && filteredServices.length > 0 ? (
            filteredServices.map((serv) => (
              <div key={serv._id} className="main_map_container">
                <img
                  src={serv.imageUrl}
                  alt={serv.name}
                  className="service-image"
                />
                <h4 className="name_service">{serv.name}</h4>
                <p className="serv_description_map">{serv.description}</p>
                <Link to={`/artisans/${serv._id}`}>
                  <div className="dash_btn2">
                    <button className="dasbtn">Hire Me</button>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            !loading && <p>No services found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardNavBar;
