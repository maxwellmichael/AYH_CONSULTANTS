import './App.css'
import './styles/main.scss'
import Navbar from './components/layout/navbar'
import Section1 from './components/sections/section1'
import Section2 from './components/sections/section2'
import Section3 from './components/sections/section3'
import Footer from './components/layout/footer'
import Section4 from './components/sections/section4'
import Section5 from './components/sections/section5'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ height: '72px' }}></div>
      <Section1 />
      <div style={{ height: '6rem' }}></div>
      <Section2 />
      <Section3 />
      <Section5 />
      <Section4 />
      <Footer />
    </div>
  )
}

export default App
