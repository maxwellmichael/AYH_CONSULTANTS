import React, { useEffect } from 'react'
import { connect } from 'react-redux/es/exports'
import Section1 from '../components/sections/section1'
import Section2 from '../components/sections/section2'
import Section3 from '../components/sections/section3'
import Section4 from '../components/sections/section4'
import Section5 from '../components/sections/section5'
import LoadingView from '../components/sections/loading'

import GoldBanner from '../assets/images/gold-vat-banner.jpg'
import ForexOilBanner from '../assets/images/oil-banner.jpg'
import VatBanner from '../assets/images/audit-banner.jpg'
import RealEstate from '../assets/images/real-estate.jpg'
import Forex from '../assets/images/forex.jpg'

import MainBanner from '../assets/images/main-banner.jpg'
import AboutImage from '../assets/images/about-image.jpg'
import GlobeImage from '../assets/images/globe.png'






import {
  HIDE_LOADER,
  INCREMENT_LOADER_VALUE,
  SHOW_LOADER,
} from '../redux/actions/loader.actions'

function HomeView({ dispatch, loader }) {
  

  useEffect(() => {
    const loadableImages = [
      {
        id: 1,
        src: GoldBanner,
        loadPoint: 10,
      },
      {
        id: 2,
        src: ForexOilBanner,
        loadPoint: 10,
      },
      {
        id: 3,
        src: VatBanner,
        loadPoint: 10,
      },
      {
        id: 4,
        src: RealEstate,
        loadPoint: 10,
      },
      {
        id: 5,
        src: Forex,
        loadPoint: 10,
      },
      {
        id: 6,
        src: MainBanner,
        loadPoint: 10,
      },
      {
        id:7,
        src: AboutImage,
        loadPoint:20,
      },
      {
        id:8,
        src: GlobeImage,
        loadPoint:20,
      }
    ]

    dispatch(SHOW_LOADER())
    dispatch(INCREMENT_LOADER_VALUE(5));
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image.src
        loadImg.onload = () => {
          dispatch(INCREMENT_LOADER_VALUE(image.loadPoint))
          return setTimeout(() => {
            resolve(image.src)
          }, 100)
        }

        loadImg.onerror = (err) => reject(err)
      })
    }

    Promise.all(loadableImages.map((image) => loadImage(image)))
      .then(() => dispatch(HIDE_LOADER()))
      .catch((err) => {
        dispatch(HIDE_LOADER())
        console.log('Failed to load images', err)
      })
  }, [dispatch])

  return (
    <>
      {loader.isVisible ? (
        <LoadingView value={loader.value} />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '72px' }}></div>
          <Section1 />
          <div style={{ height: '6rem' }}></div>
          <Section2 />
          <Section3 />
          <Section5 />
          <Section4 />
        </div>
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    loader: state.loader,
  }
}

export default connect(mapStateToProps)(HomeView)
