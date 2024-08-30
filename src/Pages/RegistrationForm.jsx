import { useState } from "react";
import { useNavigate } from "react-router-dom";
import mylogo from "../assets/images/Frame352.png";
import Reg_img1 from "../assets/images/Bulb.png";
import Reg_img2 from "../assets/images/Group20.png";
import "../styles/auth.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validation logic
    if (formData.password.length < 8 || formData.confirm_password.length < 8) {
      setError(
        "Password and Confirm Password must be at least 8 characters long."
      );
      return;
    }

    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.email.endsWith(".com")) {
      setError("Email must end with .com.");
      return;
    }

    setLoading(true);
    setResponse(null);

    // Create a new object excluding confirm_password
    const { confirm_password, ...dataToSend } = formData;

    try {
      const res = await fetch(
        // "https://artireach.onrender.com/api/v1/user/signup",
        " https://artireach.onrender.com/api/v1/user/user",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSend),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Sign up failed");
      }
      console.log(res.user);

      setResponse(data);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main_container">
      <div className="image_container">
        <img className="img2" src={Reg_img1} alt="image" />
        <img className="img2" src={Reg_img2} alt="image" />
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="registration-form">
          <img className="logo" src={mylogo} alt="logo" />
          <h3>Sign up</h3>
          {error && <p className="error-message">{error}</p>}
          <label>
            Full Name:
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              placeholder="Input Email address.."
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              placeholder="Re-enter Password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              required
            />
          </label>
          <p>
            By clicking Create account you agree with our{" "}
            <a href="#" className="blue-text-link">
              Terms and conditions
            </a>{" "}
            and abide our by{" "}
            <a href="#" className="blue-text-link">
              privacy policy
            </a>
          </p>
          <br />
          <button type="submit" disabled={loading}>
            {/* {loading ? "Creating account..." : "Create account"} */}
            {loading ? "Creating account..." : "Create account"}
            {loading && <span className="loading-spinner" />}
            {response && <p>Logged in successfully!</p>}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
