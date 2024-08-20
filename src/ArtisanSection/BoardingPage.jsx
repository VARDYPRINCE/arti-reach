// // // import "../ArtisanSectionStyling/boardingpage.css";
// // // import logo from "../assets/images/arti-reach logo.png";
// // // import img7 from "../assets/images/Group 23.png";
// // // import img8 from "../assets/images/Gear (1).png";
// // // import img9 from "../assets/images/Vector (1).png";
// // // import { Link } from "react-router-dom";

// // // const BoardingPage = () => {
// // //   return (
// // //     <div className="onboarding2-container">
// // //       <div className="form2">
// // //         <img className="O_logo2" src={logo} alt="logo" />
// // //         <h4 className="Ttext2">Complete your Profile.(Contd)</h4>
// // //         <p>Fill the first 3 (Compulsory)</p>
// // //         <br />
// // //         <br />

// // //         <div className="all2">
// // //           <label htmlFor="Country">Country</label>
// // //           <input
// // //             type="text"
// // //             id="Country"
// // //             name="Country"
// // //             placeholder="Albania"
// // //           />
// // //         </div>

// // //         <div className="all">
// // //           <label htmlFor="State">State</label>
// // //           <input
// // //             type="State"
// // //             id="State"
// // //             name="State"
// // //             placeholder="State"
// // //           />
// // //         </div>

// // //         <div className="all">
// // //           <label htmlFor="Address">Address</label>
// // //           <input
// // //             type="Address"
// // //             id="Address"
// // //             name="Address"
// // //             placeholder="Adress"
// // //           />
// // //         </div>

// // //         <div className="all">
// // //           <label htmlFor="Area">Area</label>
// // //           <input
// // //             type="Area"
// // //             id="Area"
// // //             name="Area"
// // //             placeholder="Area"
// // //           />
// // //         </div>
// // //         <Link to="/artisandashboard">
// // //           <button className="submit-buttoN2">Continue</button>
// // //         </Link>
// // //         {/* <button className="next-button2">
// // //           <a href="/next-page">Next &#8594;</a>
// // //         </button> */}
// // //       </div>

// // //       <div className="onboarding_image_container2">
// // //         <img className="imgB0" src={img7} alt="ImageB" />
// // //         <img className="imgB1" src={img8} alt="ImageB1" />
// // //         <img className="imgB2" src={img9} alt="ImageB2" />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default BoardingPage;

// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import "../ArtisanSectionStyling/boardingpage.css";
// // import logo from "../assets/images/arti-reach logo.png";
// // import img7 from "../assets/images/Group 23.png";
// // import img8 from "../assets/images/Gear (1).png";
// // import img9 from "../assets/images/Vector (1).png";
// // import { Link, useNavigate } from "react-router-dom";

// // const BoardingPage = () => {
// //   const [state, setState] = useState('');
// //   const [address, setAddress] = useState('');
// //   const [area, setArea] = useState('');
// //   const [user, setUser] = useState(null);
// //   const [error, setError] = useState('');
// //   const navigate = useNavigate();

// //   // Function to handle form submission
// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     // Ensure the user object is available
// //     if (!user) {
// //       console.error('User data is not available.');
// //       return;
// //     }

// //     try {
// //       await axios.patch(`https://artireach.onrender.com/api/v1/users/${user._id}`, {
// //         state,
// //         address,
// //         area
// //       }, {
// //         headers: {
// //           'Authorization': `Bearer ${localStorage.getItem('authToken')}` // Include token if required
// //         }
// //       });
// //       navigate('/artisandashboard');
// //     } catch (error) {
// //       console.error('There was an error updating the user profile!', error);
// //       setError('Failed to update profile. Please try again later.');
// //     }
// //   };

// //   return (
// //     <div className="onboarding2-container">
// //       <div className="form2">
// //         <img className="O_logo2" src={logo} alt="logo" />
// //         <h4 className="Ttext2">Complete your Profile.(Contd)</h4>
// //         <p>Fill the first 3 (Compulsory)</p>
// //         <br />
// //         <br />

// //         {error && <p className="error-message">{error}</p>}

// //         <form onSubmit={handleSubmit}>
// //           <div className="all">
// //             <label htmlFor="State">State</label>
// //             <input
// //               type="text"
// //               id="State"
// //               name="State"
// //               placeholder="State"
// //               value={state}
// //               onChange={(e) => setState(e.target.value)}
// //             />
// //           </div>

// //           <div className="all">
// //             <label htmlFor="Address">Address</label>
// //             <input
// //               type="text"
// //               id="Address"
// //               name="Address"
// //               placeholder="Address"
// //               value={address}
// //               onChange={(e) => setAddress(e.target.value)}
// //             />
// //           </div>

