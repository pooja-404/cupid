
import './App.css';
import Hero from './components/hero';

function App() {
  return (
    <div className="bg-black font-inter">
      <div className='bg-[url(./assets/images/headerbg.png)] lg:bg-BgSize bg-cover bg-center bg-repeat xl:min-h-screen sm:h-[730px] md:h-[874px] lg:h-[930px] h-[600px]'>
        <Hero />
      </div>
    </div>
  );
}

export default App;
