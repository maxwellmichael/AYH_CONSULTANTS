import React from 'react'
import { ReactComponent as FacebookLogo } from '../../assets/icons/facebook-original.svg'
import { ReactComponent as TwitterLogo } from '../../assets/icons/twitter-original.svg'
import { ReactComponent as InstagramLogo } from '../../assets/icons/instagram-original.svg'

export default function Footer() {
  return (
    <div className="footer-main">
      <div className='footer-overlay'></div>
      <div className="footer-section-1">
        <div className="headline3 footer-section1-title">AYH-Consultants</div>
        <div className="subtitle footer-section1-subtitle">
          Office. 247 K City Business Center Manama. Bahrain
        </div>
        <div className="subtitle footer-section1-subtitle">
          <a href='/privacy-policy'><span className='footer-underline'>Privacy Policy</span></a>
        </div>
      </div>
      <div className="footer-section-2">
        <div className="footer-section-2-logo-container">
          <div className="footer-section-2-logo">
            <InstagramLogo />
          </div>
          <div className="footer-section-2-logo">
            <FacebookLogo />
          </div>
          <div className="footer-section-2-logo">
            <TwitterLogo />
          </div>
        </div>
        <div className="subtitle footer-section2-subtitle">
          AYH-Consultants @ 2022 All Rights Reserved.
        </div>
      </div>
    </div>
  )
}
