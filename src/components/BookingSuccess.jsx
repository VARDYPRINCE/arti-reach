import '../styles/modalBooking.css'; 

const BookingSuccessPage = () => {
  return (
    <div className="success-overlay">
      <div className="success-container">
        <h1>Booking Successful!</h1>
        <p>Service Successfully Requested. Thank you!</p>
        <button onClick={() => window.location.href = '/dashboard'}>
          Close
        </button>
      </div>
    </div>
  );
};

export default BookingSuccessPage;
