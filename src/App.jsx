import './App.css';
import SectionAllProducts from './components/SectionAllProducts';
import SectionBest from './components/SectionBest';
import SectionCategories from './components/SectionCategories';
import SectionFooter from './components/SectionFooter';
import SectionHero from './components/SectionHero';
import SectionTestimonials from './components/SectionTestimonials';

function App() {
  return (
    <div className="App">
      <SectionHero/>
      <SectionCategories/>
      <SectionBest/>
      <SectionAllProducts/>
      <SectionTestimonials/>
      <SectionFooter/>
    </div>
  );
}

export default App;
