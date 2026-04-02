import { TopBanner } from '../components/TopBanner';
import { HeroSection } from '../components/HeroSection';
import { CatalogSection } from '../components/CatalogSection';
import { PrecisionSection } from '../components/PrecisionSection';
import { BrandGalaxy } from '../components/BrandGalaxy';
import { TrustSection } from '../components/TrustSection';
import { Footer } from '../components/Footer';
import { CATEGORIES } from '../data/catalog';

const HomePage = () => {
  return (
    <div data-testid="home-page">
      <TopBanner />
      <HeroSection />
      <CatalogSection categories={CATEGORIES} />
      <PrecisionSection />
      <BrandGalaxy />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default HomePage;
