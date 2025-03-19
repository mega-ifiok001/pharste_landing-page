import logo from './logo.svg';
import './App.css';
import Header from '../src/pages/header/header'
import Hero from '../src/pages/hero-section/hero'
import Money from '../src/pages/money/money';

function App() {
  return (
    <div className="App">
       <Header/>
       <Hero/>
       <Money/>
    </div>
  );
}

export default App;
