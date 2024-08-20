import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../ArtisanSectionStyling/artimodal.css";
import SuccessModal from "./SuccessModal"; // Import the SuccessModal component

const ArtiModal = ({ isOpen, onClose, jobId }) => {
  const [token, setToken] = useState(null); // State for storing token
  const [showSuccessModal, setShowSuccessModal] = useState(false); // State for showing success modal
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = () => {
      const storedToken = localStorage.getItem("myToken");
      if (storedToken) {
        setToken(JSON.parse(storedToken));
      } else {
        navigate("/artisanlogin"); // Redirect to login if no token found
      }
    };

    fetchToken();
  }, [navigate]);

  const handleConfirm = async () => {
    if (!token) {
      alert("No valid token found. Please log in again.");
      return;
    }

    try {
      const response = await axios.put(
        `https://artireach.onrender.com/api/v1/job/${jobId}/accept`,
        {}, // Assuming no body is needed; otherwise, provide the booking data
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in headers
          },
        }
      );

      console.log(response.data);
      setShowSuccessModal(true); // Show success modal on successful response
    } catch (error) {
      console.error(
        "Error confirming booking:",
        error.response ? error.response.data : error.message
      );
      alert("Failed to confirm booking. Please try again.");
    }
  };

  setTimeout(() => {
    onClose();
  }, 9000);

  if (!isOpen) return null; // Return null if the main modal is not open

  return (
    <>
      <div className="sm_2">
        <div className="modalcontent_1">
          <h3 className="sm_23">Confirmation</h3>
          <div className="sm_33">
            You are about to accept this Service.<br /> Do you wish to proceed?
          </div>
          <div className="sm_43">
            <button className="sm_53" onClick={handleConfirm}>
              Proceed
            </button>
            <button className="sm_63" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Render SuccessModal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => {
          setShowSuccessModal(false);
          onClose(); // Close the main modal when success modal is closed
        }}
      />
    </>
  );
};

ArtiModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  jobId: PropTypes.string.isRequired,
};

export default ArtiModal;
