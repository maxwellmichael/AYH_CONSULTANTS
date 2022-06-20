import React from 'react'
import Section1 from '../components/sections/section1'
import Section2 from '../components/sections/section2'
import Section3 from '../components/sections/section3'
import Section4 from '../components/sections/section4'
import Section5 from '../components/sections/section5'

export default function HomeView() {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
     <div style={{ height: '72px' }}></div>
      <Section1 />
      <div style={{ height: '6rem' }}></div>
      <Section2 />
      <Section3 />
      <Section5 />
      <Section4 />
    </div>
  )
}
