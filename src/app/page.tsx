import HomePage from "./components/Home"
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import Together from "./components/Together";

export default function Home() {
  return (
    <>
      <HomePage/>
      <About />
      <Projects />
      <Skills />
      <Hobbies />
      <Together />
    </>
  );
}
