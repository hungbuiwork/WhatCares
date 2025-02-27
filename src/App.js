import logo from "./logo.svg";
import "./App.css";
import Navigation from "./sections/Navigation";
import Intro from "./sections/Intro";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import { Footer } from "./sections/Footer";
import { Partners } from "./sections/Partners";
import Contact from "./sections/Contact";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Donate from "./pages/Donate";
import Contribute from "./pages/Contribute";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
localStorage.theme = "mytheme";

function App() {
  return (
    <BrowserRouter>
      <div className="App overflow-hidden">
        <Navigation></Navigation>
        <div className="h-32"></div>
        <div className=" ">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="team" element={<Team></Team>} />
            <Route path="projects" element={<Projects></Projects>}></Route>
            <Route
              path="contribute"
              element={<Contribute></Contribute>}
            ></Route>
            <Route path="donate" element={<Donate></Donate>}></Route>
          </Routes>
          <Footer></Footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
