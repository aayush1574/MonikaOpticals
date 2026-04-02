import Marquee from 'react-fast-marquee';

const BANNER_ITEMS = [
  'Sunglasses',
  'Reading Glasses',
  'Computer Glasses',
  'Sports Eyewear',
  'Kids Eyewear',
  'Contact Lenses',
  'Premium Frames',
  'Blue-Light Protection',
  'Polarized Lenses',
  '45 Years of Trust',
];

export const TopBanner = () => {
  return (
    <div
      data-testid="top-banner"
      className="bg-[#1A1A1A] text-[#FBFBF9] py-3 relative z-50"
    >
      <Marquee speed={30} pauseOnHover gradient={false}>
        {BANNER_ITEMS.map((item, i) => (
          <span key={i} className="marquee-text mx-8 inline-flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#967C55] inline-block" />
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
};
