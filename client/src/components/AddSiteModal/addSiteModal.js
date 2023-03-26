import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { supabase } from '../../helper/superBase';

function AddSiteModal() {
  const [site, setSite] = useState([]);

  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <h2 className="modal-">Hello</h2>

      <div className="modal-">I am a modal</div>
      <form className="modal-">
        <input className="modal-" />
      </form>
      <button className="modal-  button" onClick={closeModal}>
        close
      </button>
    </Modal>
  );
}

export default AddSiteModal;
