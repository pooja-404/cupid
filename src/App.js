
import './App.css';
import ServiceCard from './components/ServicesCard';
import TrustedCompany from './components/Trustedcompany';
import Herosec from './components/Herosec';
import Crm from './components/Crm';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import IdentityHub from './components/Identityhub';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { usePreloader } from './components/common/Hooks';
import Preloader from './components/Preloder';

// function App() {
//   return (
//     <div className="bg-black overflow-hidden ">
//       <Herosec />
//       <TrustedCompany />
//       <Crm />
//       <div className='bg-[url(./assets/images/servicebg.webp)] lg:bg-BgSize bg-cover bg-center bg-repeat '>
//         <ServiceCard />
//       </div>
//       <Pricing />
//       <Faq />
//       <IdentityHub />
//       <Footer />
//       <BackToTop />
//     </div>
//   );
// }
function App() {
  const isLoading = usePreloader();
  return (
    <div className="mx-auto overflow-hidden font-inter bg-black-primary">
      <div className='max-w-[1920px] mx-auto'>
        {
          isLoading ? (<Preloader/>) : (<>
            <Herosec />
            <TrustedCompany />
            <Crm />
            <div className='bg-[url(./assets/images/servicebg.webp)] bg-BgSize bg-center bg-no-repeat'>
              <ServiceCard />
            </div>
            <Pricing />
            <Faq />
            <IdentityHub />
            <Footer />
            <BackToTop /></>)
        }
      </div>

    </div >
  )

}

export default App;
