import React from "react";
import PropTypes from "prop-types";
import "../ArtisanSectionStyling/artimodal.css"
import fill from "../assets/images/fill (3).png"

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  setTimeout(() => {
    onClose();
  }, 4000);

  return (
    <div className="success-modal">
      <div className="success-modal-content">
        <h3><img src={fill} alt="" /></h3>
        <div className="req_1">Service accepted!</div>
        <button className="success-modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

SuccessModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SuccessModal;
