import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const BOKEH_PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: Math.random() * 60 + 20,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: Math.random() * 4 + 3,
  delay: Math.random() * 3,
}));

export const HeroSection = () => {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: `linear-gradient(to bottom, #FBFBF9, #F5F0E8, #FBFBF9)` }}
    >
      {/* Bokeh particles */}
      {BOKEH_PARTICLES.map((p) => (
        <div
          key={p.id}
          className="bokeh-particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            '--duration': `${p.duration}s`,
            '--delay': `${p.delay}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="overline mb-6"
        >
          Since 1980 &mdash; Vidisha, Madhya Pradesh
        </motion.p>

        {/* 3D Floating Spectacles */}
        <motion.div
          className="relative mx-auto mb-8 light-sweep"
          style={{ maxWidth: 500 }}
          animate={{ y: [-15, 15] }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 4, ease: 'easeInOut' }}
        >
          <img
            src="https://static.prod-images.emergentagent.com/jobs/bf1dd7c4-4ebf-4eaa-9e24-8ae7d7881933/images/b1438c0fe12f75a3d47ac7528ac4f70c0e8ffc5ab1838e881a34455a4894d57c.png"
            alt="Premium Spectacles"
            className="w-full h-auto drop-shadow-2xl"
            data-testid="hero-spectacles"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-[1.1] mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Precision Meets Legacy.
          <br />
          <span className="text-[#967C55]">45 Years</span> of Zero-Error Vision.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-lg text-[#5A5A5A] max-w-2xl mx-auto mb-10 font-light"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Experience handcrafted precision with our special automatic machines.
          Trusted by thousands in Vidisha for impeccable eyewear since 1980.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <a
            href="#catalog"
            data-testid="hero-explore-btn"
            className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:bg-[#333] transition-all duration-300 hover:-translate-y-1"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Explore Collection
          </a>
          <a
            href="https://wa.me/918109204075?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20eyewear%20collection."
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-whatsapp-btn"
            className="whatsapp-btn text-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chat with Us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-6 h-6 text-[#967C55]" />
      </motion.div>
    </section>
  );
};
