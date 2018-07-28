import React from 'react'

const Option = ({ option, handleRemoveOption }) => {
  return (
    <div>
      {option}
      <button onClick={() => handleRemoveOption(option)}>Remove</button>
    </div>
  )
}

export default Option
