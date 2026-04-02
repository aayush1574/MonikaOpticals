import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const item = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] } }),
};

const CategoryCard = ({ cat, index, variant = 'default' }) => {
  const navigate = useNavigate();
  const isLarge = variant === 'large';

  return (
    <motion.div
      custom={index}
      variants={item}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="group cursor-pointer h-full"
      onClick={() => navigate(`/category/${cat.slug}`)}
      data-testid={`category-card-${cat.slug}`}
    >
      <div
        className={`relative overflow-hidden rounded-3xl h-full ${
          isLarge ? 'min-h-[380px] md:min-h-[440px]' : 'min-h-[300px] md:min-h-[340px]'
        }`}
      >
        {/* Background image */}
        <img
          src={cat.image}
          alt={cat.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
          loading="lazy"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500" />

        {/* Gold accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#967C55] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Huge index number watermark */}
        <span
          className="absolute -right-2 -top-4 text-[8rem] md:text-[10rem] font-bold text-white/[0.06] leading-none select-none pointer-events-none"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Frame count badge */}
        <div className="absolute top-5 left-5">
          <span
            className="inline-block bg-white/15 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {cat.frame_count} Frames
          </span>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <h3
            className={`text-white font-semibold mb-2 tracking-tight ${
              isLarge ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
            }`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {cat.name}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed mb-4 max-w-xs line-clamp-2">
            {cat.description}
          </p>

          {/* CTA row */}
          <div className="flex items-center justify-between">
            <span
              className="text-[#D4B88C] text-sm font-semibold tracking-wide group-hover:tracking-wider transition-all duration-300"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Explore
            </span>
            <div className="w-10 h-10 rounded-full bg-[#967C55] flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const CatalogSection = ({ categories }) => {
  const top = categories.slice(0, 2);
  const bottom = categories.slice(2, 6);

  return (
    <section id="catalog" data-testid="catalog-section" className="py-24 md:py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
        >
          <div>
            <p className="overline mb-4">Our Collection</p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-snug"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Curated for <span className="text-[#967C55]">Every Vision</span>
            </h2>
          </div>
          <p className="text-[#5A5A5A] text-sm md:text-base max-w-sm md:text-right leading-relaxed">
            Precision-fitted using our special automatic machines. Browse {categories.length} premium categories.
          </p>
        </motion.div>

        {/* Row 1 — Two large symmetric cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-5 md:mb-6">
          {top.map((cat, i) => (
            <CategoryCard key={cat.slug} cat={cat} index={i} variant="large" />
          ))}
        </div>

        {/* Row 2 — Four equal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {bottom.map((cat, i) => (
            <CategoryCard key={cat.slug} cat={cat} index={i + 2} variant="default" />
          ))}
        </div>
      </div>
    </section>
  );
};
