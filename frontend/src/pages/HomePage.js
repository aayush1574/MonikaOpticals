import { useState, useEffect } from 'react';
import axios from 'axios';
import { TopBanner } from '../components/TopBanner';
import { HeroSection } from '../components/HeroSection';
import { CatalogSection } from '../components/CatalogSection';
import { PrecisionSection } from '../components/PrecisionSection';
import { BrandGalaxy } from '../components/BrandGalaxy';
import { TrustSection } from '../components/TrustSection';
import { Footer } from '../components/Footer';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${API}/categories`);
        setCategories(res.data);
      } catch (err) {
        console.error('Failed to fetch categories:', err);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div data-testid="home-page">
      <TopBanner />
      <HeroSection />
      <CatalogSection categories={categories} />
      <PrecisionSection />
      <BrandGalaxy />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default HomePage;