// //           <div className="all">
// //             <label htmlFor="Area">Area</label>
// //             <input
// //               type="text"
// //               id="Area"
// //               name="Area"
// //               placeholder="Area"
// //               value={area}
// //               onChange={(e) => setArea(e.target.value)}
// //             />
// //           </div>

// //           <button type="submit" className="submit-buttoN2">Continue</button>
// //         </form>
// //       </div>

// //       <div className="onboarding_image_container2">
// //         <img className="imgB0" src={img7} alt="ImageB" />
// //         <img className="imgB1" src={img8} alt="ImageB1" />
// //         <img className="imgB2" src={img9} alt="ImageB2" />
// //       </div>
// //     </div>
// //   );
// // };

// // export default BoardingPage;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import "../ArtisanSectionStyling/boardingpage.css";
// import logo from "../assets/images/arti-reach logo.png";
// import img7 from "../assets/images/Group 23.png";
// import img8 from "../assets/images/Gear (1).png";
// import img9 from "../assets/images/Vector (1).png";
// import { Link, useNavigate } from "react-router-dom";

// const BoardingPage = () => {
//   const [user, setUser] = useState(null);
//   const [name, setName] = useState('');
//   const [state, setState] = useState('');
//   const [address, setAddress] = useState('');
//   const [area, setArea] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         setLoading(true);
//         const userData = localStorage.getItem("user");
//         const token = localStorage.getItem("myToken");

//         if (!userData || !token) {
//           navigate("/artisanlogin");
//           return;
//         }

//         const parsedUser = JSON.parse(userData);
//         setUser(parsedUser);

//         // Fill the state with current user data if needed
//         setName(parsedUser.name || '');
//         setState(parsedUser.state || '');
//         setAddress(parsedUser.address || '');
//         setArea(parsedUser.area || '');

//       } catch (error) {
//         console.error('Error fetching user data:', error);
//         setError('Failed to fetch user data.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, [navigate]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!user) {
//       console.error('User data is not available.');
//       setError('User data is not available.');
//       return;
//     }

//     setLoading(true);
//     try {
//       await axios.patch(`https://artireach.onrender.com/api/v1/users/${user._id}`, {
//         name,
//         state,
//         address,
//         area
//       }, {
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('myToken')}`
//         }
//       });

//       navigate('/artisandashboard');
//     } catch (error) {
//       console.error('There was an error updating the user profile!', error);
//       setError('Failed to update profile. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="onboarding2-container">
//       <div className="form2">
//         <img className="O_logo2" src={logo} alt="logo" />
//         <h4 className="Ttext2">Complete your Profile. (Contd)</h4>
//         <p>Fill the first 3 (Compulsory)</p>
//         <br />
//         <br />

//         {error && <p className="error-message">{error}</p>}

//         <form onSubmit={handleSubmit}>
//           <div className="all">
//             <label htmlFor="Name">Name</label>
//             <input
//               type="text"
//               id="Name"
//               name="Name"
//               placeholder="Your Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>

//           <div className="all">
//             <label htmlFor="State">State</label>
//             <input
//               type="text"
//               id="State"
//               name="State"
//               placeholder="State"
//               value={state}
//               onChange={(e) => setState(e.target.value)}
//               required
//             />
//           </div>

//           <div className="all">
//             <label htmlFor="Address">Address</label>
//             <input
//               type="text"
//               id="Address"
//               name="Address"
//               placeholder="Address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               required
//             />
//           </div>

//           <div className="all">
//             <label htmlFor="Area">Area</label>
//             <input
//               type="text"
//               id="Area"
//               name="Area"
//               placeholder="Area"
//               value={area}
//               onChange={(e) => setArea(e.target.value)}
//             />
//           </div>

//           <button type="submit" className="submit-buttoN2" disabled={loading}>
//             {loading ? 'Submitting...' : 'Continue'}
//           </button>
//         </form>
//       </div>

//       <div className="onboarding_image_container2">
//         <img className="imgB0" src={img7} alt="ImageB" />
//         <img className="imgB1" src={img8} alt="ImageB1" />
//         <img className="imgB2" src={img9} alt="ImageB2" />
//       </div>
//     </div>
//   );
// };

// export default BoardingPage;

// import "../ArtisanSectionStyling/onboarding.css";
// import logo from "../assets/images/arti-reach logo.png";
// import Reg_imgA from "../assets/images/Helmet (1).png";
// import Reg_imgB from "../assets/images/Character (1).png";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Onboarding = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     serviceType: "",
//     timeStart: "",
//     timeEnd: "",
//     address: "",
//     area: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [myServices, setMyServices] = useState([]);
//   const [user, setUser] = useState(null);
//   const [token, setMytoken] = useState(null);
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();
//   const { timeStart, timeEnd, ...dataToSend } = formData;

//   useEffect(() => {
//     const mytoken = localStorage.getItem("myToken");
//     if (mytoken) {
//       setMytoken(JSON.parse(mytoken));
//     } else {
//       navigate("/artisanlogin");
//     }
//   }, [navigate]);

//   useEffect(() => {
//     const userData = localStorage.getItem("user");
//     if (userData) {
//       setUser(JSON.parse(userData));
//     } else {
//       navigate("/login");
//     }
//   }, [navigate]);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(
//         "https://artireach.onrender.com/api/v1/service/"
//       );
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

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     let formErrors = {};
//     if (!formData.name.trim()) formErrors.name = "Full name is required";
//     if (!formData.email.trim()) formErrors.email = "Email is required";
//     if (!formData.serviceType) formErrors.serviceType = "Service type is required";
//     if (!formData.address.trim()) formErrors.address = "Address is required";
//     if (!formData.area.trim()) formErrors.area = "Area is required";
//     return formErrors;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//       return;
//     }
//     setLoading(true);
//     try {
//       const { timeStart, timeEnd, ...dataToSend } = formData;
//       console.log("Form data being sent:", dataToSend);
//       console.log("User ID:", user?._id);
//       console.log("Token:", token);

//       const response = await axios.patch(
//         `https://artireach.onrender.com/api/v1/users/${user._id}`,
//         dataToSend,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log("Response:", response);
//       if (response.status === 200) {
//         navigate("/boardingSecond");
//       } else {
//         console.error("Failed to submit form");
//         setErrors({ submit: "Failed to submit form. Please try again." });
//       }
//     } catch (error) {
//       console.error("An error occurred:", error);
//       if (error.response) {
//         console.error("Response data:", error.response.data);
//         console.error("Response status:", error.response.status);
//         console.error("Response headers:", error.response.headers);
//       } else if (error.request) {
//         console.error("Request:", error.request);
//       } else {
//         console.error("Error message:", error.message);
//       }
//       setErrors({ submit: "Failed to submit form. Please try again." });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="onboarding-container">
//       <div className="form">
//         <img className="O_logo" src={logo} alt="logo" />
//         <h2 className="Ttext">Create your profile.</h2>
//         <p>Fill all fields (Compulsory)</p>
//         <br />
//         <br />

