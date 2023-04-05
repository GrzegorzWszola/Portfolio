import './App.css'
import {NavBar, Frontpage, AboutMe, Technology, Projects, Contact, Footer } from './components'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


function App() {
  useEffect(() => {
    AOS.init({once: true, duration: 1000});
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div className="body">
        <Frontpage/>
        <AboutMe />
        <Technology/>
        <Projects/>
        <Contact/>
      </div>
      <Footer />
    </div>
  )
}

export default App
