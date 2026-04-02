from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

# Models
class Category(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    slug: str
    description: str
    image: str
    frame_count: int = 0

class Frame(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    brand: str
    price: float
    category_slug: str
    image: str
    description: str
    features: List[str] = []

# Seed Data
CATEGORIES = [
    {"name": "Sunglasses", "slug": "sunglasses", "description": "Premium UV-protected sunglasses for every style", "image": "https://images.unsplash.com/photo-1730855910633-686c5818fd23?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=600"},
    {"name": "Reading Glasses", "slug": "reading", "description": "Crystal-clear reading glasses for comfortable vision", "image": "https://images.unsplash.com/photo-1760337871482-9dd93e75fa88?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=600"},
    {"name": "Computer Glasses", "slug": "computer", "description": "Blue-light blocking glasses for digital wellness", "image": "https://images.pexels.com/photos/29799452/pexels-photo-29799452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {"name": "Sports Eyewear", "slug": "sports", "description": "Impact-resistant eyewear for active lifestyles", "image": "https://images.unsplash.com/photo-1685715481110-19db0a76de2f?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=600"},
    {"name": "Kids Eyewear", "slug": "kids", "description": "Durable and fun frames for young eyes", "image": "https://images.pexels.com/photos/5465835/pexels-photo-5465835.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {"name": "Contact Lenses", "slug": "contacts", "description": "Comfortable daily and monthly contact lenses", "image": "https://images.pexels.com/photos/8104329/pexels-photo-8104329.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
]

FRAMES = [
    # Sunglasses
    {"name": "Aviator Classic", "brand": "Ray-Ban", "price": 4500, "category_slug": "sunglasses", "image": "https://images.unsplash.com/photo-1730855910633-686c5818fd23?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=600", "description": "Timeless aviator silhouette with polarized lenses", "features": ["Polarized", "UV400", "Metal Frame"]},
    {"name": "Wayfarer Bold", "brand": "Ray-Ban", "price": 5200, "category_slug": "sunglasses", "image": "https://images.pexels.com/photos/34467082/pexels-photo-34467082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "description": "Bold wayfarer design with gradient lenses", "features": ["Gradient Lens", "UV400", "Acetate Frame"]},
    {"name": "Sport Shield", "brand": "Oakley", "price": 7800, "category_slug": "sunglasses", "image": "https://images.unsplash.com/photo-1685715481110-19db0a76de2f?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=600", "description": "Wraparound shield for maximum coverage", "features": ["Prizm Lens", "UV400", "O-Matter Frame"]},
    {"name": "Retro Round", "brand": "Vogue", "price": 3800, "category_slug": "sunglasses", "image": "https://images.pexels.com/photos/5465835/pexels-photo-5465835.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "description": "Vintage round frames with modern tint", "features": ["UV400", "Lightweight", "Spring Hinges"]},
    {"name": "Cat Eye Luxe", "brand": "Vogue", "price": 4200, "category_slug": "sunglasses", "image": "https://images.pexels.com/photos/10837793/pexels-photo-10837793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "description": "Elegant cat-eye design for sophisticated style", "features": ["UV400", "Acetate", "Gradient Tint"]},
    # Reading Glasses
    {"name": "Scholar Half-Rim", "brand": "Titan Eyeplus", "price": 2200, "category_slug": "reading", "image": "https://images.unsplash.com/photo-1760337871482-9dd93e75fa88?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=600", "description": "Lightweight half-rim for extended reading sessions", "features": ["Anti-Glare", "Lightweight", "Spring Hinges"]},
    {"name": "Classic Oval", "brand": "Titan Eyeplus", "price": 1800, "category_slug": "reading", "image": "https://images.pexels.com/photos/267495/pexels-photo-267495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "description": "Traditional oval frames for everyday reading", "features": ["Anti-Glare", "Flexible", "Nose Pads"]},
    {"name": "Modern Rectangle", "brand": "Fastrack", "price": 1500, "category_slug": "reading", "image": "https://images.unsplash.com/photo-1750557616137-4850b57bd4e9?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=600", "description": "Sleek rectangular design for a sharp look", "features": ["Anti-Glare", "TR-90 Frame", "Ultra-Light"]},
    {"name": "Vintage Round", "brand": "Ray-Ban", "price": 3200, "category_slug": "reading", "image": "https://images.pexels.com/photos/243781/pexels-photo-243781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "description": "Round frames with premium reading lenses", "features": ["Anti-Reflective", "Metal Frame", "Adjustable Pads"]},
    # Computer Glasses
    {"name": "Digital Shield Pro", "brand": "Fastrack", "price": 2800, "category_slug": "computer", "image": "https://images.pexels.com/photos/29799452/pexels-photo-29799452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "description": "Advanced blue-light blocking for screen protection", "features": ["Blue-Light Filter", "Anti-Fatigue", "Lightweight"]},
    {"name": "Zero Power Screen", "brand": "Titan Eyeplus", "price": 1900, "category_slug": "computer", "image": "https://images.unsplash.com/photo-1764740130608-c3cf7214ebfc?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=600", "description": "Zero power lenses with blue-cut technology", "features": ["Blue-Cut", "Anti-Glare", "Flexible Frame"]},
    {"name": "Gamer Edge", "brand": "Oakley", "price": 5500, "category_slug": "computer", "image": "https://images.unsplash.com/photo-1758552322632-ba288778c770?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=600", "description": "Performance eyewear for extended gaming sessions", "features": ["Prizm Gaming", "Blue-Light Filter", "Wraparound"]},
    {"name": "Office Comfort", "brand": "Vogue", "price": 2400, "category_slug": "computer", "image": "https://images.unsplash.com/photo-1574287045242-f64a19ee314c?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=600", "description": "All-day comfort for office professionals", "features": ["Blue-Cut", "Anti-Reflective", "Lightweight"]},
    # Sports
    {"name": "Trail Runner", "brand": "Oakley", "price": 8500, "category_slug": "sports", "image": "https://images.unsplash.com/photo-1685715481110-19db0a76de2f?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=600", "description": "Impact-resistant eyewear for trail running", "features": ["Shatterproof", "Non-Slip", "UV400"]},
    {"name": "Cycling Pro", "brand": "Oakley", "price": 9200, "category_slug": "sports", "image": "https://images.pexels.com/photos/34467082/pexels-photo-34467082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "description": "Aerodynamic design for cycling performance", "features": ["Prizm Road", "Ventilated", "Grippy Fit"]},
    {"name": "Cricket Shield", "brand": "Fastrack", "price": 3200, "category_slug": "sports", "image": "https://images.unsplash.com/photo-1730855910633-686c5818fd23?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=600", "description": "Wide-coverage shield for cricket players", "features": ["Impact Resistant", "Anti-Fog", "Adjustable"]},
    # Kids
    {"name": "Junior Explorer", "brand": "Titan Eyeplus", "price": 1200, "category_slug": "kids", "image": "https://images.pexels.com/photos/5465835/pexels-photo-5465835.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "description": "Colorful and durable frames for kids", "features": ["Flexible", "BPA-Free", "Scratch Resistant"]},
    {"name": "Teen Vibe", "brand": "Fastrack", "price": 1800, "category_slug": "kids", "image": "https://images.pexels.com/photos/10837793/pexels-photo-10837793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "description": "Trendy frames for teens and pre-teens", "features": ["Lightweight", "Spring Hinges", "Fun Colors"]},
    {"name": "Little Scholar", "brand": "Titan Eyeplus", "price": 950, "category_slug": "kids", "image": "https://images.pexels.com/photos/243781/pexels-photo-243781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "description": "Study-ready frames with anti-glare lenses", "features": ["Anti-Glare", "Flexible Temple", "Lightweight"]},
    # Contacts
    {"name": "Daily Fresh", "brand": "Bausch & Lomb", "price": 650, "category_slug": "contacts", "image": "https://images.pexels.com/photos/8104329/pexels-photo-8104329.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "description": "Daily disposable lenses for fresh comfort", "features": ["Daily Disposable", "High Moisture", "UV Block"]},
    {"name": "Monthly Comfort", "brand": "Bausch & Lomb", "price": 1200, "category_slug": "contacts", "image": "https://images.pexels.com/photos/27353348/pexels-photo-27353348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "description": "Monthly lenses for extended wear comfort", "features": ["Monthly", "Breathable", "Astigmatism Ready"]},
    {"name": "Color Pop", "brand": "Bausch & Lomb", "price": 900, "category_slug": "contacts", "image": "https://images.pexels.com/photos/5465835/pexels-photo-5465835.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "description": "Colored lenses for a stunning new look", "features": ["Color Enhancement", "UV Block", "Daily Wear"]},
]

async def seed_data():
    cat_count = await db.categories.count_documents({})
    if cat_count == 0:
        for cat in CATEGORIES:
            cat_obj = Category(**cat)
            doc = cat_obj.model_dump()
            await db.categories.insert_one(doc)
        logging.info("Seeded categories")
    
    frame_count = await db.frames.count_documents({})
    if frame_count == 0:
        for frame in FRAMES:
            frame_obj = Frame(**frame)
            doc = frame_obj.model_dump()
            await db.frames.insert_one(doc)
        logging.info("Seeded frames")

@app.on_event("startup")
async def startup():
    await seed_data()

# Routes
@api_router.get("/")
async def root():
    return {"message": "Vidisha Opticals API"}

@api_router.get("/categories")
async def get_categories():
    categories = await db.categories.find({}, {"_id": 0}).to_list(100)
    # Add frame counts
    for cat in categories:
        count = await db.frames.count_documents({"category_slug": cat["slug"]})
        cat["frame_count"] = count
    return categories

@api_router.get("/frames")
async def get_frames(category: Optional[str] = None):
    query = {}
    if category:
        query["category_slug"] = category
    frames = await db.frames.find(query, {"_id": 0}).to_list(100)
    return frames

@api_router.get("/frames/category/{category_slug}")
async def get_frames_by_category(category_slug: str):
    frames = await db.frames.find({"category_slug": category_slug}, {"_id": 0}).to_list(100)
    category = await db.categories.find_one({"slug": category_slug}, {"_id": 0})
    return {"category": category, "frames": frames}

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
