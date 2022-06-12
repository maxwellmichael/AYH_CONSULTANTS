import React from 'react'
import AboutBanner from '../../assets/images/about-image.jpg'
import TextRevealAnimation1 from '../../animation/TextRevealAnimations'
import {
  RevealFromLeft,
  RevealFromRight,
} from '../../animation/ContentAnimations'

export default function Section2() {
  return (
    <div id='about' className="section2-main">
      <div className="main-title">
        <div style={{ width: '80vw' }} className="line"></div>
        <TextRevealAnimation1
          type="heading1"
          text="About Us"
          fontWeight="5rem"
          color="black"
        />
      </div>
      <div style={{ height: '.5rem' }}></div>
      <div className="content">
        <RevealFromLeft>
          <div className="image-section">
            <img alt="Banner" src={AboutBanner} className="image" />
            <div className="overlay"></div>
          </div>
        </RevealFromLeft>
        <div style={{ height: '4rem' }}></div>
        <RevealFromRight>
          <div className="text-section">
            <div className="description subtitle ">
              {/* Our purpose is Building a better working world. The insights and
            quality services we provide help build trust and confidence in the
            capital markets and in economies the world over. We develop
            outstanding leaders who team to deliver on our promises to all our
            stakeholders. In so doing, we play a critical role in building a
            better working world for our people, for our clients and for our
            communities. */}
              Established in 2000. We are the management & financial consultants
              who deal with Oil, Gold, Forex , & Vat/Audit support. We closely
              work with government services ensuring our customers have
              hassle-free business & financial services. The insights and
            quality services we provide help build trust and confidence in the
            capital markets and in economies the world over.
               {/*Our specialists consist
              of Lawyers, Financial and Tax Advisers, many of whom are members
              of national and international professional bodies. We are extended
              our offices in Chicago & Houston USA provide innovative management
              consultancy services, including expert advice, and encourage
              international business . Our new AAP provide easy solutions for
              day today operations specially in Vat & Audit. Your one click away */}
            </div>
          </div>
        </RevealFromRight>
        <div style={{ height: '4rem' }}></div>
      </div>
    </div>
  )
}
