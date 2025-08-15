import TopBar from './components/TopBar';
import HeroSection from './components/HeroSection';
import TronFloor from './components/TronFloor';
import ScrollingBanner from './components/ScrollingBanner';
import NFTGrid from './components/NFTGrid';
import LeaderboardSection from './components/LeaderboardSection';
import FooterIcons from './components/FooterIcons';
import Footer from './components/Footer';
import FooterBar from './components/FooterBar';

export default function App() {
  return (
    <div
      className="relative text-white overflow-x-hidden mx-auto"
      style={{
        width: '1440px',
        height: '1123px',
        backgroundColor: '#00120A',
        minHeight: '1123px',
        maxWidth: '1440px',
      }}
    >
      {/* Fixed TopBar */}
      <TopBar />

      {/* Full height container for content */}
      {/* Add padding-top to avoid overlap */}
      <div className="pt-[72px] w-full h-full">
        <HeroSection />
        <TronFloor />
        {/* FooterBar should be here, before ScrollingBanner */}
        <FooterBar />
        <ScrollingBanner />
        <NFTGrid />
        <LeaderboardSection />
        <FooterIcons />
        <Footer />
      </div>
    </div>
  );
}
