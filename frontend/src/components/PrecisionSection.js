import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Zap, Target, CheckCircle } from 'lucide-react';

const features = [
  { icon: Target, title: 'Zero-Error Precision', desc: 'Our automatic machines deliver micron-level accuracy on every lens cut.' },
  { icon: Zap, title: 'Instant Processing', desc: 'Advanced automation reduces turnaround from days to hours.' },
  { icon: Shield, title: 'Quality Assurance', desc: 'Every lens passes through multi-stage automated inspection.' },
  { icon: CheckCircle, title: 'Human + Machine', desc: 'Expert opticians oversee each automated process for perfect results.' },
];

export const PrecisionSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.05]);
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={sectionRef}
      data-testid="precision-section"
      className="py-24 md:py-32 bg-[#F5F0E8]/50 relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side with laser scan */}
          <motion.div
            style={{ scale: imageScale, y: imageY }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img
              src="https://static.prod-images.emergentagent.com/jobs/bf1dd7c4-4ebf-4eaa-9e24-8ae7d7881933/images/753738455a758d7533938e078caf83e6c204b4d25a28a70d66e84912965ee983.png"
              alt="Precision Lens Cutting Machine"
              className="w-full h-auto rounded-3xl"
              data-testid="precision-image"
            />
            <div className="laser-line" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F5F0E8]/60 to-transparent rounded-3xl" />
          </motion.div>

          {/* Text side */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overline mb-4"
            >
              Machines of Precision
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-snug mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Human Supervision.
              <br />
              <span className="text-[#967C55]">Machine Perfection.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#5A5A5A] text-base leading-relaxed mb-10 max-w-lg"
            >
              Our state-of-the-art automatic machines are the cornerstone of our commitment to quality.
              Each lens is precision-cut using computerized processes, verified by our expert opticians.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * (i + 3) }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#967C55]/10 flex items-center justify-center flex-shrink-0">
                    <feat.icon className="w-5 h-5 text-[#967C55]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>{feat.title}</h4>
                    <p className="text-[#5A5A5A] text-xs leading-relaxed">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
