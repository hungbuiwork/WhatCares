import Intro from "../sections/Intro";
import { About } from "../sections/About";
import { Projects } from "../sections/Projects";
import Donate from "../sections/Donate";
import Contact from "../sections/Contact";
import CTA from "../sections/CTA";
import Empower from "../sections/Empower";
import FeaturedMedia from "../sections/FeaturedMedia";
import DonateButton from "../components/DonateButton";
const Home = () => {
  return (
    <div className="">
      <DonateButton></DonateButton>
      <Intro></Intro>
      <About></About>
      <FeaturedMedia></FeaturedMedia>
      <div className=" z-0">
        <Empower></Empower>
      </div>
      <div className=" z-20">
        <Projects></Projects>
      </div>
      <CTA></CTA>
    </div>
  );
};

export default Home;
