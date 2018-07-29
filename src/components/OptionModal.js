import React from 'react'
import Modal from 'react-modal'

const OptionModal = ({ handleCloseModal, selectedOption }) => {
  return (
    <div>
      <Modal
        isOpen={!!selectedOption}
        contentLabel="example"
        onRequestClose={handleCloseModal}>
        {selectedOption && <p>{selectedOption}</p>}
        <button onClick={handleCloseModal}>Okay</button>
      </Modal>
    </div>
  )
}

export default OptionModal
