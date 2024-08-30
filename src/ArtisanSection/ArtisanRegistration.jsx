import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "../ArtisanSectionStyling/artisanregister.css";
import logo from "../assets/images/arti-reach logo.png";
import axios from "axios";
import Reg_img1 from "../assets/images/rafiki.png";
import Reg_img2 from "../assets/images/Gear.png";
import Reg_img3 from "../assets/images/Character.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Import the icons

const ArtisanRegisterion = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [responseError, setResponseError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // New state for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
    if (!formData.phoneNumber) errors.phoneNumber = "Phone number is required";
    if (!/^\d{11}$/.test(formData.phoneNumber))
      errors.phoneNumber = "Phone number must be 11 digits";
    if (!formData.password) errors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = "Passwords do not match";
    if (!formData.terms)
      errors.terms = "You must agree to the terms and conditions";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const res = await axios.post(
          "https://artireach.onrender.com/api/v1/user/artisan",
          {
            name: formData.name,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            password: formData.password,
          }
        );
        setFormSubmitted(true);
        console.log(res.data);
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
          terms: false,
        });
        // Redirect to login after successful registration
        setTimeout(() => {
          navigate("/login"); // Navigate to login page
        }, 1000); // Simulate a delay for better user experience
      } catch (error) {
        console.error("Form submission error:", error);
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

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="main_container">
      <div className="image_container">
        <img className="img11" src={Reg_img1} alt="image" />
        <img className="img22" src={Reg_img2} alt="image" />
        <img className="img33" src={Reg_img3} alt="image" />
      </div>
      <div className="artsan-register">
        <form onSubmit={handleSubmit} className="register-form">
          <img className="logo" src={logo} alt="logo" />
          <h1>Sign Up</h1>
          {formSubmitted && !isSubmitting && (
            <p className="success-message">
              Account created successfully!&#x1F600;
            </p>
          )}
          {responseError && !isSubmitting && (
            <p className="error-message">{responseError}</p>
          )}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
            />
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>
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
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text" // Changed from "number" to "text" to handle validation better
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={errors.phoneNumber ? "error" : ""}
            />
            {errors.phoneNumber && (
              <div className="error-message">{errors.phoneNumber}</div>
            )}
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
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="password-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Re-enter Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? "error" : ""}
              />
              <span
                className="eye-icon"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
            {errors.confirmPassword && (
              <div className="error-message">{errors.confirmPassword}</div>
            )}
          </div>
          <div className="tick-box">
            <label>
              <input
                className="checkbox"
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
              />
              &nbsp; Click here to agree to the{" "}
              <a href="/terms" className="register-link">
                Terms and Conditions
              </a>{" "}
              and abide by our{" "}
              <a href="/privacy" className="register-link">
                Privacy Policy
              </a>
            </label>
            {errors.terms && (
              <div className="error-message">{errors.terms}</div>
            )}
          </div>
          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </button>
          <div className="register-footer">
            <p className="login-link">
              Already have an account?{" "}
              <Link to="/login">Login here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArtisanRegisterion;
