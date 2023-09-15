import React from 'react'

function Message({ verificationStatus }) {
  return (
    <div>
      {verificationStatus === 'Success' && <div className='success-message'>Verification Successful!</div>}
      {verificationStatus === 'Error' && (
        <div className='expired-message'>Verification Failed. Please try again.</div>
      )}
    </div>
  )
}

export default Message
