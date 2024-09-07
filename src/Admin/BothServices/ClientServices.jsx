import React, { useState, useEffect } from "react";
import "../../AdminStyling/clientservice.css";
import vv from "../../assets/images/Vector (3).png";
import axios from "axios";

function ClientServices() {
  const [clients, setClients] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [clientToDelete, setClientToDelete] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(
          "https://artireach.onrender.com/api/v1/users/clients"
        );
        setClients(response.data.data);
      } catch (error) {
        console.error("There was an error fetching the client data:", error);
      }
    };

    fetchClients();
  }, []);

  const handleDelete = async () => {
    if (!clientToDelete) return;
    try {
      const response = await axios.delete(
        `https://artireach.onrender.com/api/v1/users/delete/${clientToDelete}`
      );
      if (response.data.success) {
        setClients(clients.filter((client) => client._id !== clientToDelete));
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

  const handleShowModal = (clientId) => {
    setClientToDelete(clientId);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setClientToDelete(null);
  };

  const handleSuccessModalClose = () => {
    setIsSuccessModalVisible(false);
  };

  // Modal component within the same file
  const Modal = ({ isVisible, onConfirm, onCancel, clientName }) => {
    if (!isVisible) return null;

    return (
      <div className="clientservices-modal-overlay">
        <div className="clientservices-modal-content">
          <h2 className="clientservices-modal-title">Confirm Deletion</h2>
          <div className="clientservices-modal-body">
            Are you sure you want to delete {clientName}?
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

  // Find client by ID and ensure it's defined
  const clientToDeleteName = clientToDelete
    ? clients.find((client) => client._id === clientToDelete)?.name || ""
    : "";

  return (
    <div className="clientservices-container">
      {clients.length > 0 ? (
        clients.map((client) => (
          <div key={client._id} className="clientservices-client-item">
            <div className="nhjvfh">
              <img src={vv} alt="" />
            </div>
            <div className="jbghjkb">
              <div className="clientservices-client-name">{client.name}</div>
              <div>Arti-Reach Client</div>
              <button
                onClick={() => handleShowModal(client._id)}
                className="clientservices-delete-btn"
              >
                Remove User
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="clientservices-no-data">No client data available</p>
      )}
      <Modal
        isVisible={isModalVisible}
        onConfirm={handleDelete}
        onCancel={handleCancel}
        clientName={clientToDeleteName}
      />
      <SuccessModal
        isVisible={isSuccessModalVisible}
        onClose={handleSuccessModalClose}
      />
    </div>
  );
}

export default ClientServices;
