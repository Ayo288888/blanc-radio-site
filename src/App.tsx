import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WeatherCarousel from './components/WeatherCarousel';
import FeaturedSection from './components/FeaturedSection';
import ScheduleArchive from './components/ScheduleArchive';
import AdPollSection from './components/AdPollSection';
import ShoutoutForm from './components/ShoutoutForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <WeatherCarousel />
      <FeaturedSection />
      <ScheduleArchive />
      <AdPollSection />
      <ShoutoutForm />
      <Footer />
    </div>
  );
}

export default App;
