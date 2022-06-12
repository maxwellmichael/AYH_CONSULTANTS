import { useMediaQuery } from '@mui/material'
import React, { useState} from 'react'
import AppLogo from '../../assets/icons/ayh_logo.svg'
import { Link } from 'react-scroll'


export default function Navbar() {
  const isPhone = useMediaQuery('(max-width:600px)')
  const [showSidebar, setSidebar] = useState(false)

  

  const toggleSidebar = () => {
    setSidebar(!showSidebar)
  }
  const links = [
    {
      name: 'Home',
      url: 'home',
    },
    {
      name: 'About',
      url: 'about',
    },
    {
      name: 'Services',
      url: 'services',
    },
    {
      name: 'Contact',
      url: 'contact',
    },
  ]

  return (
    <div className="navbar">
      <div style={{ height: showSidebar ? '100vh' : 0, opacity: showSidebar ? 1 : 0,}} className="sidebar">
        <div className="navbar-links">
          {links.map((link, i) => (
            <div key={i} className="link-main">
              <Link className="link" to={link.url} offset={-30} smooth={true} duration={800} onClick={()=>toggleSidebar()}>
                {link.name}
              </Link>
              <div className="link-line"></div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ flexGrow: 3 }}>
        <div className="navbar-logo-main">
          <div className='icon-container'>
          <img src={AppLogo} alt="logo" className="icon" />
          </div>
       
          <div className='logo-title'>
            <div style={{fontSize:'1.7rem', fontWeight:'700', color:'#000000', paddingBottom:'3px'}} className='headline5 title'>AYH</div>
            <div style={{color:'#000000',fontSize:'1rem',}} className='headline5 title'>Consultants</div>
          </div>
        </div>
      </div>
      <div style={{ flexGrow: 4 }}></div>
      {isPhone ? (
        <div className="menu-icon-main">
        <div
          onClick={() => {
            toggleSidebar()
          }}
          className="menuIcon"
        >
          <span className={showSidebar?"icon toggle icon-bars":"icon icon-bars"}></span>
          {showSidebar?null:<span className="icon icon-bars overlay"></span>}
          
        </div>
      </div>
       
      ) : (
        <div style={{ flexGrow: 5 }}>
          <div className="navbar-links">
          {links.map((link, i) => (
            <div key={i} className="link-main">
              <Link className="link" to={link.url} smooth={true} duration={800}>
                {link.name}
              </Link>
              <div className="link-line"></div>
            </div>
          ))}
          </div>
        </div>
      )}
    </div>
  )
}
