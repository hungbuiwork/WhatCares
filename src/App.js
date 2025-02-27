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

localStorage.theme = "light";

function App() {
  return (
    <BrowserRouter>
      <div className="App overflow-hidden">
        <Navigation></Navigation>
        <div className=" relative top-32">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="team" element={<Team></Team>} />
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
