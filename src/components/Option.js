import React from 'react'

const Option = ({ count, handleRemoveOption, option }) => {
  return (
    <div className="option">
      <p className="option__text">{`${count}. ${option}`}</p>
      <button
        onClick={() => handleRemoveOption(option)}
        className="button button--link">
        Remove
      </button>
    </div>
  )
}

export default Option
