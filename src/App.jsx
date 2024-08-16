import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Project from "./Components/Project/Project";
import SocialLinks from "./Components/SocialLinks/SocialLinks";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Project />
        <Experience/>
        <Contact/>
        <SocialLinks />
      </div>
    </>
  );
}

export default App;
