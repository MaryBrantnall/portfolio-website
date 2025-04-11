
import Navbar from './components/header/Navbar'
import { Route, Routes } from 'react-router-dom'
import Resume from './pages/resume/Resume'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'

function App() {

  return (<>

    <Navbar />
    <Routes>
          <Route index element={ <Home /> } />
          <Route path="Resume" element={ <Resume /> } />
          <Route path="contact" element={ <Contact /> } />
          <Route path="home" element={ <Home /> } />
          <Route path="projects" element={ <Projects />} />
      </Routes>
      
    
      
  </>)
}

export default App
