import React, { useState, useEffect } from 'react'
import OTPForm from './Components/OTPForm'
import Timer from './Components/Timer'
import Message from './Components/Message'
import CommonButton from './Components/CommonButton'
import './App.css'

function App() {
  const [initialOTP, setInitialOTP] = useState(generateOTP())
  const [enteredOTP, setEnteredOTP] = useState('')
  const [timer, setTimer] = useState(30)
  const [verificationStatus, setVerificationStatus] = useState('')
  const [resendDisabled, setResendDisabled] = useState(true)
  const [otpExpired, setOTPExpired] = useState(false)
  const [otpExpiredMessage, setOTPExpiredMessage] = useState('')
  const [verificationSuccess, setVerificationSuccess] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0 && !verificationSuccess) {
        setTimer(timer - 1)
      } else {
        setResendDisabled(false)
        setOTPExpired(true)
        setOTPExpiredMessage('The OTP has expired. Please resend.')
        clearInterval(interval)
        if (!verificationSuccess) {
          console.log('Timer expired!')
        }
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [timer, verificationSuccess])

  function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000)
  }

  function handleResendOTP() {
    setInitialOTP(generateOTP())
    setTimer(30)
    setResendDisabled(true)
    setVerificationStatus('')
    setOTPExpired(false)
    setOTPExpiredMessage('')
    setVerificationSuccess(false)
  }

  function handleOTPSubmit() {
    setEnteredOTP('')
    if (enteredOTP === initialOTP.toString()) {
      setVerificationStatus('Success')
      setVerificationSuccess(true)
      setResendDisabled(false)
      console.log('Verification successful!')
    } else {
      setVerificationStatus('Error')
      console.log('Verification failed!')
    }
  }

  return (
    <div className="App">
      <h1>OTP VERIFICATION</h1>
      <OTPForm
        enteredOTP={enteredOTP}
        setEnteredOTP={setEnteredOTP}
        handleOTPSubmit={handleOTPSubmit}
        timer={timer}
        otpExpired={otpExpired}
        otpExpiredMessage={otpExpiredMessage}
        verificationSuccess={verificationSuccess}
      />
      {!verificationSuccess && (
        <div className="statement">
          <Timer timer={timer} otpExpired={otpExpired} />
        </div>
      )}
      <Message verificationStatus={verificationStatus} />
      <div className="statement">OTP Sent: {initialOTP}</div>

      <CommonButton
        onClick={() => handleResendOTP()}
        disabled={resendDisabled}
        customName="Resend OTP"
      />
    </div>
  )
}

export default App
