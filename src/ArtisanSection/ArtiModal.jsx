import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../ArtisanSectionStyling/artimodal.css";
import SuccessModal from "./SuccessModal";

const ArtiModal = ({ isOpen, onClose, jobId }) => {
  const [token, setMytoken] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user data from localStorage
    const mytoken = localStorage.getItem("myToken");

    if (mytoken) {
      setMytoken(JSON.parse(mytoken));
    } else {
      // Handle case where there is no user data (e.g., redirect to login)
      navigate("/login");
    }
  }, [navigate]);


  const handleConfirm = async () => {
    if (!token) {
      console.log("No token. Please log in again.");
      return;
    }

    console.log(token);
    
    try {
      const response = await axios.put(
        `https://artireach.onrender.com/api/v1/job/${jobId}/accept`, {},
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );

      console.log("API response data:", response.data); // Log response data
      setShowSuccessModal(true);
    } catch (error) {
      console.error(
        "Error confirming booking:",
        error.response ? error.response.data : error.message
      );
      alert("Failed to confirm booking. Please try again.");
    }
  };

  useEffect(() => {
    if (showSuccessModal) {
      console.log("Success modal is open."); // Log when success modal is open
      const timer = setTimeout(() => {
        onClose();
        setShowSuccessModal(false);
      }, 5000); // Close after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [showSuccessModal, onClose]);

  if (!isOpen) return null;

  console.log("Modal is open with jobId:", jobId); // Log jobId and open status

  return (
    <>
      <div className="sm_22">
        <div className="modalcontent_1">
          <h3 className="sm_23">Confirmation</h3>
          <div className="sm_33">
            You are about to accept this Service.
            <br /> Do you wish to proceed?
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

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => {
          console.log("Closing success modal."); // Log when success modal is closed
          setShowSuccessModal(false);
          onClose();
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

// import { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "../ArtisanSectionStyling/artimodal.css";
// import SuccessModal from "./SuccessModal";

// const ArtiModal = ({ isOpen, onClose, jobId }) => {
//   const [token, setToken] = useState(null);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const navigate = useNavigate();

  
//   useEffect(() => {
//     const fetchToken = () => {
//       const storedToken = localStorage.getItem("myToken");
//       if (storedToken) {
//         setToken(JSON.parse(storedToken));
//       } else {
//         navigate("/artisanlogin"); 
//       }
//     };

//     fetchToken();
//   }, [navigate]);

//   // Log the current token state
//   useEffect(() => {
//     console.log("Current token state:", token);
//   }, [token]);

//   // Handle confirmation action
//   const handleConfirm = async () => {
//     if (!token) {
//       console.log("No token. Please log in again.");
//       return;
//     }

//     // console.log("Job ID:", jobId);
//     // console.log("Token:", token);

//     try {
//       const response = await axios.put(
//         // `https://artireach.onrender.com/api/v1/job/${jobId}/accept`,
//         // `http://artireach.onrender.com/api/v1/job/jobs/${jobId}?status=accepted`,main 
//         `https://artireach.onrender.com/api/v1/job/${jobId}/accept`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json', 
//           },
//           withCredentials: true, 
//         }
//       );

//       console.log("API response data:", response.data); 
//       setShowSuccessModal(true);
//     } catch (error) {
//       console.error(
//         "Error confirming booking:",
//         error.response ? error.response.data : error.message
//       );
//       // alert("Failed to confirm booking. Please try again.");
//     }
//   };

  
//   useEffect(() => {
//     if (showSuccessModal) {
//       console.log("Success modal is open.");
//       const timer = setTimeout(() => {
//         onClose();
//         setShowSuccessModal(false);
//       }, 5000); // Close after 5 seconds
//       return () => clearTimeout(timer);
//     }
//   }, [showSuccessModal, onClose]);

//   if (!isOpen) return null;

//   console.log("Modal is open with jobId:", jobId);

//   return (
//     <>
//       <div className="sm_22">
//         <div className="modalcontent_1">
//           <h3 className="sm_23">Confirmation</h3>
//           <div className="sm_33">
//             You are about to accept this Service.
//             <br /> Do you wish to proceed?
//           </div>
//           <div className="sm_43">
//             <button className="sm_53" onClick={handleConfirm}>
//               Proceed
//             </button>
//             <button className="sm_63" onClick={onClose}>
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>

//       <SuccessModal
//         isOpen={showSuccessModal}
//         onClose={() => {
//           console.log("Closing success modal.");
//           setShowSuccessModal(false);
//           onClose();
//         }}
//       />
//     </>
//   );
// };

// ArtiModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
//   jobId: PropTypes.string.isRequired,
// };

// export default ArtiModal;
