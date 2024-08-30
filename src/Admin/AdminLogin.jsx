import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../AdminStyling/AdminLogin.css";
import logo from "../assets/images/arti-reach logo.png";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Reg_img1 from "../assets/images/rafiki2.png";
import Reg_img2 from "../assets/images/rafiki3.png";
import { FaGoogle } from "react-icons/fa";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseError, setResponseError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setResponseError("");
    setFormSubmitted(false);

    // Basic validation
    let validationErrors = {};
    if (!formData.email) validationErrors.email = "Email is required";
    if (!formData.password) validationErrors.password = "Password is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://artireach.onrender.com/api/v1/user/login",
        formData
      );
      setFormSubmitted(true);
      console.log(response);

      // Store the JWT token in local storage for future use

      // Redirect to admin dashboard or another page
      navigate("/admindashboard");
    } catch (error) {
      setResponseError(error.response?.data?.message || "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="login-container">
      <div className="Login_image_container">
        <img className="img11" src={Reg_img1} alt="Bulb" />
        <img className="img22" src={Reg_img2} alt="Group" />
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="Login-form">Welcome Admin, Please Log In</h1>
        {formSubmitted && (
          <p className="success-message">
            Account Login successfully!&#x1F600;
          </p>
        )}
        {responseError && <p className="error-message">{responseError}</p>}
        <div className="form-group15">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        <div className="form-group15">
          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "error" : ""}
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>
          {errors.password && (
            <div className="error-message">{errors.password}</div>
          )}
        </div>
        <span>
          <a href="/forgot-password" className="forgot-password-link">
            Forgot Password
          </a>
        </span>
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? "Logging In..." : "Login In"}
        </button>
        <button className="google_bttn">
          <FaGoogle />
          &nbsp;{" "}
          <a href="https://accounts.google.com/ng/">Continue With Google</a>
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
