import React from 'react'
import CommonButton from './CommonButton'

function OTPForm({
  enteredOTP,
  setEnteredOTP,
  handleOTPSubmit,
  timer,
  otpExpired,
  otpExpiredMessage,
  verificationSuccess,
}) {

  const handleInputChange = (e) => {
    const value = e.target.value
    if (/^\d{0,6}$/.test(value)) {
      setEnteredOTP(value)
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter OTP"
        value={enteredOTP}
        onChange={handleInputChange}
        className="otp-input"
      />

      {!verificationSuccess && (
        <div>
          {otpExpired && (
            <div className="expired-message">{otpExpiredMessage}</div>
          )}
          <CommonButton
            onClick={() => handleOTPSubmit()}
            disabled={timer === 0}
            customName="Submit"
          />
        </div>
      )}
    </div>
  )
}

export default OTPForm
