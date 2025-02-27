import Intro from "../sections/Intro";
import { About } from "../sections/About";
import { Projects } from "../sections/Projects";
import Donate from "../sections/Donate";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <div className="">
      <Intro></Intro>
      <About></About>
      <Projects></Projects>
    </div>
  );
};

export default Home;
