// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import mylogo from "../assets/images/Frame352.png";
// import Reg_img1 from "../assets/images/Helmet.png";
// import Reg_img2 from "../assets/images/Login.png";
// import "../styles/auth.css";

// const LoginForm = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [response, setResponse] = useState(null);
//   const navigate = useNavigate();
//   // const dispatch = useDispatch();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (formData.password.length < 8) {
//       setError("Password must be at least 8 characters long.");
//       return;
//     }

//     if (!formData.email.endsWith(".com")) {
//       setError("Email must end with .com.");
//       return;
//     }

//     setLoading(true);
//     setResponse(null);

//     try {
//       const res = await fetch(
//         " https://artireach.onrender.com/api/v1/user/login",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );
//       const data = await res.json();
//       if (!res.ok) {
//         throw new Error(data.message || "Login failed");
//       }
//       console.log(data);
//       // console.log(data);
//       // console.log(data.user.email);

//       setResponse(data);
//       // dispatch(setUserName(data.user.email));
//       // Save user data to localStorage
//       localStorage.setItem("user", JSON.stringify(data.data));

//       //token
//       localStorage.setItem("myToken", JSON.stringify(data.myToken));

//       navigate("/home"); // Navigate to the appropriate page after successful login
//     } catch (err) {
//       setError(err.message);
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="main_container">
//       <div className="image_container">
//         <img className="img2" src={Reg_img2} alt="image" />
//         <img className="img2" src={Reg_img1} alt="image" />
//       </div>
//       <div className="form-container">
//         <form onSubmit={handleSubmit} className="registration-form">
//           <img className="logo" src={mylogo} alt="logo" />
//           <h3>Log in</h3>
//           {error && <p className="error-message">{error}</p>}
//           <label>
//             Email:
//             <input
//               type="email"
//               placeholder="Email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <label>
//             Password:
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <button type="submit" disabled={loading}>
//             {loading ? "Logging in..." : "Log in"}
//             {response && <p>Logged in successfully!</p>}
//           </button>
//           <br />
//         </form>
//         <button className="Google-btn">
//           <a href="https://mail.google.com"></a>Continue with Google
//         </button>
//         <p>
//           Don’t have an account <a href="#">sign up</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

import React from 'react'

const LoginForm = () => {
  return (
    <div>LoginForm</div>
  )
}

export default LoginForm