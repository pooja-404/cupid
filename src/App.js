
import './App.css';
import ServiceCard from './components/ServicesCard';
import TrustedCompany from './components/Trustedcompany';
import Herosec from './components/Herosec';

function App() {
  return (
    <div className="bg-black ">
      <Herosec />
      <TrustedCompany />
      <div className='bg-[url(./assets/images/servicebg.webp)] lg:bg-BgSize bg-cover bg-center bg-repeat '>
        <ServiceCard />
      </div>
    </div>
  );
}

export default App;
