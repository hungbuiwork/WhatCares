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
    <div className="App">
      <Navigation></Navigation>
      <div className=" relative bottom-24">
        <Intro></Intro>
        <About></About>
        <Projects></Projects>
        <div className="">
          <h1 className=" text-bold text-6xl p-6">
            Want To <span className=" text-orange-600">Help Out?</span>
          </h1>

          <Link
            activeClass="active"
            to="contribute"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button className="m-4 text-white btn hover:translate-y-2 bg-orange-600 hover:text-orange-600 text-xl border-2">
              {" "}
              Start Contributing Today ↓{" "}
            </button>
          </Link>
        </div>
        <Team></Team>
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
