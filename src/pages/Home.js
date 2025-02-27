import Intro from "../sections/Intro";
import { About } from "../sections/About";
import { Projects } from "../sections/Projects";
import Donate from "../sections/Donate";
import Contact from "../sections/Contact";
import CTA from "../sections/CTA";
import Empower from "../sections/Empower";

const Home = () => {
  return (
    <div className="">
      <Intro></Intro>
      <About></About>
      <Projects></Projects>
      <Empower></Empower>
      <CTA></CTA>
    </div>
  );
};

export default Home;
