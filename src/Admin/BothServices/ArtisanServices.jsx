import React, { useState, useEffect } from "react";
import "../../AdminStyling/clientservice.css";
import vv from "../../assets/images/Vector (3).png";
import axios from "axios";

function ArtisanServices() {
  const [artisans, setArtisans] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [artisanToDelete, setArtisanToDelete] = useState(null);

  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        const response = await axios.get(
          "http://artireach.onrender.com/api/v1/users/artisans"
        );
        setArtisans(response.data.data);
      } catch (error) {
        console.error("There was an error fetching the artisan data:", error);
      }
    };

    fetchArtisans();
  }, []);

  const handleDelete = async () => {
    if (!artisanToDelete) return;
    try {
      const response = await axios.delete(
        `https://artireach.onrender.com/api/v1/users/delete/${artisanToDelete}`
      );
      if (response.data.success) {
        setArtisans(
          artisans.filter((artisan) => artisan._id !== artisanToDelete)
        );
        setIsModalVisible(false);
        setIsSuccessModalVisible(true);
      } else {
        alert("Failed to delete user");
      }
    } catch (error) {
      console.error("There was an error deleting the user:", error);
      alert("An error occurred while trying to delete the user");
    }
  };

  const handleShowModal = (artisanId) => {
    setArtisanToDelete(artisanId);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setArtisanToDelete(null);
  };

  const handleSuccessModalClose = () => {
    setIsSuccessModalVisible(false);
  };

  // Find artisan by ID and ensure it's defined
  const artisanToDeleteName = artisanToDelete
    ? artisans.find((artisan) => artisan._id === artisanToDelete)?.name || ""
    : "";

  // Modal component within the same file
  const Modal = ({ isVisible, onConfirm, onCancel, artisanName }) => {
    if (!isVisible) return null;

    return (
      <div className="clientservices-modal-overlay">
        <div className="clientservices-modal-content">
          <h2 className="clientservices-modal-title">Confirm Deletion</h2>
          <div className="clientservices-modal-body">
            Are you sure you want to delete {artisanName}?
          </div>
          <button
            onClick={onConfirm}
            className="clientservices-modal-btn clientservices-confirm-btn"
          >
            Yes, Delete
          </button>
          <button
            onClick={onCancel}
            className="clientservices-modal-btn clientservices-cancel-btn"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  };

  const SuccessModal = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
      <div className="clientservices-modal-overlay">
        <div className="clientservices-modal-content">
          <h2 className="clientservices-modal-title">Success</h2>
          <div className="clientservices-modal-body">
            User deleted successfully.
          </div>
          <button
            onClick={onClose}
            className="clientservices-modal-btn clientservices-ok-btn"
          >
            OK
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="clientservices-container">
      {artisans.length > 0 ? (
        artisans.map((artisan) => (
          <div key={artisan._id} className="clientservices-client-item">
            <div className="clientservices-client-image">
              <img src={vv} alt="" />
            </div>
            <div className="jbghjkb">
              <div className="clientservices-client-name">{artisan.name}</div>
              <div>Arti-Reach Artisan</div>
              <div className="services_btnal">
                <button className="clientservices-delete-btn">
                  View Profile
                </button>
                <button
                  onClick={() => handleShowModal(artisan._id)}
                  className="clientservices-delete-btn1"
                >
                  Remove Artisan
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="clientservices-no-data">No Artisan data available</p>
      )}
      <Modal
        isVisible={isModalVisible}
        onConfirm={handleDelete}
        onCancel={handleCancel}
        artisanName={artisanToDeleteName}
      />
      <SuccessModal
        isVisible={isSuccessModalVisible}
        onClose={handleSuccessModalClose}
      />
    </div>
  );
}

export default ArtisanServices;
