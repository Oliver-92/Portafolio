import Header from './components/organisms/Header'
import Hero from './components/organisms/Hero'
import './styles.css'
import { lazy, Suspense } from "react";

const About = lazy(() => import("./components/organisms/About"));
const Projects = lazy(() => import("./components/organisms/Projects"));
const Contact = lazy(() => import("./components/organisms/Contact"));

function App() {


  return (
    <>
      <Header />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
        </Suspense>
        <Suspense fallback={null}>
          <Projects />
        </Suspense>
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </main>
    </>
  )
}

export default App
