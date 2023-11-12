import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Intro from "./components/Intro";
import MenuE from "./components/MenuE";

export default function App() {
  return (
    <main>
      <MenuE />
      <header>
        <Menu />
      </header>
      <Intro />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
