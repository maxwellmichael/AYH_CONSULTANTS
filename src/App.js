import './App.css'
import './styles/main.scss'
import Navbar from './components/layout/navbar'

import Footer from './components/layout/footer'
import {BrowserRouter} from 'react-router-dom'
import Router from './router'

import { createStore } from 'redux';
import rootReducer from './redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Navbar />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Footer />
      </Provider>
    </div>
  )
}

export default App
