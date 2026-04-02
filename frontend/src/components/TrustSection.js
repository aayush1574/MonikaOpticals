import { motion } from 'framer-motion';
import { Award, Users, Glasses, Clock } from 'lucide-react';

const stats = [
  { icon: Clock, number: '45+', label: 'Years of Trust', desc: 'Monika Opticals, Vidisha since 1980' },
  { icon: Users, number: '50K+', label: 'Happy Customers', desc: 'Families trust us with their vision' },
  { icon: Glasses, number: '200+', label: 'Frame Styles', desc: 'Curated from top global brands' },
  { icon: Award, number: '0', label: 'Error Rate', desc: 'Automatic machine precision' },
];

export const TrustSection = () => {
  return (
    <section data-testid="trust-section" className="py-24 md:py-32 bg-[#1A1A1A] text-white relative overflow-hidden">
      {/* Subtle grain overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.2em] text-xs font-bold text-[#967C55] mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Why Choose Us
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Built on <span className="text-[#967C55]">Trust</span> & Precision
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
              data-testid={`trust-stat-${i}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#967C55]/20 flex items-center justify-center mx-auto mb-5">
                <stat.icon className="w-6 h-6 text-[#967C55]" />
              </div>
              <div className="stat-number text-4xl md:text-5xl lg:text-6xl mb-2">{stat.number}</div>
              <h4 className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>{stat.label}</h4>
              <p className="text-white/50 text-xs">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
