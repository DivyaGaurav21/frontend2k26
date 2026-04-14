import React from "react";
import "./day1.css";

const Modal = ({ children, isOpen, isClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modal">
      <div className="overlay" onClick={isClose} />
      <div className="content">
        <button className="close-btn" onClick={isClose}>
          ❌
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};
export default Modal;

// import { createPortal } from "react-dom";

// const Modal = ({ children, isOpen, isClose }) => {
//   if (!isOpen) return null;

//   let portalContainer = document.getElementById("portal-root");

//   return createPortal(
//     <div className="modal">
//       <div className="overlay" onClick={isClose} />
//       <div className="content">
//         <button className="close-btn" onClick={isClose}>
//           ❌
//         </button>
//         <div>{children}</div>
//       </div>
//     </div>,
//     portalContainer
//   );
// };
// export default Modal;