//         <form onSubmit={handleSubmit}>
//           <div className="all">
//             <label htmlFor="name">Full Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Enter Full Name."
//               value={formData.name}
//               onChange={handleInputChange}
//             />
//             {errors.name && <span className="error">{errors.name}</span>}
//           </div>

//           <div className="all">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Email address."
//               value={formData.email}
//               onChange={handleInputChange}
//             />
//             {errors.email && <span className="error">{errors.email}</span>}
//           </div>

//           <div className="select1">
//             <select
//               name="serviceType"
//               value={formData.serviceType}
//               onChange={handleInputChange}
//               className="select-a"
//             >
//               <option value="">Select Service</option>
//               {myServices &&
//                 myServices.map((service) => (
//                   <option key={service._id} value={service._id}>
//                     {service.name}
//                   </option>
//                 ))}
//             </select>
//             {errors.serviceType && (
//               <span className="error">{errors.serviceType}</span>
//             )}
//           </div>

//           <div className="all">
//             <label htmlFor="address">Address</label>
//             <input
//               type="text"
//               id="address"
//               name="address"
//               placeholder="Enter Address"
//               value={formData.address}
//               onChange={handleInputChange}
//             />
//             {errors.address && <span className="error">{errors.address}</span>}
//           </div>

//           <div className="all">
//             <label htmlFor="area">Area</label>
//             <input
//               type="text"
//               id="area"
//               name="area"
//               placeholder="Enter Area"
//               value={formData.area}
//               onChange={handleInputChange}
//             />
//             {errors.area && <span className="error">{errors.area}</span>}
//           </div>

//           <div className="all">
//             <label htmlFor="timeStart">Service time (Begins)</label>
//             <input
//               type="time"
//               id="timeStart"
//               name="timeStart"
//               value={formData.timeStart}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className="all">
//             <label htmlFor="timeEnd">Service time (Ends)</label>
//             <input
//               type="time"
//               id="timeEnd"
//               name="timeEnd"
//               value={formData.timeEnd}
//               onChange={handleInputChange}
//             />
//           </div>

//           {errors.submit && <div className="error">{errors.submit}</div>}

//           <button type="submit" className="submit-buttoN" disabled={loading}>
//             {loading ? "Submitting..." : "Continue"}
//           </button>
//         </form>
//       </div>

//       <div>
//         <div className="onboarding_image_container">
//           <img className="imgA" src={Reg_imgA} alt="image" />
//           <img className="imgB" src={Reg_imgB} alt="image" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Onboarding;

