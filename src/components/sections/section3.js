import React from 'react'
import VisionBanner from '../../assets/images/globe.png'

export default function Section3() {
  return (
    <div id="expertise" className="section3-main">
      <div style={{ height: '12rem' }}></div>
      <div className="headline1 main-title">
        EXPERTISE
      </div>

      <div className="image-section">
        <img className="image" alt="vision" src={VisionBanner} />
        <div className="overlay"></div>
      </div>

      <div style={{ height: '3rem' }}></div>
      <div className="subtitle description">
        Our specialists consist of Lawyers, Financial and Tax Advisers, many of
        whom are members of national and international professional bodies. We
        are extended our offices in Chicago & Houston USA provide innovative
        management consultancy services, including expert advice, and encourage
        international business .
      </div>
      <div style={{ height: '4rem' }}></div>
    </div>
  )
}
