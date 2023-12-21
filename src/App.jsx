import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import ContactMe from './pages/contact-me';
import ProjectDetail from './pages/project-detail';

function App() {
  

  return (
    <>
      <Router>
       <Navbar />
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/portfolio/:id' element={<ProjectDetail />}/>
        <Route path='/contact-me' element={<ContactMe />}/>

       </Routes>
      
       <Footer />
      </Router>
    </>
  )
}

export default App
