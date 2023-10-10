import { Divider, WavesOpacity } from "./components/dividers"
import { Hero } from "./components/hero"
import { About } from "./components/about"
import './App.css'
import { Projects } from "./components/projects"
import { Skills } from "./components/skills"
import { Footer } from "./components/footer"

function App() {
  
  return (
    <>
    <Hero/>
    <Divider/>
    <About/>
    <Projects/>
    <Skills/>
    <Footer/>
    </>
  )
}

export default App
