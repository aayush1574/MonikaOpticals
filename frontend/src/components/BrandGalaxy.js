import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

const BRANDS = [
  { name: 'Ray-Ban', font: 'font-serif font-bold italic tracking-tight', size: 'text-2xl' },
  { name: 'Oakley', font: 'font-sans font-black tracking-tighter', size: 'text-2xl' },
  { name: 'Vogue', font: 'font-serif tracking-[0.3em] uppercase', size: 'text-xl' },
  { name: 'Titan Eyeplus', font: 'font-sans font-semibold tracking-tight', size: 'text-xl' },
  { name: 'Fastrack', font: 'font-sans font-bold italic', size: 'text-2xl' },
  { name: 'Bausch & Lomb', font: 'font-serif font-medium tracking-wide', size: 'text-lg' },
  { name: 'Johnson & Johnson', font: 'font-sans font-semibold', size: 'text-lg' },
  { name: 'Lenskart', font: 'font-sans font-black', size: 'text-2xl' },
  { name: 'Vincent Chase', font: 'font-serif italic tracking-wide', size: 'text-xl' },
  { name: 'John Jacobs', font: 'font-serif font-semibold tracking-tight', size: 'text-xl' },
];

export const BrandGalaxy = () => {
  return (
    <section data-testid="brand-galaxy-section" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="overline mb-4">Our Partners</p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Brands We <span className="text-[#967C55]">Carry</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee Row 1 */}
      <div className="mb-6">
        <Marquee speed={25} pauseOnHover gradient gradientColor="#FBFBF9" gradientWidth={100}>
          {BRANDS.map((brand, i) => (
            <div
              key={`r1-${i}`}
              data-testid={`brand-logo-${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="mx-10 md:mx-16 flex items-center justify-center h-24 brand-logo-item cursor-default select-none"
            >
              <span className={`${brand.font} ${brand.size} text-[#1A1A1A] whitespace-nowrap`}>
                {brand.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Marquee Row 2 (reversed) */}
      <Marquee speed={20} pauseOnHover direction="right" gradient gradientColor="#FBFBF9" gradientWidth={100}>
        {BRANDS.slice().reverse().map((brand, i) => (
          <div
            key={`r2-${i}`}
            className="mx-10 md:mx-16 flex items-center justify-center h-24 brand-logo-item cursor-default select-none"
          >
            <span className={`${brand.font} ${brand.size} text-[#1A1A1A]/60 whitespace-nowrap`}>
              {brand.name}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};
