import React, { useState } from 'react'

function CommonButton({onClick, disabled, customName }) {

  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => {
      setIsClicked(false)
    }, 100)
    onClick()
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`button ${isClicked && 'click-animation'}`}
    >
      {customName}
    </button>
  )
}

export default CommonButton
