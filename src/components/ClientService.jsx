import { useEffect, useState } from "react";
import "../styles/clientservice.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import StatusButton from "../status/StatusButton";
import Modal from "../popup/PopUp";
import Rating from "../components/Ratings";
import { useSelector } from "react-redux";

const ClientService = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  // const [token, setToken] = useState(null);
  const [data, setData] = useState([]);
  const [artisandata, setArtisandata] = useState({
    artisanId: "",
    artisanName: "",
  });
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchUserData = () => {
  //     const storedToken = localStorage.getItem("myToken");
  //     const storedUser = localStorage.getItem("user");

  //     if (storedToken && storedUser) {
  //       setToken(JSON.parse(storedToken));
  //       setUser(JSON.parse(storedUser));
  //     } else {
  //       navigate("/login");
  //     }
  //   };

  //   fetchUserData();
  // }, [navigate]);

  const navigate = useNavigate();

  const userData = useSelector((state) => state.user);
  const token = useSelector((state) => state.user.token);
  console.log(userData);

  useEffect(() => {
    if (userData) {
      // setUser(JSON.parse(userData));
      setUser(userData.user);
    } else {
      // navigate("/login");
    }
  }, [navigate]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://artireach.onrender.com/api/v1/job/jobs/${user._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data.data);

      setData(res.data.jobs);
      setLoading(false);
    } catch (error) {
      console.error(
        "Error fetching data:",
        error.response?.data?.message || error.message
      );
      setLoading(false);
      if (error.response?.status === 401) {
        // localStorage.removeItem("myToken");
        // localStorage.removeItem("user");
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user && token) {
      fetchData();
    }
  }, [user, token]);

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const dateString = date.toLocaleDateString();
    const timeString = date.toLocaleTimeString();
    return { date: dateString, time: timeString };
  };

  const openModal = (artisan) => {
    if (artisan && artisan._id) {
      setArtisandata({
        artisanId: artisan._id,
        artisanName: artisan.name,
      });
      setIsModalOpen(true);
    } else {
      console.warn("No valid artisan data provided for modal.");
    }
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const reviewData = {
      rating: rating,
      comment: review,
    };

    try {
      const response = await axios.post(
        `https://artireach.onrender.com/api/v1/review/artisans/${artisandata.artisanId}/reviews`,
        reviewData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Review submitted successfully:", response.data);
      // Optionally, you can show a success message here
    } catch (error) {
      console.error(
        "Error submitting review:",
        error.response?.data?.message || error.message
      );
      // Optionally, you can show an error message here
    } finally {
      closeModal();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setReview(""); // Clear review text when closing the modal
    setRating(0); // Optionally clear the rating as well
  };

  // if (loading) {
  //   return (
  //     <div className="loading-overlay">
  //       <div className="spinner"></div>
  //     </div>
  //   );
  // }

  return (
    <div className="service-cards">
      <h2 className="heading">Service Records</h2>
      <div className="card-container">
        {data?.map((record, index) => {
          const { date: formattedDate, time: formattedTime } = formatDateTime(
            record.date
          );

          return (
            <div key={index} className="service-card">
              <div className="card-header">
                <h3 className="artisan-name">
                  {record.artisan && record.artisan.length > 0 ? (
                    record.artisan.map((artisan, clientIndex) => (
                      <span key={clientIndex}>Name: {artisan.name}</span>
                    ))
                  ) : (
                    <span>No artisan assigned</span>
                  )}
                </h3>
              </div>
              <div className="card-body">
                <div>
                  <strong>Date:</strong> {formattedDate}
                </div>
                <div>
                  <strong>Time:</strong> {formattedTime}
                </div>
                <div>
                  <strong>Service:</strong> {record.taskName}
                </div>
                <div>
                  <strong>Location:</strong> {record.location || "N/A"}
                </div>
                <StatusButton myStatus={record.status} jobId={record._id} />
              </div>
              {record.status === "completed" &&
                record.artisan &&
                record.artisan.length > 0 && (
                  <div className="card-footer">
                    <span
                      className="rate-artisan"
                      onClick={() => openModal(record.artisan[0])}
                    >
                      Rate Artisan
                    </span>
                  </div>
                )}
            </div>
          );
        })}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Rate {artisandata.artisanName}</h2>
        <form onSubmit={handleSubmit}>
          <Rating rating={rating} onChange={handleRatingChange} />
          <div>
            <label>
              Your Review:
              <textarea
                value={review}
                onChange={handleReviewChange}
                rows="4"
                cols="50"
                placeholder="Write your review here..."
              />
            </label>
          </div>
          <button type="submit">Submit Rating and Review</button>
        </form>
      </Modal>
    </div>
  );
};

export default ClientService;
