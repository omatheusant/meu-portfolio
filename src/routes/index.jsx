import { Divider } from "../components/dividers"
import { About } from "./pages/about"
import { Footer } from "./pages/footer"
import { Hero } from "./pages/hero"
import { Projects } from "./pages/projects"
import { Skills } from "./pages/skills"

export const Routes = () => {
    return(
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