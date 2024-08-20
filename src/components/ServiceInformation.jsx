import React, { useState } from "react";
import "../styles/dashboardNavBar.css";
import ServiceModal from "./ServiceModal";
import { useParams } from "react-router-dom";

const ServiceInformation = () => {
  const { artisanId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    // userId: ,
    date: "",
    // time: '',
    taskName: "",
    taskDescription: "",
    location: "",
  });

  const [errors, setErrors] = useState({
    taskName: "",
    taskDescription: "",
    date: "",
    location: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!bookingData.taskName.trim())
      newErrors.taskName = "Task Name is required";
    if (!bookingData.taskDescription.trim())
      newErrors.taskDescription = "Task Description is required";
    if (!bookingData.date.trim())
      newErrors.date = "Date of completion is required";
    if (!bookingData.location.trim())
      newErrors.location = "Location is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle opening modal
  const handleOpenModal = () => {
    if (validateForm()) {
      setIsModalOpen(true);
    }
  };

  // Handle closing modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container_1">
      <h3 className="headtext">Service Information</h3>
      <div className="mainBox">
        <div className="task_input">
          <div className="sk">Task Name</div>
          <input
            type="text"
            name="taskName"
            value={bookingData.taskName}
            onChange={handleInputChange}
            className="input1"
            placeholder="Enter the task"
          />
          {errors.taskName && <p className="error">{errors.taskName}</p>}

          <div className="sk">Description</div>
          <input
            type="text"
            name="taskDescription"
            value={bookingData.taskDescription}
            onChange={handleInputChange}
            className="input2"
            placeholder="Task Description"
          />
          {errors.taskDescription && (
            <p className="error">{errors.taskDescription}</p>
          )}
        </div>
        <br />
        <div className="sk">Date of completion</div>
        <input
          type="date"
          name="date"
          value={bookingData.date}
          onChange={handleInputChange}
          className="input1"
          placeholder="Enter date of completion"
        />
        {errors.date && <p className="error">{errors.date}</p>}

        <div className="task_input">
          <div className="sk">Location</div>
          <input
            type="text"
            name="location"
            value={bookingData.location}
            onChange={handleInputChange}
            className="input1"
            placeholder="Enter your Location"
          />
          {errors.location && <p className="error">{errors.location}</p>}

          <button className="service_button" onClick={handleOpenModal}>
            Request Service
          </button>
          <ServiceModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            bookingData={bookingData}
            artisanId={artisanId}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceInformation;
