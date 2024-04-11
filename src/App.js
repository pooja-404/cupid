
import './App.css';
import ServiceCard from './components/ServicesCard';
import TrustedCompany from './components/Trustedcompany';
import Herosec from './components/Herosec';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import IdentityHub from './components/Identityhub';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { usePreloader } from './components/common/Hooks';
import Preloader from './components/Preloder';
import Cupid from './components/Cupid';
function App() {
  const isLoading = usePreloader();
  return (
    <div className="mx-auto overflow-hidden font-inter bg-black-primary">
      {
        isLoading ? (<Preloader />) : (<>
          <Herosec />
          <TrustedCompany />
          <Cupid />
          <div className='bg-[url(./assets/images/servicebg.webp)] bg-BgSize bg-center bg-no-repeat'>
            <ServiceCard />
          </div>
          <Pricing />
          <Faq />
          <IdentityHub />
          <Footer />
          <BackToTop /></>)
      }
    </div >
  )

}

export default App;
