import React from 'react'

const Action = ({ handlePick, hasOptions }) => {
  return (
    <div>
      <button disabled={!hasOptions} onClick={handlePick}>
        Shuffle
      </button>
    </div>
  )
}

export default Action
