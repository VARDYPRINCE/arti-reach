import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../ArtisanSectionStyling/artisanlogin.css";
import logo from "../assets/images/arti-reach logo.png";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Import the icons
import Reg_img1 from "../assets/images/Group 86.png";
import Reg_img2 from "../assets/images/Group 87.png";
import { FaGoogle } from "react-icons/fa6";

const ArtisanLogin = () => {
  const navigate = useNavigate(); // Hook to navigate

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [responseError, setResponseError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.email) errors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
    if (!formData.password) errors.password = "Password is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Special case for admin credentials

        // Regular login process
        const res = await axios.post(
          "https://artireach.onrender.com/api/v1/user/login",
          {
            email: formData.email,
            password: formData.password,
          }
        );
        setFormSubmitted(true);
        console.log(res.data);
        console.log(res.data.data.role);

        // Save user data to localStorage
        localStorage.setItem("user", JSON.stringify(res.data.data));
        localStorage.setItem("myToken", JSON.stringify(res.data.myToken));
        // Check onboarding status
        // const onboardingCompleted = localStorage.getItem("onboardingCompleted");
        // if (onboardingCompleted === "true") {
        //   navigate("/artisandashboard"); // Redirect to dashboard if onboarding is complete
        // } else {
        //   navigate("/onboarding"); // Redirect to onboarding if not completed
        // }
        if (res.data.data.role === "admin") {
          navigate("/admindashboard");
        }
        if (
          res.data.data.role === "artisan" &&
          res.data.data.isProfileUpdated
        ) {
          navigate("/artisandashboard");
        }
        if (
          res.data.data.role === "artisan" &&
          res.data.data.isProfileUpdated === false
        ) {
          navigate("/onboarding");
        }

        if (res.data.data.role === "client") {
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Login error:", error);
        setResponseError(error.response?.data?.message || "An error occurred");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="Login_image_container">
        <img className="img1" src={Reg_img1} alt="image" />
        <img className="img2" src={Reg_img2} alt="image" />
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="Login-form">Sign In</h1>
        {formSubmitted && (
          <p className="success-message">
            Account Login successfully!&#x1F600;
          </p>
        )}
        {responseError && <p className="error-message">{responseError}</p>}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
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
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            &nbsp; Remember me
          </label>
          <span>
            <a href="/forgot-password" className="forgot-password-link">
              Forgot Password
            </a>
          </span>
        </div>
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? "Signing In..." : "Sign In"}
        </button>
        <button className="google_btn">
          <FaGoogle />
          &nbsp;{" "}
          <a href="https://accounts.google.com.ng/">Continue With Google</a>
        </button>
        <div className="login-footer">
          <p>
            Don’t have an account?{" "}
            <a href="/" className="register-link">
              Register here
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ArtisanLogin;
