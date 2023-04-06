import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { supabase } from '../../helper/superBase';

function AddSiteModal({ openModal, closeModal, modalVisible, token }) {
  const [site, setSite] = useState([]);
  const [formData, setFormData] = useState(
    {
      user_id: '',
      name: '',
      scale: '',
      workingHours: '',
    },
    { uniqueColumns: ['name'] }
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.from('site').insert({
        user_id: token.user.id,
        name: formData.name,
        scale: formData.scale,
        workingHours: formData.workingHours,
      });
      if (error) throw error;
      alert('Site has Beed Added!');
    } catch (error) {
      alert(error);
    }
    closeModal();
  }

  return (
    <Modal
      isOpen={modalVisible}
      onRequestClose={closeModal}
      contentLabel="Modal"
      style={modal}
    >
      <h2 className="modal-">Hello</h2>

      <div className="modal-">Please Add a site!</div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Site Name</label>
          <input
            placeholder="ID or adress"
            name="name"
            type="name"
            id="name"
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="Scale">Scale</label>
          <input
            placeholder="Sm, Md, Lrg"
            name="Scale"
            type="Scale"
            id="Scale"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="workingHours">Working Hours</label>
          <input
            placeholder="7am - 4pm"
            name="workingHours"
            type="workingHours"
            id="workingHours"
            onChange={handleChange}
          />
        </div>
        <div className="control">
          <button className="button is-link" type="submit">
            Submit
          </button>
        </div>
      </form>
      <button className="modal-  button" onClick={closeModal}>
        close
      </button>
    </Modal>
  );
}

const modal = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default AddSiteModal;
