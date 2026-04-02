import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { ArrowLeft, Filter } from 'lucide-react';
import { FrameCard } from '../components/FrameCard';
import { Footer } from '../components/Footer';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const CategoryPage = () => {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);
  const [frames, setFrames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API}/frames/category/${slug}`);
        setCategory(res.data.category);
        setFrames(res.data.frames);
      } catch (err) {
        console.error('Failed to fetch category data:', err);
      }
      setLoading(false);
    };
    fetchData();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FBFBF9]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-[#967C55] border-t-transparent rounded-full animate-spin" />
          <p className="text-[#5A5A5A] text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>Loading collection...</p>
        </div>
      </div>
    );
  }

  return (
    <div data-testid="category-page" className="min-h-screen bg-[#FBFBF9]">
      {/* Category Header */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={category?.image}
            alt={category?.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#FBFBF9]/85 backdrop-blur-sm" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <Link
            to="/"
            data-testid="back-to-home"
            className="inline-flex items-center gap-2 text-[#5A5A5A] hover:text-[#967C55] text-sm mb-8 transition-colors"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="overline mb-4">{frames.length} Frames Available</p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-[1.1] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {category?.name}
            </h1>
            <p className="text-[#5A5A5A] text-base md:text-lg max-w-xl">
              {category?.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Frames Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-2 text-[#5A5A5A]">
              <Filter className="w-4 h-4" />
              <span className="text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Showing {frames.length} frames
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {frames.map((frame, index) => (
              <FrameCard key={frame.id} frame={frame} index={index} />
            ))}
          </div>

          {frames.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#5A5A5A] text-lg">No frames found in this category.</p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-[#967C55] mt-4 hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all categories
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPage;
