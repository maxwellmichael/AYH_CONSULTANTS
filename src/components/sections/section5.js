import React from 'react'
import {
  RevealFromBottom,
  RevealFromRight,
} from '../../animation/ContentAnimations'
import GoldBanner from '../../assets/images/gold-vat-banner.jpg'
import ForexOilBanner from '../../assets/images/oil-banner.jpg'
import VatBanner from '../../assets/images/audit-banner.jpg'
import RealEstate from '../../assets/images/real-estate.jpg'
import Forex from '../../assets/images/forex.jpg'



export default function Section5() {
  return (
    <div id="services" className="section5-main">
      <div className="section5-overlay"></div>
      <div style={{ height: '20rem' }}></div>
      <RevealFromRight>
        <div className="headline1 main-title">SERVICES</div>
      </RevealFromRight>

      <div style={{ height: '6rem' }}></div>
      <div className='line' style={{width:'80%', margin:'auto'}}></div>
      <RevealFromBottom>
        <div className="section5-contents">

          <div style={{backgroundImage:`url(${GoldBanner})`}} className="content-block">
            <div className="section5-contents-overlay"></div>
            <div className='headline2 content-title'>GOLD</div>
          </div>
        
          <div style={{backgroundImage:`url(${ForexOilBanner})`}} className="content-block">
            <div className="section5-contents-overlay"></div>
            <div className='headline2 content-title'>OIL</div>
          </div>

          <div style={{backgroundImage:`url(${VatBanner})`}} className="content-block">
            <div className="section5-contents-overlay"></div>
            <div className='headline2 content-title'>VAT/AUDIT</div>
          </div>

          <div style={{backgroundImage:`url(${RealEstate})`}} className="content-block">
            <div className="section5-contents-overlay"></div>
            <div className='headline2 content-title'>REAL ESTATE</div>
          </div>

          <div style={{backgroundImage:`url(${Forex})`}} className="content-block">
            <div className="section5-contents-overlay"></div>
            <div className='headline2 content-title'>FOREX</div>
          </div>
        </div>

        
      </RevealFromBottom>
      <div style={{ height: '12rem' }}></div>
    </div>
  )
}
