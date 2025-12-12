import HomePage from "./components/Home"
import About from "./components/About";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import Together from "./components/Together";
import ClientSkills from "./components/ClientSkills";

export default function Home() {
  return (
    <>
      <HomePage/>
      <About />
      <Projects />
      <ClientSkills />
      <Hobbies />
      <Together />
    </>
  );
}
