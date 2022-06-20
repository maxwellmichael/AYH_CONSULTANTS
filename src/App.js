import './App.css'
import './styles/main.scss'
import Navbar from './components/layout/navbar'

import Footer from './components/layout/footer'
import {BrowserRouter} from 'react-router-dom'
import Router from './router'

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
