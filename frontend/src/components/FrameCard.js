import { motion } from 'framer-motion';
import { Badge } from '../components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '../components/ui/dialog';

const WHATSAPP_NUMBER = '918109204075';

export const FrameCard = ({ frame, index }) => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello! I am interested in the ${frame.name} (${frame.brand}) priced at Rs.${frame.price}. Please share more details.`
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="frame-card group"
      data-testid={`frame-card-${frame.id}`}
    >
      {/* Image with modal */}
      <Dialog>
        <DialogTrigger asChild>
          <div className="img-zoom cursor-pointer relative aspect-[4/3]">
            <img
              src={frame.image}
              alt={frame.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
              <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm text-[#1A1A1A] text-xs font-medium">
                {frame.brand}
              </Badge>
            </div>
            <div className="absolute bottom-4 right-4">
              <span className="bg-[#1A1A1A]/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Rs. {frame.price.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-3xl p-0 overflow-hidden rounded-2xl">
          <img
            src={frame.image}
            alt={frame.name}
            className="w-full h-auto max-h-[80vh] object-contain bg-[#F5F0E8]"
          />
        </DialogContent>
      </Dialog>

      {/* Details */}
      <div className="p-6">
        <h3
          className="text-lg font-semibold mb-1 group-hover:text-[#967C55] transition-colors"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {frame.name}
        </h3>
        <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">{frame.description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-5">
          {frame.features?.map((feat) => (
            <span
              key={feat}
              className="text-xs px-2.5 py-1 rounded-full bg-[#967C55]/10 text-[#967C55] font-medium"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {feat}
            </span>
          ))}
        </div>

        {/* WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          data-testid={`whatsapp-enquiry-${frame.id}`}
          className="whatsapp-btn w-full justify-center text-sm"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Enquire on WhatsApp
        </a>
      </div>
    </motion.div>
  );
};
