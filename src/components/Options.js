import React from 'react'
import Option from './Option'

const Options = ({ handleDeleteOptions, handleRemoveOption, options }) => {
  return (
    <div>
      <button onClick={handleDeleteOptions}>Remove all</button>
      {options.length === 0 && <p>Please add an option to get started.</p>}
      {options.map((option) => {
        return (
          <Option
            option={option}
            key={option}
            handleRemoveOption={handleRemoveOption}
          />
        )
      })}
    </div>
  )
}

export default Options
