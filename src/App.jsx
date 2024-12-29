import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Intro from "./components/Intro";
import MenuE from "./components/MenuE";
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
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
    </LanguageProvider>
  );
}

export default App;
