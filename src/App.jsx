// import { useState } from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import { Article } from './Components/Article.jsx';
import './index.css'
import { Navbar } from './Components/Navbar.jsx';






function App() {

  return (
    <Router>
      <div className='pagge mainPage'>
        <Navbar />     
        <Article />
      </div>
    </Router>
  )
}

export default App
