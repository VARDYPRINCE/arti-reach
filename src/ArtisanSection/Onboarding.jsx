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
//         navigate("/artisandashboard");
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

import "../ArtisanSectionStyling/onboarding.css";
import logo from "../assets/images/arti-reach logo.png";
import Reg_imgA from "../assets/images/Helmet (1).png";
import Reg_imgB from "../assets/images/Character (1).png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Onboarding = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "",
    timeStart: "",
    timeEnd: "",
    address: "",
    area: "",
  });
  const [loading, setLoading] = useState(false);
  const [myServices, setMyServices] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setMytoken] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { timeStart, timeEnd, ...dataToSend } = formData;

  useEffect(() => {
    const mytoken = localStorage.getItem("myToken");
    if (mytoken) {
      setMytoken(JSON.parse(mytoken));
    } else {
      navigate("/artisanlogin");
    }
  }, [navigate]);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const onboardingCompleted = localStorage.getItem("onboardingCompleted");
    if (onboardingCompleted === "true") {
      navigate("/artisandashboard");
    }
  }, [navigate]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://artireach.onrender.com/api/v1/service/"
      );
      setMyServices(res.data.services);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = "Full name is required";
    if (!formData.email.trim()) formErrors.email = "Email is required";
    if (!formData.serviceType) formErrors.serviceType = "Service type is required";
    if (!formData.address.trim()) formErrors.address = "Address is required";
    if (!formData.area.trim()) formErrors.area = "Area is required";
    return formErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setLoading(true);
    try {
      const { timeStart, timeEnd, ...dataToSend } = formData;
      console.log("Form data being sent:", dataToSend);
      console.log("User ID:", user?._id);
      console.log("Token:", token);

      const response = await axios.patch(
        `https://artireach.onrender.com/api/v1/users/${user._id}`,
        dataToSend,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Response:", response);
      if (response.status === 200) {
        localStorage.setItem("onboardingCompleted", "true");
        navigate("/artisandashboard");
      } else {
        console.error("Failed to submit form");
        setErrors({ submit: "Failed to submit form. Please try again." });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      setErrors({ submit: "Failed to submit form. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="onboarding-container">
      <div className="form">
        <img className="O_logo" src={logo} alt="logo" />
        <h2 className="Ttext">Create your profile.</h2>
        <p>Fill all fields (Compulsory)</p>
        <br />
        <br />

        <form onSubmit={handleSubmit}>
          <div className="all">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Full Name."
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="all">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address."
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="select1">
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleInputChange}
              className="select-a"
            >
              <option value="">Select Service</option>
              {myServices &&
                myServices.map((service) => (
                  <option key={service._id} value={service._id}>
                    {service.name}
                  </option>
                ))}
            </select>
            {errors.serviceType && (
              <span className="error">{errors.serviceType}</span>
            )}
          </div>

          <div className="all">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter Address"
              value={formData.address}
              onChange={handleInputChange}
            />
            {errors.address && <span className="error">{errors.address}</span>}
          </div>

          <div className="all">
            <label htmlFor="area">Area</label>
            <input
              type="text"
              id="area"
              name="area"
              placeholder="Enter Area"
              value={formData.area}
              onChange={handleInputChange}
            />
            {errors.area && <span className="error">{errors.area}</span>}
          </div>

          <div className="all">
            <label htmlFor="timeStart">Service time (Begins)</label>
            <input
              type="time"
              id="timeStart"
              name="timeStart"
              value={formData.timeStart}
              onChange={handleInputChange}
            />
          </div>

          <div className="all">
            <label htmlFor="timeEnd">Service time (Ends)</label>
            <input
              type="time"
              id="timeEnd"
              name="timeEnd"
              value={formData.timeEnd}
              onChange={handleInputChange}
            />
          </div>

          {errors.submit && <div className="error">{errors.submit}</div>}

          <button type="submit" className="submit-buttoN" disabled={loading}>
            {loading ? "Submitting..." : "Continue"}
          </button>
        </form>
      </div>

      <div>
        <div className="onboarding_image_container">
          <img className="imgA" src={Reg_imgA} alt="image" />
          <img className="imgB" src={Reg_imgB} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
