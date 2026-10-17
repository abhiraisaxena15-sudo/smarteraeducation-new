import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AdmissionTicker from './components/AdmissionTicker';
import Universities from './components/Universities';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import LeadForm from './components/LeadForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ChatBot from './components/ChatBot';
import LegalPage from './components/LegalPage';
import { legalByPath } from './data/legal';
import { normalizePath } from './lib/path';

function App({ path }: { path: string }) {
  const legal = legalByPath[normalizePath(path)];

  if (legal) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar solid />
        <LegalPage page={legal} />
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <AdmissionTicker />
        <Universities />
        <Services />
        <Stats />
        <Testimonials />
        <WhyChooseUs />
        <LeadForm />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
}

export default App;
