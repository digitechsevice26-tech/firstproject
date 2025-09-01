import React, { useState, useEffect, useRef } from "react";

function GoogleStreetView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const searchRef = useRef(null);
  const categoriesRef = useRef(null);

  // All categories
  const categories = [
    { id: "food1", name: "FOOD1" },
    { id: "food2", name: "FOOD2" },
    { id: "hotel_stay", name: "HOTEL/STAY" },
    { id: "pg", name: "PG" },
    { id: "clothing", name: "CLOTHING" },
    { id: "clothing_rental", name: "CLOTHING RENTAL" },
    { id: "cloth_accessories", name: "CLOTH ACCESSORIES" },
    { id: "textile_big", name: "TEXTILE BIG" },
    { id: "tailor", name: "TAILOR" },
    { id: "furniture", name: "FURNITURE" },
    { id: "sport", name: "SPORT" },
    { id: "stationary", name: "STATIONARY" },
    { id: "flower", name: "FLOWER" },
    { id: "pet", name: "PET" },
    { id: "cosmetics", name: "COSMETICS" },
    { id: "real_estate", name: "REAL ESTATE" },
    { id: "grocery", name: "GROCERY" },
    { id: "mobile", name: "MOBILE" },
    { id: "laptop", name: "LAPTOP" },
    { id: "electronics", name: "ELECTRONICS" },
    { id: "electrical", name: "ELECTRICAL" },
    { id: "battery", name: "BATTERY" },
    { id: "motors", name: "MOTORS" },
    { id: "plumbing", name: "PLUMBING" },
    { id: "jewellery", name: "JEWELLERY" },
    { id: "wood", name: "WOOD" },
    { id: "building_materials", name: "BUILDING MATERIALS" },
    { id: "other_building_materials", name: "OTHER BUILDING MATERIALS" },
    { id: "bike", name: "BIKE" },
    { id: "car", name: "CAR" },
    { id: "cycle", name: "CYCLE" },
    { id: "hospital", name: "HOSPITAL" },
    { id: "dental", name: "DENTAL" },
    { id: "diagnostics", name: "DIAGNOSTICS" },
    { id: "medicals", name: "MEDICALS" },
    { id: "overseas_consultancy", name: "OVERSEAS CONSULTANCY" },
    { id: "institute", name: "INSTITUTE" },
    { id: "art_school_fitness", name: "ART SCHOOL/FITNESS" },
    { id: "art_accessories", name: "ART ACCESSORIES" },
    { id: "net_mesh", name: "NET/MESH" },
    { id: "interiors_house", name: "INTERIORS/HOUSE RELATED" },
    { id: "metals_crafts", name: "METALS/CRAFTS" },
    { id: "saloon", name: "SALOON" },
    { id: "service_centers", name: "SERVICE CENTERS" },
    { id: "bags_trolleys", name: "BAGS/TROLLEYS" },
    { id: "tattoo", name: "TATTOO" },
    { id: "opticals", name: "OPTICALS" },
    { id: "packaging_products", name: "PACKAGING PRODUCTS" },
    { id: "pesticides", name: "PESTICIDES" },
    { id: "plastic_items", name: "PLASTIC ITEMS" },
    { id: "power_tools", name: "POWER TOOLS" },
    { id: "printing", name: "PRINTING" },
    { id: "hoardings_business", name: "HOARDINGS BUSINESS" },
    { id: "wedding_cards", name: "WEDDING CARDS" },
    { id: "premium_gift_shop", name: "PREMIUM GIFT SHOP" },
    { id: "event_management", name: "EVENT MANAGEMENT" },
    { id: "trophies", name: "TROPHIES" },
    { id: "tyre", name: "TYRE" },
    { id: "tarpaulin", name: "TARPAULIN" },
    { id: "toy", name: "TOY" },
    { id: "tours_travels", name: "TOURS AND TRAVELS" },
    { id: "trust_ngo", name: "TRUST/NGO" },
    { id: "umbrella", name: "UMBRELLA" },
    { id: "water_purifiers", name: "WATER PURIFIERS" },
    { id: "watch", name: "WATCH" },
    { id: "washing_machine", name: "WASHING MACHINE" },
    { id: "weighing_machine", name: "WEIGHING MACHINE" },
    { id: "xerox", name: "XEROX" },
    { id: "laundry", name: "LAUNDRY" },
    { id: "marbles_granites", name: "MARBLES/GRANITES" },
    { id: "sanitary_tiles", name: "SANITARY AND TILES" },
    { id: "key_makers", name: "KEY MAKERS" },
    { id: "personalities", name: "PERSONALITIES" },
    { id: "meat", name: "MEAT" },
    { id: "astrology", name: "ASTROLOGY" },
    { id: "plant_nursery", name: "PLANT NURSERY" },
    { id: "vinyl_sticker", name: "VINYL STICKER/STICKERING" },
    { id: "footwear", name: "FOOTWEAR" },
    { id: "bottle", name: "BOTTLE" },
    { id: "courier_service", name: "COURIER SERVICE" },
    { id: "photostudio", name: "PHOTOSTUDIO" },
    { id: "money_exchange", name: "MONEY EXCHANGE" },
    { id: "coffee_powder", name: "COFFEE POWDER" }
  ];

  // Complete business data with all categories and subcategories
  const businessData = {
    food1: {
      title: "FOOD1",
      subcategories: [
        {
          name: "RESTAURANT",
          businesses: [
            { name: "Udupy Aradhya", link: "https://maps.google.com" },
            { name: "Ishta", link: "https://maps.google.com" },
            { name: "Golden Dynasty", link: "https://maps.google.com" }
          ]
        },
        {
          name: "CAFE",
          businesses: [
            { name: "Ruchika's Cafe", link: "https://maps.google.com" },
            { name: "Van Very Cafe", link: "https://maps.google.com" }
          ]
        },
        {
          name: "BIRIYANI",
          businesses: [
            { name: "RR Biriyani", link: "https://maps.google.com" },
            { name: "3AM Biriyani", link: "https://maps.google.com" }
          ]
        },
        {
          name: "VEGETABLE AND FRUITS",
          businesses: [
            { name: "Fruits and Veg", link: "https://maps.google.com" }
          ]
        },
        {
          name: "CAKE",
          businesses: [
            { name: "Face Cake", link: "https://maps.google.com" },
            { name: "Cake Lake", link: "https://maps.google.com" }
          ]
        },
        {
          name: "TEA TIME",
          businesses: [
            { name: "Tea Bench", link: "https://maps.google.com" },
            { name: "Tea Bunk", link: "https://maps.google.com" },
            { name: "Tea Day", link: "https://maps.google.com" }
          ]
        },
        {
          name: "COFFEE POWDER",
          businesses: [
            { name: "Coffee Powder Shop", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    food2: {
      title: "FOOD2",
      subcategories: [
        {
          name: "PAAN",
          businesses: [
            { name: "The Paan Shop", link: "https://maps.google.com" }
          ]
        },
        {
          name: "PICKLE",
          businesses: [
            { name: "Pickle Shop", link: "https://maps.google.com" }
          ]
        },
        {
          name: "SWEET",
          businesses: [
            { name: "Agarwal Sweets", link: "https://maps.google.com" }
          ]
        },
        {
          name: "BAKERY",
          businesses: [
            { name: "Iyengar Bakery", link: "https://maps.google.com" },
            { name: "Local Bakery", link: "https://maps.google.com" }
          ]
        },
        {
          name: "JUICE",
          businesses: [
            { name: "Fruit Juice Bar", link: "https://maps.google.com" }
          ]
        },
        {
          name: "SNACKS",
          businesses: [
            { name: "Snacks Corner", link: "https://maps.google.com" },
            { name: "Healthy Snacks", link: "https://maps.google.com" }
          ]
        },
        {
          name: "ICE CREAM",
          businesses: [
            { name: "Ice Cream World", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    hotel_stay: {
      title: "HOTEL/STAY",
      subcategories: [
        {
          name: "Small Lodge",
          businesses: [
            { name: "Budget Lodge", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Posh Lodge",
          businesses: [
            { name: "Embassy Grand", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Home Stay",
          businesses: [
            { name: "Linga Classic Homestay", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Old Age Home",
          businesses: [
            { name: "Aarambh Life Home", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    pg: {
      title: "PG",
      subcategories: [
        {
          name: "Mens PG",
          businesses: [
            { name: "RSR Luxury PG for Gents", link: "https://maps.google.com" },
            { name: "Gents PG", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Ladies PG",
          businesses: [
            { name: "Ladies PG", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    clothing: {
      title: "CLOTHING",
      subcategories: [
        {
          name: "SILK AND SAREE",
          businesses: [
            { name: "Pattupura", link: "https://maps.google.com" },
            { name: "M Linku Sah Silks", link: "https://maps.google.com" },
            { name: "Aaradhana The Silk Temple", link: "https://maps.google.com" },
            { name: "Keerthana Silks Sarees", link: "https://maps.google.com" }
          ]
        },
        {
          name: "BOUTIQUE",
          businesses: [
            { name: "Designer Boutique", link: "https://maps.google.com" }
          ]
        },
        {
          name: "MENS WEAR",
          businesses: [
            { name: "Mens Wear Store", link: "https://maps.google.com" }
          ]
        },
        {
          name: "MENS MATERIALS",
          businesses: [
            { name: "Urbangents Fabrics", link: "https://maps.google.com" },
            { name: "Mens Fabrics", link: "https://maps.google.com" }
          ]
        },
        {
          name: "KIDS WEAR",
          businesses: [
            { name: "Chhota Closet", link: "https://maps.google.com" }
          ]
        },
        {
          name: "UNIFORM",
          businesses: [
            { name: "Uniform Shop", link: "https://maps.google.com" },
            { name: "Sonu Fashion", link: "https://maps.google.com" }
          ]
        },
        {
          name: "INNER GARMENTS",
          businesses: [
            { name: "Inner Wear Store", link: "https://maps.google.com" },
            { name: "Jockey Showroom", link: "https://maps.google.com" }
          ]
        },
        {
          name: "JOCKEY",
          businesses: [
            { name: "Jockey Mens and Womens Wear", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    clothing_rental: {
      title: "CLOTHING RENTAL",
      subcategories: [
        {
          name: "BRIDAL RENTAL",
          businesses: [
            { name: "Khaleesi Premium Bridal Rentals", link: "https://maps.google.com" }
          ]
        },
        {
          name: "DANCE COSTUME RENTAL",
          businesses: [
            { name: "The Costume Factory", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    cloth_accessories: {
      title: "CLOTH ACCESSORIES",
      subcategories: [
        {
          name: "ONLY THREAD SHOP",
          businesses: [
            { name: "Thread & Thimble", link: "https://maps.google.com" }
          ]
        },
        {
          name: "ONLY BUTTONS",
          businesses: [
            { name: "Button Bazaar", link: "https://maps.google.com" },
            { name: "Button Store", link: "https://maps.google.com" }
          ]
        },
        {
          name: "CUT PIECE MATERIALS",
          businesses: [
            { name: "Cut Piece Materials", link: "https://maps.google.com" }
          ]
        },
        {
          name: "ALL CLOTH ACCESSORIES",
          businesses: [
            { name: "S P Textiles", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    textile_big: {
      title: "TEXTILE BIG",
      subcategories: [
        {
          name: "Big Shopping Mall",
          businesses: [
            { name: "Textile Mall", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    tailor: {
      title: "TAILOR",
      subcategories: [
        {
          name: "Mens Tailor",
          businesses: [
            { name: "Stitch Style Gents Tailors", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Blazer",
          businesses: [
            { name: "Urban Lapel", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Ladies Tailor",
          businesses: [
            { name: "Femme Fit Tailors", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Blouse Retail",
          businesses: [
            { name: "Mehfil Blouse House", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Magam Work",
          businesses: [
            { name: "Magam Work Shop", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Embroidery Shop",
          businesses: [
            { name: "Pure Roots Organics", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    furniture: {
      title: "FURNITURE",
      subcategories: [
        {
          name: "Furniture",
          businesses: [
            { name: "Anakkallumkal Furniture", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Office Chair and Table",
          businesses: [
            { name: "Office Furniture Store", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Mattress",
          businesses: [
            { name: "Mattress World", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Sofa",
          businesses: [
            { name: "Sofaluxe Studio", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    sport: {
      title: "SPORT",
      subcategories: [
        {
          name: "Sport Coaching",
          businesses: [
            { name: "Sports Club", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Sport Shop",
          businesses: [
            { name: "Swagat Sports and Musicals", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    stationary: {
      title: "STATIONARY",
      subcategories: [
        {
          name: "Retail",
          businesses: [
            { name: "V Mart Books and Stationery", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Wholesale",
          businesses: [
            { name: "Wholesale Stationery", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Pen",
          businesses: [
            { name: "The Signature Inkwell Co", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Folders and Diary",
          businesses: [
            { name: "Leatherleaf Stationers", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    flower: {
      title: "FLOWER",
      subcategories: [
        {
          name: "Flower Shop",
          businesses: [
            { name: "Vijayaranga Pushpa Nilayam", link: "https://maps.google.com" },
            { name: "RJ Flower Decoration", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Only Bouquets",
          businesses: [
            { name: "Bloomwell Flowers", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    pet: {
      title: "PET",
      subcategories: [
        {
          name: "Pet Shop/Aquarium/Birds",
          businesses: [
            { name: "KSA Blue Star Aquarium", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Pet Grooming",
          businesses: [
            { name: "Pet Spa", link: "https://maps.google.com" },
            { name: "Pet Grooming Center", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Pet Boarding",
          businesses: [
            { name: "Tailtown Boarding", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Pet Clinic",
          businesses: [
            { name: "Pet Clinic", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    cosmetics: {
      title: "COSMETICS",
      subcategories: [
        {
          name: "Cosmetic Shop",
          businesses: [
            { name: "Cosmetics Store", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Fancy Shop",
          businesses: [
            { name: "Gaurav Fancy Store", link: "https://maps.google.com" },
            { name: "Shringar Novelty", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Bangle",
          businesses: [
            { name: "Vannam Bangles", link: "https://maps.google.com" }
          ]
        },
        {
          name: "One Gram Gold",
          businesses: [
            { name: "One Gram Gold Shop", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Imitation Jewel",
          businesses: [
            { name: "Riwaayat Jewels", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Gift",
          businesses: [
            { name: "Bhagavathi Gift House", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    real_estate: {
      title: "REAL ESTATE",
      subcategories: [
        {
          name: "Agent",
          businesses: [
            { name: "Real Estate Agent", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Builders and Constructions",
          businesses: [
            { name: "Leafy Properties", link: "https://maps.google.com" },
            { name: "Vistacore Realtors", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    grocery: {
      title: "GROCERY",
      subcategories: [
        {
          name: "Kirana",
          businesses: [
            { name: "Eswar Rao Kirana Store", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Supermarket/Departmental Store",
          businesses: [
            { name: "Evergreen Market", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Rice Traders",
          businesses: [
            { name: "Naidu Rice Traders", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Pickles",
          businesses: [
            { name: "Vankiees Pickles", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Only Jaggery",
          businesses: [
            { name: "The Jaggery House", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Dry Fruit",
          businesses: [
            { name: "Pure Roots Organics", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    mobile: {
      title: "MOBILE",
      subcategories: [
        {
          name: "Mobile Retail Sales",
          businesses: [
            { name: "Mobile Store", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Mobile Service",
          businesses: [
            { name: "Mobile Service Center", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Mobile Accessories",
          businesses: [
            { name: "Sri Gayatri Mobile and Computers", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Wholesale",
          businesses: [
            { name: "Mobile Wholesale", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Apple",
          businesses: [
            { name: "Apple Store Valanchery", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Samsung",
          businesses: [
            { name: "Samsung Smart Store", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Mobile Spare Parts",
          businesses: [
            { name: "Mobile Spare Parts Shop", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    laptop: {
      title: "LAPTOP",
      subcategories: [
        {
          name: "Laptop Sales",
          businesses: [
            { name: "Gadget Junction", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Laptop Accessories",
          businesses: [
            { name: "Karthik Laptop World", link: "https://maps.google.com" },
            { name: "Laptop Accessories Store", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Laptop Service Centre",
          businesses: [
            { name: "Laptop Service Center", link: "https://maps.google.com" }
          ]
        },
        {
          name: "MacBook Sales and Service",
          businesses: [
            { name: "MacBook Service Center", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    electronics: {
      title: "ELECTRONICS",
      subcategories: [
        {
          name: "Remote Shop",
          businesses: [
            { name: "Remote Shop", link: "https://maps.google.com" }
          ]
        },
        {
          name: "AC Shop",
          businesses: [
            { name: "AC Service Center", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Electronic (Everything Mix)",
          businesses: [
            { name: "Raj Electronics", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Speakers",
          businesses: [
            { name: "Speakers World", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Home Appliances",
          businesses: [
            { name: "Home Appliances Store", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Prestige Home Appliance",
          businesses: [
            { name: "Prestige Home Appliance", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Gadgets",
          businesses: [
            { name: "Anandit Infotech India", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    electrical: {
      title: "ELECTRICAL",
      subcategories: [
        {
          name: "All Mix",
          businesses: [
            { name: "Classical Electricals", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Light",
          businesses: [
            { name: "Brightedge", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Switch",
          businesses: [
            { name: "Switches Shop", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Cables/Wires",
          businesses: [
            { name: "Voltline Cables", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Fan Shop",
          businesses: [
            { name: "The Fan Stop", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    battery: {
      title: "BATTERY",
      subcategories: [
        {
          name: "Battery",
          businesses: [
            { name: "SN Battery Point", link: "https://maps.google.com" },
            { name: "Sri Kalpana Battery Centre", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Solar Panel",
          businesses: [
            { name: "Solarnest Solutions", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Generators",
          businesses: [
            { name: "C M Generator Rent", link: "https://maps.google.com" }
          ]
        },
        {
          name: "UPS",
          businesses: [
            { name: "Powervault India", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    motors: {
      title: "MOTORS",
      subcategories: [
        {
          name: "Taro Pumps",
          businesses: [
            { name: "Taro Pumps", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Borewells",
          businesses: [
            { name: "Sunil Borewell", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Motor Pumps",
          businesses: [
            { name: "Sri Lakshmi Traders", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    plumbing: {
      title: "PLUMBING",
      subcategories: [
        {
          name: "Pipe and Cement",
          businesses: [
            { name: "Solidflow Supplies", link: "https://maps.google.com" }
          ]
        },
        {
          name: "SS Pipe Fittings",
          businesses: [
            { name: "SS Pipe Fittings Shop", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Piping Materials",
          businesses: [
            { name: "Piping Materials Store", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    jewellery: {
      title: "JEWELLERY",
      subcategories: [
        {
          name: "Gold",
          businesses: [
            { name: "Gold Jewellery Store", link: "https://maps.google.com" }
          ]
        },
        {
          name: "One Gram",
          businesses: [
            { name: "One Gram Gold Shop", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Only Silver",
          businesses: [
            { name: "Siya Fine Silver Jewellery", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Pearl and Gem",
          businesses: [
            { name: "My Pearl World", link: "https://maps.google.com" },
            { name: "Janatha Gems", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Silver Photo Frame",
          businesses: [
            { name: "Silver Photo Frame Shop", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Bangles",
          businesses: [
            { name: "Vannam Bangles", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Jewellery Tools",
          businesses: [
            { name: "Jewellery Tools Shop", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Gold Melting",
          businesses: [
            { name: "Gold Melting Shop", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    wood: {
      title: "WOOD",
      subcategories: [
        {
          name: "Timber",
          businesses: [
            { name: "Timbercore India", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Plywood",
          businesses: [
            { name: "Shree Navdurga Plywoods", link: "https://maps.google.com" },
            { name: "Nandana Glass and Plywoods", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Doors",
          businesses: [
            { name: "Cuirass Steel Doors", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Saw Mill",
          businesses: [
            { name: "Saw Mill", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    building_materials: {
      title: "BUILDING MATERIALS",
      subcategories: [
        {
          name: "Aluminium",
          businesses: [
            { name: "Century Aluminium", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Welding",
          businesses: [
            { name: "Welding Shop", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Engineering Stainless Steels",
          businesses: [
            { name: "Engineering Stainless Steel Shop", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Railing Work",
          businesses: [
            { name: "Best India Metals", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Iron and Steel Rod",
          businesses: [
            { name: "Century Aluminium Steel", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Cement",
          businesses: [
            { name: "Cement Store", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Steel Doors",
          businesses: [
            { name: "Steel Doors Shop", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Timber",
          businesses: [
            { name: "Timbercore India", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Bricks",
          businesses: [
            { name: "The Brick Store", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Glass",
          businesses: [
            { name: "The Glass Boutique", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    other_building_materials: {
      title: "OTHER BUILDING MATERIALS",
      subcategories: [
        {
          name: "Paint",
          businesses: [
            { name: "Sri Renuka Paints", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Hardware",
          businesses: [
            { name: "Hardware Planet Co", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Sanitary/Tiles",
          businesses: [
            { name: "Imperial Tile Depot", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Marbles",
          businesses: [
            { name: "Dakshinak Minerals LLP", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    bike: {
      title: "BIKE",
      subcategories: [
        {
          name: "Bike Repair/Mechanic",
          businesses: [
            { name: "Bike Service Point", link: "https://maps.google.com" },
            { name: "BZ Bike Zone", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Bike Service and Accessories",
          businesses: [
            { name: "Royal Bike Point", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Bike Consultancy and Finance",
          businesses: [
            { name: "Perfect Auto Consultants", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Bike Showroom",
          businesses: [
            { name: "Bikes World", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Bike Stickering",
          businesses: [
            { name: "Bike Stickering Shop", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Bike Rental",
          businesses: [
            { name: "Trailtrek Rentals", link: "https://maps.google.com" }
          ]
        },
        {
          name: "2nd Hand Bike",
          businesses: [
            { name: "Second Hand Bike Shop", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    car: {
      title: "CAR",
      subcategories: [
        {
          name: "Car Repair/Mechanic and Accessories",
          businesses: [
            { name: "First Choice Car Care", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Car Modifications",
          businesses: [
            { name: "Car Modification Centre", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Car Showroom",
          businesses: [
            { name: "Car Showroom", link: "https://maps.google.com" }
          ]
        },
        {
          name: "2nd Hand Car",
          businesses: [
            { name: "QZ Moto Hub", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Car Driving School",
          businesses: [
            { name: "Alfa School of Driving", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Car Rental",
          businesses: [
            { name: "Car Rental Service", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Car Consultancy and Finance",
          businesses: [
            { name: "Car Finance Consultant", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    cycle: {
      title: "CYCLE",
      subcategories: [
        {
          name: "Cycle Repair",
          businesses: [
            { name: "Cycle Repair Shop", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Cycle Sales",
          businesses: [
            { name: "Busnur Cycles", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    hospital: {
      title: "HOSPITAL",
      subcategories: [
        {
          name: "Multispeciality",
          businesses: [
            { name: "Deepam Hospital", link: "https://maps.google.com" },
            { name: "Ramakrishna Medical Centre", link: "https://maps.google.com" },
            { name: "Ponne Hospital", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Neuro",
          businesses: [
            { name: "Rockfort Neurocentre", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Pediatric",
          businesses: [
            { name: "Pediatric Clinic", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Eye Care",
          businesses: [
            { name: "Clearview Eye Center", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Dermatology",
          businesses: [
            { name: "Dr Pai Skin Hair Healthcare", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Psychiatric",
          businesses: [
            { name: "Psychiatrist Clinic", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Psychologist",
          businesses: [
            { name: "Innerpath Wellness", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Deaddiction",
          businesses: [
            { name: "Shanvi Mind Care", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Gynic",
          businesses: [
            { name: "Thambiran Maternity Hospital", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Ortho",
          businesses: [
            { name: "Venkatesh Ortho Trauma Hospital", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Homeopathy",
          businesses: [
            { name: "Homeopathy Clinic", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Anaesthesia",
          businesses: [
            { name: "Anaesthesia Clinic", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Ayurvedic",
          businesses: [
            { name: "Anaamaya Ayurveda", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Naturopathy",
          businesses: [
            { name: "Naturopathy Center", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Cardiologist",
          businesses: [
            { name: "Cardiology Clinic", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    dental: {
      title: "DENTAL",
      subcategories: [
        {
          name: "Dental Clinics",
          businesses: [
            { name: "Dr Richu Dental Care", link: "https://maps.google.com" },
            { name: "Dr Bens Mary Matha Dental", link: "https://maps.google.com" },
            { name: "Sri Akshaya Dental Care", link: "https://maps.google.com" },
            { name: "GG Dental", link: "https://maps.google.com" },
            { name: "Dr Reshmas Dental Care", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    diagnostics: {
      title: "DIAGNOSTICS",
      subcategories: [
        {
          name: "Diagnostic Centers",
          businesses: [
            { name: "Vivid Imaging and Diagnostics", link: "https://maps.google.com" },
            { name: "Diagnostic Center 2", link: "https://maps.google.com" },
            { name: "Diagnostic Center 3", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    medicals: {
      title: "MEDICALS",
      subcategories: [
        {
          name: "Medical Retail",
          businesses: [
            { name: "Bawa Medicals", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Medical Wholesale/Distributors",
          businesses: [
            { name: "Medical Wholesale", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Surgical Retail",
          businesses: [
            { name: "Surgical Store", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Surgical Distributor",
          businesses: [
            { name: "Medequip Wholesale", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Ayurvedic Medical",
          businesses: [
            { name: "Ayur Pharma", link: "https://maps.google.com" },
            { name: "Prakruti Ayurveda Store", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    overseas_consultancy: {
      title: "OVERSEAS CONSULTANCY",
      subcategories: [
        {
          name: "Universal Consultancy",
          businesses: [
            { name: "Universal Educational Consultancy", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    institute: {
      title: "INSTITUTE",
      subcategories: [
        {
          name: "School",
          businesses: [
            { name: "Hillview International School", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Preschool",
          businesses: [
            { name: "Iris Florets Pre School", link: "https://maps.google.com" },
            { name: "Wow Kids Prodigy Academy", link: "https://maps.google.com" },
            { name: "Dazzling Ducklings", link: "https://maps.google.com" }
          ]
        },
        {
          name: "College",
          businesses: [
            { name: "Sethu Institute of Technology", link: "https://maps.google.com" },
            { name: "Logos Institute of Management", link: "https://maps.google.com" },
            { name: "Datatec Skill Academy", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Computer Institute",
          businesses: [
            { name: "G Tec Computer Education", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    art_school_fitness: {
      title: "ART SCHOOL/FITNESS",
      subcategories: [
        {
          name: "Music Academy",
          businesses: [
            { name: "Music Academy", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Music Instrument Academy",
          businesses: [
            { name: "Music Instrument Academy", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Dance Academy",
          businesses: [
            { name: "JJ Dance Fusion", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Paint Academy",
          businesses: [
            { name: "Painting Academy", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Martial Arts/Karate",
          businesses: [
            { name: "Shinjidai Sports Academy", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Skating Coaching",
          businesses: [
            { name: "Rockers Speed Skating Academy", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Sports Coaching",
          businesses: [
            { name: "Sports Club", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Yoga Institute",
          businesses: [
            { name: "Shantiflow Yoga", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Gym",
          businesses: [
            { name: "The Professional Fitness Club", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    art_accessories: {
      title: "ART ACCESSORIES",
      subcategories: [
        {
          name: "Paint Accessories",
          businesses: [
            { name: "Painting Accessories Shop", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Music Instrument Sales",
          businesses: [
            { name: "Swagat Sports and Musicals", link: "https://maps.google.com" },
            { name: "The Music Vault", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Dance Dress Sales",
          businesses: [
            { name: "Dance Costume Shop", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Sports Items",
          businesses: [
            { name: "Rajendra Sports", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    net_mesh: {
      title: "NET/MESH",
      subcategories: [
        {
          name: "Mosquito Mesh",
          businesses: [
            { name: "Mosquito Net Shop", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Fishing Items",
          businesses: [
            { name: "The Fishermans Cove", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    interiors_house: {
      title: "INTERIORS/HOUSE RELATED",
      subcategories: [
        {
          name: "Interiors",
          businesses: [
            { name: "Interior Design Studio", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Chimneys",
          businesses: [
            { name: "Kitchen Chimneys Shop", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Home Decors",
          businesses: [
            { name: "Mannoor Home Decor", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Home Furnishing",
          businesses: [
            { name: "Home Furnishing Store", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Mattress",
          businesses: [
            { name: "Nocturne Mattresses", link: "https://maps.google.com" }
          ]
        },
        {
          name: "House Keeping Items",
          businesses: [
            { name: "House Utility Hub", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Curtains/Wallpaper",
          businesses: [
            { name: "Urban Blinds Beyond", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Kitchen",
          businesses: [
            { name: "Kitchen Ware Items", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    metals_crafts: {
      title: "METALS/CRAFTS",
      subcategories: [
        {
          name: "God Idols",
          businesses: [
            { name: "Ganesan Karpaka Vilas", link: "https://maps.google.com" },
            { name: "Maragatha Lakshmi Pathira", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Paathirai/Metals Shop",
          businesses: [
            { name: "Metal Shop", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Metal",
          businesses: [
            { name: "Best India Metals", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    saloon: {
      title: "SALOON",
      subcategories: [
        {
          name: "Mens Saloon Small",
          businesses: [
            { name: "Mens Salon", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Small Saloon",
          businesses: [
            { name: "Small Saloon", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Big Saloon",
          businesses: [
            { name: "Big Saloon", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    service_centers: {
      title: "SERVICE CENTERS",
      subcategories: [
        {
          name: "Mobile Service Center",
          businesses: [
            { name: "Mobile Service Center", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Laptop Service Center",
          businesses: [
            { name: "Laptop Service Centre", link: "https://maps.google.com" }
          ]
        },
        {
          name: "AC Service Center",
          businesses: [
            { name: "AC Service Center", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Washing Machine Service Center",
          businesses: [
            { name: "Washing Machine Service", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Electronic Items Service Center",
          businesses: [
            { name: "Electronic Service Center", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    bags_trolleys: {
      title: "BAGS/TROLLEYS",
      subcategories: [
        {
          name: "Bag Shops",
          businesses: [
            { name: "Velve Bags", link: "https://maps.google.com" },
            { name: "Nauti Crew", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    tattoo: {
      title: "TATTOO",
      subcategories: [
        {
          name: "Tattoo",
          businesses: [
            { name: "Tattoos World", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    opticals: {
      title: "OPTICALS",
      subcategories: [
        {
          name: "Optical Stores",
          businesses: [
            { name: "Bachewar Opticals", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    packaging_products: {
      title: "PACKAGING PRODUCTS",
      subcategories: [
        {
          name: "Sri Balaji Marketing",
          businesses: [
            { name: "Shree Balaji Marketing", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Paper Packaging",
          businesses: [
            { name: "Box Bulk Packaging", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    pesticides: {
      title: "PESTICIDES",
      subcategories: [
        {
          name: "Pesticide",
          businesses: [
            { name: "Agro Agency Pesticides", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    plastic_items: {
      title: "PLASTIC ITEMS",
      subcategories: [
        {
          name: "Plastic Items",
          businesses: [
            { name: "Plastic Items Shop", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    power_tools: {
      title: "POWER TOOLS",
      subcategories: [
        {
          name: "AM Power Tools",
          businesses: [
            { name: "New A M Power Tools", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    printing: {
      title: "PRINTING",
      subcategories: [
        {
          name: "Print Shops",
          businesses: [
            { name: "Print World", link: "https://maps.google.com" },
            { name: "Ink Pot", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    hoardings_business: {
      title: "HOARDINGS BUSINESS",
      subcategories: [
        {
          name: "Hoarding Business",
          businesses: [
            { name: "JK Commercials", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    wedding_cards: {
      title: "WEDDING CARDS",
      subcategories: [
        {
          name: "Wedding Cards",
          businesses: [
            { name: "Wedding Cards Shop", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    premium_gift_shop: {
      title: "PREMIUM GIFT SHOP",
      subcategories: [
        {
          name: "Gift Shops",
          businesses: [
            { name: "Maruthi Craft Gifts", link: "https://maps.google.com" },
            { name: "Bhagavathi Gift House", link: "https://maps.google.com" },
            { name: "Premium Gift Shop", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    event_management: {
      title: "EVENT MANAGEMENT",
      subcategories: [
        {
          name: "Namma Party House",
          businesses: [
            { name: "Nam Party Celebrations", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    trophies: {
      title: "TROPHIES",
      subcategories: [
        {
          name: "Trophy",
          businesses: [
            { name: "Trophycraft", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    tyre: {
      title: "TYRE",
      subcategories: [
        {
          name: "Tyre",
          businesses: [
            { name: "Tyre Shop", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    tarpaulin: {
      title: "TARPAULIN",
      subcategories: [
        {
          name: "Krishna Tarpaulin",
          businesses: [
            { name: "Shree Krishna Tarpaulin Polymer", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    toy: {
      title: "TOY",
      subcategories: [
        {
          name: "Toy",
          businesses: [
            { name: "Philips Green Shop", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    tours_travels: {
      title: "TOURS AND TRAVELS",
      subcategories: [
        {
          name: "Travel Agencies",
          businesses: [
            { name: "Tours and Travels", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    trust_ngo: {
      title: "TRUST/NGO",
      subcategories: [
        {
          name: "Charity/Trust/NGO",
          businesses: [
            { name: "M Venkat Naidu Memorial Trust", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    umbrella: {
      title: "UMBRELLA",
      subcategories: [
        {
          name: "Umbrella",
          businesses: [
            { name: "Sunsplash Umbrellas", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    water_purifiers: {
      title: "WATER PURIFIERS",
      subcategories: [
        {
          name: "Santosh Water Purifier",
          businesses: [
            { name: "Santosh Water Tech", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    watch: {
      title: "WATCH",
      subcategories: [
        {
          name: "Watch",
          businesses: [
            { name: "Watch Shop", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    washing_machine: {
      title: "WASHING MACHINE",
      subcategories: [
        {
          name: "Washing Machine",
          businesses: [
            { name: "Washing Machine Store", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    weighing_machine: {
      title: "WEIGHING MACHINE",
      subcategories: [
        {
          name: "Weighing Machine",
          businesses: [
            { name: "Weighing Machines Shop", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    xerox: {
      title: "XEROX",
      subcategories: [
        {
          name: "Xerox",
          businesses: [
            { name: "Xpress Xerox Hub", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    laundry: {
      title: "LAUNDRY",
      subcategories: [
        {
          name: "Laundry Services",
          businesses: [
            { name: "Laundry and Dry Cleaners", link: "https://maps.google.com" },
            { name: "Express Laundry", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    marbles_granites: {
      title: "MARBLES/GRANITES",
      subcategories: [
        {
          name: "Marbles and Granites",
          businesses: [
            { name: "Dakshinak Minerals LLP", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    sanitary_tiles: {
      title: "SANITARY AND TILES",
      subcategories: [
        {
          name: "Sanitary and Tiles",
          businesses: [
            { name: "Sanitary and Tiles Store", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    key_makers: {
      title: "KEY MAKERS",
      subcategories: [
        {
          name: "MH Key Maker",
          businesses: [
            { name: "M H Key Makers", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    personalities: {
      title: "PERSONALITIES",
      subcategories: [
        {
          name: "Chartered Accountant",
          businesses: [
            { name: "Jom Jose CA", link: "https://maps.google.com" },
            { name: "Chartered Accountant 2", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Lawyer",
          businesses: [
            { name: "T Vijay Advocate", link: "https://maps.google.com" },
            { name: "Lawyer 2", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Manager",
          businesses: [
            { name: "Manager", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Bank Manager",
          businesses: [
            { name: "Bank Manager", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Police",
          businesses: [
            { name: "Police Station", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Politician",
          businesses: [
            { name: "Political Office", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Free Lancer",
          businesses: [
            { name: "Freelancer", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Artists",
          businesses: [
            { name: "Artist Studio", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Actor",
          businesses: [
            { name: "Actor", link: "https://maps.google.com" }
          ]
        },
        {
          name: "Student",
          businesses: [
            { name: "Student", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    meat: {
      title: "MEAT",
      subcategories: [
        {
          name: "Meat",
          businesses: [
            { name: "Heritage Meats", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    astrology: {
      title: "ASTROLOGY",
      subcategories: [
        {
          name: "Bhagavathi Jyothishyalaya",
          businesses: [
            { name: "Kerala Sri Bhagavathi Jyothishyalaya", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    plant_nursery: {
      title: "PLANT NURSERY",
      subcategories: [
        {
          name: "Plant Nursery",
          businesses: [
            { name: "The Leafy Nest", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    vinyl_sticker: {
      title: "VINYL STICKER/STICKERING",
      subcategories: [
        {
          name: "Stickering",
          businesses: [
            { name: "Sticklab Creations", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    footwear: {
      title: "FOOTWEAR",
      subcategories: [
        {
          name: "Footwear",
          businesses: [
            { name: "Thomson Footwears", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    bottle: {
      title: "BOTTLE",
      subcategories: [
        {
          name: "Bottle",
          businesses: [
            { name: "Bottle World", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    courier_service: {
      title: "COURIER SERVICE",
      subcategories: [
        {
          name: "DTDC",
          businesses: [
            { name: "DTDC Neo Town", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    photostudio: {
      title: "PHOTOSTUDIO",
      subcategories: [
        {
          name: "Photo Studio",
          businesses: [
            { name: "Kaladalan Photo Studio", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    money_exchange: {
      title: "MONEY EXCHANGE",
      subcategories: [
        {
          name: "Money Exchange",
          businesses: [
            { name: "Money Exchange Center", link: "https://maps.google.com" }
          ]
        }
      ]
    },
    coffee_powder: {
      title: "COFFEE POWDER",
      subcategories: [
        {
          name: "Coffee Powder",
          businesses: [
            { name: "Coffee Powder Shop", link: "https://maps.google.com" }
          ]
        }
      ]
    }
  };

  // Filter categories based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredCategories([]);
      setShowSearchResults(false);
    } else {
      const filtered = categories.filter(category =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCategories(filtered);
      setShowSearchResults(true);
    }
  }, [searchQuery]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedBusiness(null);
    setSearchQuery("");
    setShowSearchResults(false);
  };

  const handleSearchResultClick = (category) => {
    setSearchQuery(category.name);
    setSelectedCategory(category.id);
    setShowSearchResults(false);
  };

  const handleSearch = () => {
    if (searchQuery) {
      const matchedCategory = categories.find(cat => 
        cat.name.toLowerCase() === searchQuery.toLowerCase()
      );
      if (matchedCategory) {
        setSelectedCategory(matchedCategory.id);
      }
      setShowSearchResults(false);
    }
  };

  const handleInputFocus = () => {
    if (searchQuery.trim() !== "") {
      setShowSearchResults(true);
    }
  };

  const handleBusinessClick = (businessLink) => {
    window.open(businessLink, '_blank');
  };

  // Scroll functions for categories
  const scrollCategories = (direction) => {
    if (categoriesRef.current) {
      const scrollAmount = 300;
      const currentScroll = categoriesRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      categoriesRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '30px',
        padding: '40px 20px',
        background: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)',
        borderRadius: '20px',
        color: 'white'
      }}>
        <div>
          <h1 style={{
            fontSize: '42px',
            fontWeight: '700',
            margin: '0 0 15px 0',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>Welcome to Google Street View</h1>
          <p style={{
            fontSize: '18px',
            opacity: '0.9',
            margin: '0',
            fontWeight: '300'
          }}>Explore businesses with immersive street view experiences</p>
        </div>
      </div>

      {/* Search Bar with Dropdown */}
      <div style={{
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div ref={searchRef} style={{
          position: 'relative',
          maxWidth: '600px',
          width: '100%'
        }}>
          <div style={{
            display: 'flex',
            width: '100%',
            background: 'white',
            borderRadius: '50px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            border: '2px solid #e1e5e9'
          }}>
            <input
              type="text"
              placeholder="Search for businesses, locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={handleInputFocus}
              style={{
                flex: 1,
                padding: '15px 25px',
                border: 'none',
                fontSize: '16px',
                outline: 'none',
                background: 'transparent'
              }}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button 
              onClick={handleSearch}
              style={{
                padding: '15px 20px',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                border: 'none',
                color: 'white',
                fontSize: '18px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >🔍</button>
          </div>
          
          {/* Search Results Dropdown */}
          {showSearchResults && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: '0',
              right: '0',
              background: 'white',
              borderRadius: '15px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
              zIndex: 10,
              maxHeight: '250px',
              overflowY: 'auto',
              marginTop: '8px',
              border: '2px solid #e1e5e9'
            }}>
              {filteredCategories.length > 0 ? (
                filteredCategories.map((category, index) => (
                  <div
                    key={category.id}
                    onClick={() => handleSearchResultClick(category)}
                    style={{
                      padding: '15px 25px',
                      cursor: 'pointer',
                      borderBottom: index === filteredCategories.length - 1 ? 'none' : '1px solid #f3f4f6',
                      transition: 'all 0.3s ease',
                      fontSize: '16px',
                      color: '#333'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, #f8fafc, #e2e8f0)';
                      e.target.style.color = '#667eea';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#333';
                    }}
                  >
                    {category.name}
                  </div>
                ))
              ) : (
                <div style={{
                  padding: '15px 25px',
                  color: '#6b7280',
                  fontStyle: 'italic',
                  textAlign: 'center'
                }}>
                  No categories found
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Categories with Horizontal Scroll and Navigation */}
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '40px',
        padding: '25px 60px',
        background: 'linear-gradient(90deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        borderRadius: '20px'
      }}>
        {/* Left Scroll Button */}
        <button
          onClick={() => scrollCategories('left')}
          style={{
            position: 'absolute',
            left: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white',
            border: 'none',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '24px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 5,
            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'linear-gradient(135deg, #5a67d8, #6b46a3)';
            e.target.style.transform = 'translateY(-50%) scale(1.1)';
            e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
            e.target.style.transform = 'translateY(-50%)';
            e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
          }}
        >
          ‹
        </button>

        {/* Categories Container */}
        <div 
          ref={categoriesRef}
          style={{
            display: 'flex',
            gap: '15px',
            overflowX: 'auto',
            padding: '10px 0',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            width: '100%'
          }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              style={{
                flexShrink: 0,
                padding: '12px 25px',
                border: `2px solid ${selectedCategory === category.id ? 'transparent' : '#e1e5e9'}`,
                background: selectedCategory === category.id ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'white',
                color: selectedCategory === category.id ? 'white' : '#555',
                borderRadius: '25px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                transform: selectedCategory === category.id ? 'translateY(-2px)' : 'none',
                boxShadow: selectedCategory === category.id ? '0 4px 15px rgba(102, 126, 234, 0.3)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== category.id) {
                  e.target.style.borderColor = '#667eea';
                  e.target.style.color = '#667eea';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category.id) {
                  e.target.style.borderColor = '#e1e5e9';
                  e.target.style.color = '#555';
                  e.target.style.transform = 'none';
                  e.target.style.boxShadow = 'none';
                }
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scrollCategories('right')}
          style={{
            position: 'absolute',
            right: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white',
            border: 'none',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '24px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 5,
            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'linear-gradient(135deg, #5a67d8, #6b46a3)';
            e.target.style.transform = 'translateY(-50%) scale(1.1)';
            e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
            e.target.style.transform = 'translateY(-50%)';
            e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
          }}
        >
          ›
        </button>
      </div>

      {/* Business Listings */}
      <div>
        {selectedCategory && businessData[selectedCategory] && (
          <div style={{ marginTop: '30px' }}>
            <h2 style={{
              fontSize: '32px',
              color: '#333',
              marginBottom: '30px',
              textAlign: 'center',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {businessData[selectedCategory].title}
            </h2>
            
            {/* Subcategories */}
            {businessData[selectedCategory].subcategories.map((subcategory, subIndex) => (
              <div key={subIndex} style={{
                marginBottom: '40px',
                background: 'white',
                borderRadius: '15px',
                padding: '25px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                border: '1px solid #e1e5e9'
              }}>
                <h3 style={{
                  fontSize: '22px',
                  color: '#667eea',
                  marginBottom: '20px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {subcategory.name}
                </h3>
                
                {/* Businesses Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '20px'
                }}>
                  {subcategory.businesses.map((business, businessIndex) => (
                    <div 
                      key={businessIndex}
                      onClick={() => handleBusinessClick(business.link)}
                      style={{
                        background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
                        borderRadius: '12px',
                        padding: '20px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        border: '2px solid transparent',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.2)';
                        e.currentTarget.style.borderColor = '#667eea';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
                        e.currentTarget.style.color = 'white';
                        const nameEl = e.currentTarget.querySelector('h4');
                        const iconEl = e.currentTarget.querySelector('div');
                        if (nameEl) nameEl.style.color = 'white';
                        if (iconEl) iconEl.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.borderColor = 'transparent';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #f8fafc, #e2e8f0)';
                        e.currentTarget.style.color = 'initial';
                        const nameEl = e.currentTarget.querySelector('h4');
                        const iconEl = e.currentTarget.querySelector('div');
                        if (nameEl) nameEl.style.color = '#333';
                        if (iconEl) iconEl.style.color = '#667eea';
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px'
                      }}>
                        <div style={{
                          width: '50px',
                          height: '50px',
                          background: 'linear-gradient(135deg, #667eea, #764ba2)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '24px',
                          color: 'white',
                          flexShrink: 0,
                          transition: 'all 0.3s ease'
                        }}>
                          🏪
                        </div>
                        <div style={{ flex: 1 }}>
                          <h4 style={{
                            margin: '0 0 5px 0',
                            fontSize: '18px',
                            fontWeight: '600',
                            color: '#333',
                            transition: 'color 0.3s ease'
                          }}>
                            {business.name}
                          </h4>
                          <div style={{
                            fontSize: '14px',
                            color: '#667eea',
                            fontWeight: '500',
                            transition: 'color 0.3s ease'
                          }}>
                            Click to view on Google Street View
                          </div>
                        </div>
                        <div style={{
                          fontSize: '20px',
                          color: '#667eea',
                          transition: 'all 0.3s ease'
                        }}>
                          →
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {!selectedCategory && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
            borderRadius: '20px',
            marginTop: '30px'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>🏢</div>
            <h3 style={{
              color: '#667eea',
              marginBottom: '15px',
              fontSize: '24px',
              fontWeight: '600'
            }}>Select a category above to explore businesses</h3>
            <p style={{
              color: '#666',
              fontSize: '16px',
              margin: '0'
            }}>Choose from restaurants, jewellers, hospitals, salons, and more!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GoogleStreetView;