import './App.css';
import SectionAllProducts from './components/SectionAllProducts';
import SectionBest from './components/SectionBest';
import SectionCategories from './components/SectionCategories';
import SectionHero from './components/SectionHero';

function App() {
  return (
    <div className="App">
      <SectionHero/>
      <SectionCategories/>
      <SectionBest/>
      <SectionAllProducts/>
    </div>
  );
}

export default App;
