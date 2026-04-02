import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Marquee from 'react-fast-marquee';

const BOKEH_PARTICLES = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  size: Math.random() * 40 + 15,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: Math.random() * 4 + 3,
  delay: Math.random() * 3,
}));

const BANNER_EYEWEAR = [
  { src: 'https://images.unsplash.com/photo-1730855910633-686c5818fd23?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=400', label: 'Aviator Sunglasses' },
  { src: 'https://images.unsplash.com/photo-1591843336309-cbf414ad7978?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=400', label: 'Classic Eyeglasses' },
  { src: 'https://images.pexels.com/photos/27353347/pexels-photo-27353347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=500', label: 'Designer Collection' },
  { src: 'https://images.unsplash.com/photo-1685715481110-19db0a76de2f?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=400', label: 'Sport Shield' },
  { src: 'https://images.pexels.com/photos/25651729/pexels-photo-25651729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=500', label: 'Minimalist Frames' },
  { src: 'https://images.unsplash.com/photo-1686165863154-b8f9d69add82?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=400', label: 'Reading Glasses' },
  { src: 'https://images.pexels.com/photos/5465835/pexels-photo-5465835.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=500', label: 'Retro Round' },
  { src: 'https://images.unsplash.com/photo-1588768897961-332c50c55d18?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=400', label: 'Wayfarer Style' },
];

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

      {/* Floating Eyewear Banner Marquee — full-width, outside content container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="absolute top-[15%] left-0 right-0 z-10 w-full"
        data-testid="hero-eyewear-banner"
      >
        <Marquee speed={35} pauseOnHover gradient gradientColor="#F2EDE4" gradientWidth={60}>
          {BANNER_EYEWEAR.map((item, i) => (
            <div key={i} className="mx-3 flex-shrink-0 group cursor-pointer">
              <div className="relative w-[200px] h-[140px] md:w-[260px] md:h-[180px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-white/50 bg-white/30 backdrop-blur-sm">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-wide" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </Marquee>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-[220px] md:mt-[240px]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="overline mb-6"
        >
          Since 1980 &mdash; Vidisha, Madhya Pradesh
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
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
          transition={{ duration: 0.8, delay: 0.6 }}
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
