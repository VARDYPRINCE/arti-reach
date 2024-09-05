import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/modal.css';
import { useEffect} from 'react';
import { useSelector } from "react-redux";

const ServiceModal = ({ isOpen, onClose, bookingData, artisanId }) => {
  // const [token, setMytoken] = useState(null);
  const navigate = useNavigate();
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   // Retrieve user data from localStorage
  //   const mytoken = localStorage.getItem("myToken");

  //   if (mytoken) {
  //     setMytoken(JSON.parse(mytoken));
  //   } else {
  //     // Handle case where there is no user data (redirect to login)
  //     navigate("/login");
  //   }
  // }, []);

  // const navigate = useNavigate();

  const userData = useSelector((state) => state.user);
  const token = useSelector((state) => state.user.token);
  // console.log(userData);
  console.log(token);
  



  const handleConfirm = async () => {
    try {
      const response = await axios.post(
        `https://artireach.onrender.com/api/v1/job/${artisanId}`,
        bookingData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);

     
      navigate('/success', { state: { bookingData } });
      
     
      onClose();
    } catch (error) {
      console.error("Error confirming booking:", error);
      alert("Failed to confirm booking.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="sm_1">
      <div className="modalcontent">
        <h3 className="sm_2">Confirmation</h3>
        <div className="sm_3">
          You are about to request a service provider. Do you wish to proceed?
        </div>
        <div className="sm_4">
          <button className="sm_5" onClick={handleConfirm}>
            Proceed
          </button>
          <button className="sm_6" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

ServiceModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  bookingData: PropTypes.object.isRequired,
  artisanId: PropTypes.string.isRequired, 
};

export default ServiceModal;

