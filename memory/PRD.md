# Vidisha Opticals - Premium Eyewear Catalog Website

## Problem Statement
Build a high-end, 3D-animated catalog website for a legacy optical store (45 years) in Vidisha. Light theme with glassmorphism UI, WhatsApp-based enquiry (no e-commerce), multiple glass categories with detail pages, brand carousel, precision machines section, trust stats, and Google Maps footer.

## Architecture
- **Frontend**: React + TailwindCSS + Framer Motion + react-fast-marquee + Shadcn UI
- **Backend**: FastAPI + MongoDB (Motor)
- **Routing**: React Router v7 (/ for home, /category/:slug for category pages)

## User Personas
- Local customers in Vidisha looking for eyewear
- Walk-in customers browsing catalog before visiting store
- WhatsApp-first buyers preferring chat over cart

## Core Requirements (Static)
- Light theme with glassmorphism cards
- 3D floating spectacles hero with bokeh particles
- Scrolling marquee banner
- 6 categories: Sunglasses, Reading, Computer, Sports, Kids, Contacts
- Category detail pages with frame cards
- WhatsApp enquiry (918109204075) on each frame
- Brand carousel (Ray-Ban, Oakley, Vogue, Titan, Fastrack, etc.)
- Precision machines section with parallax
- Trust stats (45+ years, 50K+ customers, 200+ frames, 0 error rate)
- Footer with Google Maps, contact info, SEO keywords

## What's Been Implemented (Apr 2, 2026)
- Full backend API: /api/categories, /api/frames, /api/frames/category/{slug}
- MongoDB seeding with 22 frames across 6 categories
- Complete homepage with all sections
- Category detail pages with frame cards
- WhatsApp deep-linking with pre-filled messages
- Responsive glassmorphism UI
- Animated hero, scroll reveals, parallax
- Brand marquee carousel
- Google Maps embed in footer
- Sticky navbar with category navigation

## Prioritized Backlog
### P0
- (completed) All core features

### P1
- User can add Google Maps embed with their actual store location
- Add actual product images from store inventory
- Admin panel for managing catalog (add/edit/remove frames)

### P2
- SEO meta tags per page
- Image optimization/lazy loading improvements
- WhatsApp floating button on all pages
- Customer testimonials section
- Eye test booking form
