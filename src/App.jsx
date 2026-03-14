import './App.css';
import AZPortrait from '../src/assets/BEF0119D-4179-4C22-A407-22EDAAA1923B_1_105_c.jpeg';
import Info from './components/Info/Info';
import Buttons from './components/Buttons/Buttons';
import About from './components/About/About';
import Interests from './components/Interests/Interests';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <main className="main">
      <img
        src={AZPortrait}
        className="image"
        alt="Adrian in the mountains"
      ></img>
      <Info />
      <Buttons />
      <About />
      <Interests />
      <Footer />
    </main>
  );
}

export default App;
