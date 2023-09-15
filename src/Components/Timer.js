import React from 'react'

function Timer({ timer, otpExpired }) {
  if (otpExpired) {
    return null;
  }
  return <div>Time Remaining: {timer} seconds</div>
}

export default Timer
