import Navbarweb from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { Banner } from './components/Banner';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className='bg-particles'></div>
    <Navbarweb/>
    <Banner/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
