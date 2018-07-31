import React from 'react'
import Option from './Option'

const Options = ({ handleDeleteOptions, handleRemoveOption, options }) => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header-title">Your Options</h3>
        <button onClick={handleDeleteOptions} className="button--link">
          Remove all
        </button>
      </div>
      {options.length === 0 && (
        <p className="widget__message">Please add an option to get started.</p>
      )}
      {options.map((option, index) => {
        return (
          <Option
            option={option}
            key={option}
            count={index + 1}
            handleRemoveOption={handleRemoveOption}
          />
        )
      })}
    </div>
  )
}

export default Options
