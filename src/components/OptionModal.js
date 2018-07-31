import React from 'react'
import Modal from 'react-modal'

const OptionModal = ({ handleCloseModal, selectedOption }) => {
  return (
    <div>
      <Modal
        isOpen={!!selectedOption}
        contentLabel="example"
        onRequestClose={handleCloseModal}
        closeTimeoutMS={200}
        className="modal">
        <h3 className="modal__title">Selected Option</h3>
        {selectedOption && <p className="modal__body">{selectedOption}</p>}
        <button className="button" onClick={handleCloseModal}>
          Okay
        </button>
      </Modal>
    </div>
  )
}

export default OptionModal
