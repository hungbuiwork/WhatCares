import logo from './logo.svg';
import './App.css';
import Navigation from './sections/Navigation';
import Intro from './sections/Intro';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import ImageCarousel from './components/ImageCarousel/ImageCarousel';
import { Footer } from './sections/Footer';
import { Partners } from './sections/Partners';
import {Team} from './sections/Team';
import Donate from './sections/Donate';
import Contact from './sections/Contact';

localStorage.theme = 'light'

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <div className=' relative bottom-24'>
        <Intro></Intro>
        <About></About>
        <hr></hr>
        <Projects></Projects>
        <hr></hr>
        <Team></Team>
        <hr></hr>
        <Donate></Donate>
        <hr></hr>
        <Contact></Contact>
      </div>
      <hr></hr>
      <Partners></Partners>
      <Footer></Footer>

    </div>
  );
}

export default App;
