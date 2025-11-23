import React from 'react'

export default function Landing(){
  const logoSrc = '/SaltySkipperLogo.PNG'
  const skipperSrc = encodeURI('/Skipper Standing.jpg')

  return (
    <div className="landing">
      <div className="header">
        <div className="logo-placeholder">
          <img src={logoSrc} alt="SaltySkipper Logo" style={{maxWidth:'100%', maxHeight:48}} />
        </div>
        <div style={{flex:1, textAlign:'center'}}>
          <div className="skipper-image">
            <img src={skipperSrc} alt="Skipper" style={{maxWidth:'100%', maxHeight:'100%', objectFit:'contain'}} />
          </div>
        </div>
        <div style={{width:120}} />
      </div>

      <div className="chat-box">
        <strong>SaltySkipper:</strong>
        <div style={{marginTop:8}}>Welcome! This is a scripted chatbot placeholder. We'll add interactions next.</div>
      </div>
    </div>
  )
}
