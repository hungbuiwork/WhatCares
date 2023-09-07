import logo from './logo.svg';
import './App.css';
import Navigation from './sections/Navigation/Navigation';
import Intro from './sections/Intro/Intro';
import { About } from './sections/About/About';
import { Projects } from './sections/Projects/Projects';
import ImageCarousel from './components/ImageCarousel/ImageCarousel';
import { Footer } from './sections/Footer/Footer';
import { Partners } from './sections/Partners/Partners';
import {Team} from './sections/Team/Team';
import Donate from './sections/Donate/Donate';

localStorage.theme = 'light'

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <div className=' relative bottom-24'>
        <Intro></Intro>
        <About></About>
        <Projects></Projects>
        <Team></Team>
        <Partners></Partners>
        <Donate></Donate>
      </div>
      <Footer></Footer>

    </div>
  );
}

export default App;
