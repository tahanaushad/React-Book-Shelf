import React from 'react';
import "./Modal.css"

function Modal(props) {
  if (!props.isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={props.onClose}>Close</button>
        <div className="modal-content">{props.children}</div>
      </div>
    </div>
  );
}

export default Modal;
