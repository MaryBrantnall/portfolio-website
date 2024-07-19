
import Navbar from './components/header/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'

function App() {

  return (<>

    <Navbar />
    <Routes>
          <Route index element={ <Home /> } />
          <Route path="about" element={ <About /> } />
          <Route path="contact" element={ <Contact /> } />
          <Route path="home" element={ <Home /> } />
          <Route path="projects" element={ <Projects />} />
      </Routes>
      
    
      
  </>)
}

export default App
