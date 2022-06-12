import React from 'react'
import {
  RevealFromLeft,
  RevealFromRight,
} from '../../animation/ContentAnimations'
import MainBanner from '../../assets/images/main-banner.jpg'

export default function Section1() {
  return (
    <div id='home' className="block1-main">
      <div className="main-block">
        <div
          style={{ backgroundImage: `url(${MainBanner})` }}
          className="banner-image"
        ></div>
        <div className="gradient"></div>
        <h1 className="headline1 block1-heading ">
          <RevealFromLeft>Solutions For Every Business Need.</RevealFromLeft>
        </h1>

        <div className="block1-subtitle subtitle">
          <RevealFromRight>
            Conscious of the development and investments realized over the last
            few years, and keeping in mind the tax and accounting specificities
            of this industry, We provides a range of specialized services
            intended to respond to the specific needs of this business.
          </RevealFromRight>
        </div>
      </div>
    </div>
  )
}
