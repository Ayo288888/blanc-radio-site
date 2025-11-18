import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WeatherCarousel from './components/WeatherCarousel';
import FeaturedSection from './components/FeaturedSection';
import ScheduleArchive from './components/ScheduleArchive';
import AdPollSection from './components/AdPollSection';
import ShoutoutForm from './components/ShoutoutForm';
import Footer from './components/Footer';
import CommunityPage from './components/CommunityPage';
import SchedulePage from './components/SchedulePage';
import DownloadPage from './components/DownloadPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      {currentPage === 'home' && (
        <>
          <HeroSection />
          <WeatherCarousel />
          <FeaturedSection />
          <ScheduleArchive />
          <AdPollSection />
          <ShoutoutForm />
        </>
      )}
      {currentPage === 'community' && <CommunityPage />}
      {currentPage === 'schedule' && <SchedulePage />}
      {currentPage === 'download' && <DownloadPage />}
      <Footer />
    </div>
  );
}

export default App;
