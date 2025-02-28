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
import DonateButton from "./components/DonateButton";
import {
  HashRouter as Router,
  Route,
  Link,
  Routes,
  Navigate,
} from "react-router-dom";
localStorage.theme = "mytheme";

function App() {
  return (
    <Router>
      <div className="App overflow-hidden">
        <Navigation></Navigation>

        <div className="h-32"></div>
        <div className=" min-h-screen">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="team" element={<Team></Team>} />
            <Route path="projects" element={<Projects></Projects>}></Route>
            <Route
              path="projects/vietnam"
              element={<h1 className="mt-12">Vietnam details coming soon!</h1>}
            ></Route>
            <Route
              path="projects/honduras"
              element={<h1 className="mt-12">Honduras details coming soon!</h1>}
            ></Route>
            <Route
              path="contribute"
              element={<Contribute></Contribute>}
            ></Route>
            <Route path="donate" element={<Donate></Donate>}></Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
