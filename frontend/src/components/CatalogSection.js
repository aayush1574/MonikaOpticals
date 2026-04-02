import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Eye } from 'lucide-react';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
};

export const CatalogSection = ({ categories }) => {
  const navigate = useNavigate();

  // Layout: first 2 cards large, rest normal
  const getGridSpan = (index) => {
    if (index === 0) return 'md:col-span-4 lg:col-span-7';
    if (index === 1) return 'md:col-span-4 lg:col-span-5';
    return 'md:col-span-4 lg:col-span-4';
  };

  return (
    <section id="catalog" data-testid="catalog-section" className="py-24 md:py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="overline mb-4">Our Collection</p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Curated for <span className="text-[#967C55]">Every Vision</span>
          </h2>
          <p className="text-[#5A5A5A] text-base mt-4 max-w-xl">
            Browse our premium categories. Each frame is precision-fitted using our special automatic machines.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-6 md:gap-8"
        >
          {categories.map((cat, index) => (
            <motion.div
              key={cat.slug}
              variants={item}
              className={`${getGridSpan(index)} group cursor-pointer`}
              onClick={() => navigate(`/category/${cat.slug}`)}
              data-testid={`category-card-${cat.slug}`}
            >
              <div className="glass-card rounded-2xl md:rounded-3xl overflow-hidden h-full flex flex-col">
                <div className="img-zoom relative aspect-[4/3]">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <h3 className="text-white text-xl md:text-2xl font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {cat.name}
                      </h3>
                      <p className="text-white/70 text-sm mt-1">{cat.frame_count} Frames</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#967C55] transition-colors duration-300">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <p className="text-[#5A5A5A] text-sm leading-relaxed">{cat.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-[#967C55] text-sm font-semibold group-hover:gap-3 transition-all duration-300" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    <Eye className="w-4 h-4" />
                    Explore Collection
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
