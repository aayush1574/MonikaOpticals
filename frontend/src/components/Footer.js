import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const WHATSAPP_NUMBER = '918109204075';

export const Footer = () => {
  return (
    <footer data-testid="footer-section" className="bg-[#1A1A1A] text-white pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Vidisha <span className="text-[#967C55]">Opticals</span>
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Serving Vidisha with precision eyecare since 1980. Trusted by 50,000+ customers.
              Your vision, our legacy.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20I%20want%20to%20visit%20your%20store.`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-whatsapp-btn"
              className="whatsapp-btn text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-[#967C55] mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Sunglasses', 'Reading Glasses', 'Computer Glasses', 'Sports Eyewear', 'Kids Eyewear', 'Contact Lenses'].map((link) => (
                <li key={link}>
                  <a
                    href={`/category/${link.toLowerCase().replace(/\s+/g, '-').replace('glasses', '').replace('eyewear', '').replace('-', '').trim() || 'sunglasses'}`}
                    className="text-white/50 hover:text-[#967C55] text-sm transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-[#967C55] mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#967C55] mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">Main Market Road, Vidisha, Madhya Pradesh 464001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#967C55] flex-shrink-0" />
                <a href="tel:+918109204075" className="text-white/50 text-sm hover:text-[#967C55] transition-colors">+91 8109204075</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#967C55] flex-shrink-0" />
                <span className="text-white/50 text-sm">Mon - Sat: 10AM - 8PM</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#967C55] flex-shrink-0" />
                <span className="text-white/50 text-sm">info@vidishaopticals.com</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-[#967C55] mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Find Us
            </h4>
            <div className="map-container rounded-2xl overflow-hidden">
              <iframe
                title="Vidisha Opticals Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58764.37199372!2d77.77!3d23.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3977e0a99edffec7%3A0xaa93636e24e14499!2sVidisha%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="google-map"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Vidisha Opticals. All rights reserved.
          </p>
          <p className="text-white/30 text-xs text-center">
            Best Opticals in Vidisha | Premium Eyewear Store | Eye Testing in Vidisha | Spectacle Shop Near Me
          </p>
        </div>
      </div>
    </footer>
  );
};
