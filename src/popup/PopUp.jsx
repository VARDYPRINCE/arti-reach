// // PopUp.js
// import React from 'react';
// import './pop.css'; // Make sure to create this CSS file

// const PopUp = ({ isOpen, onClose, rating, onRatingChange, comment, onCommentChange, onSubmit }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <button className="modal-close" onClick={onClose}>
//           &times;
//         </button>
//         <h2>Submit Your Review</h2>
//         <div className="rating-section">
//           {[...Array(5)].map((_, index) => {
//             const starRating = index + 1;
//             return (
//               <label key={starRating}>
//                 <input
//                   type="radio"
//                   name="rating"
//                   value={starRating}
//                   checked={starRating === rating}
//                   onChange={() => onRatingChange(starRating)}
//                   style={{ display: 'none' }} // Hide radio inputs visually
//                 />
//                 <FaStar
//                   size={20}
//                   className="star"
//                   color={starRating <= rating ? 'yellow' : 'grey'}
//                 />
//               </label>
//             );
//           })}
//         </div>
//         <textarea
//           placeholder="Write your comment..."
//           value={comment}
//           onChange={onCommentChange}
//           rows="4"
//           style={{ width: '100%', marginTop: '10px' }}
//         />
//         <button onClick={onSubmit} style={{ marginTop: '10px' }}>
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PopUp;


// Modal.js
import React from 'react';
import './pop.css'; // Make sure to create this CSS file

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
