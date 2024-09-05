import React, { useEffect, useState } from "react";
import "../styles/profile.css";
import { useParams } from "react-router-dom";
import profilepicture from "../assets/images/Vector (3).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Profile = () => {
  const { artisanId } = useParams();
  const [artisanData, setArtisanData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchUserByIdData = async (artisanId) => {
    try {
      const res = await axios.get(
        `http://artireach.onrender.com/api/v1/review/artisans/${artisanId}`
      );
      console.log(res.data); // Check the structure of res.data
      setArtisanData(res.data.data); // Assuming res.data.data is the array containing reviews and other data
    } catch (error) {
      console.error("Error fetching data", error.message);
    }
  };

  useEffect(() => {
    if (artisanId) {
      fetchUserByIdData(artisanId);
    }
  }, [artisanId]);

  const handleSearchOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Ensure artisanData and artisanData.reviews are arrays before applying filter
  const filteredReviews = Array.isArray(artisanData?.reviews)
    ? artisanData.reviews.filter((review) =>
        review.clientName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <>
      {artisanData && (
        <div className="profile_color_container">
          <div id="profile_search">
            <div className="input-wrapper_1">
              <input
                type="text"
                placeholder="Search by client name"
                className="input"
                value={searchTerm}
                onChange={handleSearchOnChange}
              />
              <button type="submit" className="btu">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
          <div className="color_profile">
            <div className="color_profile_img">
              <div>
                <img
                  src={profilepicture}
                  alt="Profile Pic"
                  className="color_profile_img_picture"
                />
              </div>
              <div className="white_data">
                Artisan: {artisanData.artisanName}
              </div>
            </div>

            <div className="profile_container_color"></div>
          </div>
          <div className="dope_profile">
            <div className="dope_profile_2">
              <span className="spanned">Artisan Name:</span>{" "}
              {artisanData.artisanName}
            </div>
            <div className="dope_profile_2">
              <span className="spanned">Artisan Average Rating:</span>{" "}
              {artisanData.averageRating}
            </div>
            <div className="review_cards_container">
              {filteredReviews.map((review, index) => (
                <div key={index} className="review-card">
                  <div className="review-card-header">
                    <span className="review-client-name">
                      {review.clientName}
                    </span>
                  </div>
                  <div className="review-card-body">
                    <div className="review-rating">
                      <span className="label">Rating:</span> {review.rating}
                    </div>
                    <div className="review-comment">
                      <span className="label">Comment:</span> {review.comment}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
