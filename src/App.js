import logo from "./logo.svg";
import "./App.css";
import Navigation from "./sections/Navigation";
import Intro from "./sections/Intro";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import { Footer } from "./sections/Footer";
import { Partners } from "./sections/Partners";
import { Team } from "./sections/Team";
import Donate from "./sections/Donate";
import Contact from "./sections/Contact";
import { Link } from "react-scroll";

localStorage.theme = "light";

function App() {
  return (
    <div className="App overflow-hidden">
      <Navigation></Navigation>
      <div className="">
        <Intro></Intro>
        <About></About>
        <Projects></Projects>
        <Donate></Donate>
        <Contact></Contact>
      </div>
      <hr></hr>
      <Partners></Partners>
      <Footer></Footer>
    </div>
  );
}

export default App;
