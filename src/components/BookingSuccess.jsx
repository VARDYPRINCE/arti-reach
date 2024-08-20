import React from 'react';
import '../styles/modalBooking.css'; // Ensure this path is correct

const BookingSuccessPage = () => {
  return (
    <div className="success-overlay">
      <div className="success-container">
        <h1>Booking Successful!</h1>
        <p>Service Successfully Requested. Thank you!</p>
        <button onClick={() => window.location.href = '/'}>
          Close
        </button>
      </div>
    </div>
  );
};

export default BookingSuccessPage;
