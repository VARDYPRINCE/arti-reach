import { useEffect, useState } from 'react';
import { FaBell, FaTimes } from 'react-icons/fa'; // Import FaTimes for the clear button
import '../notifications/notification.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NotificationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
//   const [ setLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = () => {
      const storedToken = localStorage.getItem("myToken");
      const storedUser = localStorage.getItem("user");

      if (storedToken && storedUser) {
        setToken(JSON.parse(storedToken));
        setUser(JSON.parse(storedUser));
      } else {
        navigate("/artisanlogin");
      }
    };

    fetchUserData();
  }, [navigate]);

  useEffect(() => {
    // Retrieve user data from localStorage
    const userData = localStorage.getItem("user");

    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      // Handle case where there is no user data (e.g., redirect to login)
      navigate("/artisanlogin");
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const notificationsCleared = localStorage.getItem('notificationsCleared');
      if (!notificationsCleared && user && token) {
        try {
          const res = await axios.get(
            `https://artireach.onrender.com/api/v1/job/jobs/${user._id}?status=accepted`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
          console.log(res.data.jobs);
          setData(res.data.jobs);
        } catch (error) {
          console.error("Error fetching data:", error.message);
        } finally {
          setLoading(false);
        }
      } else {
        setData([]); // Clear data if notifications have been cleared
        setLoading(false);
      }
    };

    fetchData();
  }, [user, token]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const clearNotifications = () => {
    setData([]); // Clear the notifications
    localStorage.setItem('notificationsCleared', 'true'); // Set flag in localStorage
  };

//   const notifications = [
//     "New message from John",
//     "Your order has shipped",
//     "Reminder: Meeting at 3 PM",
//     "System update available"
//   ];

  const notificationCount = data.length;

  return (
    <div className="notification-bar">
      <button onClick={toggleDropdown} className="notification-button">
        <FaBell size={24} />
        {notificationCount > 0 && (
          <span className="notification-count">{notificationCount}</span>
        )}
      </button>
      {isOpen && (
        <div className="notification-dropdown">
          <button onClick={clearNotifications} className="clear-button">
            <FaTimes size={16} /> Clear All
          </button>
          {data.length > 0 ? (
            <div>
              {data.map((record, index) => (
                <div key={index}>               
                  <div className='notification_sub'> Your order has been {record.status}</div>
                </div>
              ))}
            </div>
          ) : (
            <p>No notifications</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationBar;
