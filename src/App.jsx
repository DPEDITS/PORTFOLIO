import Navbarweb from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { Banner } from './components/Banner';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import GithubStats from './components/GithubStats';

function App() {
  return (
    <>
    <div className='bg-particles'></div>
    <Navbarweb/>
    <Banner/>
    <Skills/>
    <Projects/>
    <GithubStats/>
    <Contact/>
    </>
  )
}

export default App
