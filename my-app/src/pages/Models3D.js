import React, { useState, useEffect, useRef } from "react";

function Models3D() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const searchRef = useRef(null);
  const categoriesRef = useRef(null);

  // All 3D model categories
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

  // Complete 3D model data with empty links for all categories
  const modelData = {
    food1: {
      title: "FOOD1",
      subcategories: [
        {
          name: "RESTAURANT",
          models: [
            { name: "Udupy Aradhya", link: "#" },
            { name: "Ishta", link: "#" },
            { name: "Golden Dynasty", link: "#" }
          ]
        },
        {
          name: "CAFE",
          models: [
            { name: "Ruchika's Cafe", link: "#" },
            { name: "Van Very Cafe", link: "#" }
          ]
        },
        {
          name: "BIRIYANI",
          models: [
            { name: "RR Biriyani", link: "#" },
            { name: "3AM Biriyani", link: "#" }
          ]
        },
        {
          name: "VEGETABLE AND FRUITS",
          models: [
            { name: "Fruits and Veg", link: "#" }
          ]
        },
        {
          name: "CAKE",
          models: [
            { name: "Face Cake", link: "#" },
            { name: "Cake Lake", link: "#" }
          ]
        },
        {
          name: "TEA TIME",
          models: [
            { name: "Tea Bench", link: "#" },
            { name: "Tea Bunk", link: "#" },
            { name: "Tea Day", link: "#" }
          ]
        },
        {
          name: "COFFEE POWDER",
          models: [
            { name: "Ex2", link: "#" }
          ]
        }
      ]
    },
    food2: {
      title: "FOOD2",
      subcategories: [
        {
          name: "PAAN",
          models: [
            { name: "Paan", link: "#" }
          ]
        },
        {
          name: "PICKLE",
          models: [
            { name: "Pickle", link: "#" }
          ]
        },
        {
          name: "SWEET",
          models: [
            { name: "Agarwal Sweets", link: "#" }
          ]
        },
        {
          name: "BAKERY",
          models: [
            { name: "Iyengar Bakery", link: "#" },
            { name: "Bakery 2", link: "#" }
          ]
        },
        {
          name: "JUICE",
          models: [
            { name: "Fruit Juice", link: "#" }
          ]
        },
        {
          name: "SNACKS",
          models: [
            { name: "Snacks", link: "#" },
            { name: "Healthy Snacks", link: "#" }
          ]
        },
        {
          name: "ICE CREAM",
          models: [
            { name: "Ice Cream", link: "#" }
          ]
        }
      ]
    },
    hotel_stay: {
      title: "HOTEL/STAY",
      subcategories: [
        {
          name: "Small Lodge",
          models: [
            { name: "Small Lodge", link: "#" }
          ]
        },
        {
          name: "Posh Lodge",
          models: [
            { name: "Embassy Grand", link: "#" }
          ]
        },
        {
          name: "Home Stay",
          models: [
            { name: "Home Stay", link: "#" }
          ]
        },
        {
          name: "Old Age Home",
          models: [
            { name: "Old Age Home", link: "#" }
          ]
        }
      ]
    },
    pg: {
      title: "PG",
      subcategories: [
        {
          name: "Mens PG",
          models: [
            { name: "RSR Luxury PG for Gents", link: "#" },
            { name: "PG1", link: "#" }
          ]
        },
        {
          name: "Ladies PG",
          models: [
            { name: "Ladies PG", link: "#" }
          ]
        }
      ]
    },
    clothing: {
      title: "CLOTHING",
      subcategories: [
        {
          name: "SILK AND SAREE",
          models: [
            { name: "Ex1", link: "#" },
            { name: "Ex2", link: "#" },
            { name: "Ex3", link: "#" },
            { name: "Ex4", link: "#" }
          ]
        },
        {
          name: "BOUTIQUE",
          models: [
            { name: "Ex1", link: "#" }
          ]
        },
        {
          name: "MENS WEAR",
          models: [
            { name: "Mens Wear", link: "#" }
          ]
        },
        {
          name: "MENS MATERIALS",
          models: [
            { name: "Mens Material", link: "#" },
            { name: "Mens Fabrics", link: "#" }
          ]
        },
        {
          name: "KIDS WEAR",
          models: [
            { name: "Kids Wear", link: "#" }
          ]
        },
        {
          name: "UNIFORM",
          models: [
            { name: "Uniform", link: "#" },
            { name: "Sonu Fashion", link: "#" }
          ]
        },
        {
          name: "INNER GARMENTS",
          models: [
            { name: "Ex 1", link: "#" },
            { name: "Ex2", link: "#" }
          ]
        },
        {
          name: "JOCKEY",
          models: [
            { name: "Jockey", link: "#" }
          ]
        }
      ]
    },
    clothing_rental: {
      title: "CLOTHING RENTAL",
      subcategories: [
        {
          name: "BRIDAL RENTAL",
          models: [
            { name: "Ex1", link: "#" }
          ]
        },
        {
          name: "DANCE COSTUME RENTAL",
          models: [
            { name: "Dance Costume Rental", link: "#" }
          ]
        }
      ]
    },
    cloth_accessories: {
      title: "CLOTH ACCESSORIES",
      subcategories: [
        {
          name: "ONLY THREAD SHOP",
          models: [
            { name: "Thread", link: "#" }
          ]
        },
        {
          name: "ONLY BUTTONS",
          models: [
            { name: "Button", link: "#" },
            { name: "Button2", link: "#" }
          ]
        },
        {
          name: "CUT PIECE MATERIALS",
          models: [
            { name: "Cut Piece Materials", link: "#" }
          ]
        },
        {
          name: "ALL CLOTH ACCESSORIES",
          models: [
            { name: "Ex1", link: "#" }
          ]
        }
      ]
    },
    textile_big: {
      title: "TEXTILE BIG",
      subcategories: [
        {
          name: "Big Shopping Mall",
          models: [
            { name: "Big Shopping Mall", link: "#" }
          ]
        }
      ]
    },
    tailor: {
      title: "TAILOR",
      subcategories: [
        {
          name: "Mens Tailor",
          models: [
            { name: "Tailor", link: "#" }
          ]
        },
        {
          name: "Blazer",
          models: [
            { name: "Only Blazers/Suits", link: "#" }
          ]
        },
        {
          name: "Ladies Tailor",
          models: [
            { name: "Tailor", link: "#" }
          ]
        },
        {
          name: "Blouse Retail",
          models: [
            { name: "Blouse", link: "#" }
          ]
        },
        {
          name: "Magam Work",
          models: [
            { name: "Magam Work", link: "#" }
          ]
        },
        {
          name: "Embroidery Shop",
          models: [
            { name: "Ex1", link: "#" }
          ]
        }
      ]
    },
    furniture: {
      title: "FURNITURE",
      subcategories: [
        {
          name: "Furniture",
          models: [
            { name: "Anamkullam", link: "#" }
          ]
        },
        {
          name: "Office Chair and Table",
          models: [
            { name: "Office", link: "#" }
          ]
        },
        {
          name: "Mattress",
          models: [
            { name: "Ex1", link: "#" }
          ]
        },
        {
          name: "Sofa",
          models: [
            { name: "Ex1", link: "#" }
          ]
        }
      ]
    },
    sport: {
      title: "SPORT",
      subcategories: [
        {
          name: "Sport Coaching",
          models: [
            { name: "Sports", link: "#" }
          ]
        },
        {
          name: "Sport Shop",
          models: [
            { name: "Sports and Music", link: "#" }
          ]
        }
      ]
    },
    stationary: {
      title: "STATIONARY",
      subcategories: [
        {
          name: "Retail",
          models: [
            { name: "Ex 1", link: "#" }
          ]
        },
        {
          name: "Wholesale",
          models: [
            { name: "Wholesale", link: "#" }
          ]
        },
        {
          name: "Pen",
          models: [
            { name: "Pen", link: "#" }
          ]
        },
        {
          name: "Folders and Diary",
          models: [
            { name: "Diary", link: "#" }
          ]
        }
      ]
    },
    flower: {
      title: "FLOWER",
      subcategories: [
        {
          name: "Ex 1",
          models: [
            { name: "Vijayaranga Pushpa Nilayam", link: "#" }
          ]
        },
        {
          name: "Ex 2",
          models: [
            { name: "Flower", link: "#" }
          ]
        },
        {
          name: "Only Bouquets",
          models: [
            { name: "Bouquets", link: "#" }
          ]
        }
      ]
    },
    pet: {
      title: "PET",
      subcategories: [
        {
          name: "Pet Shop/Aquarium/Birds",
          models: [
            { name: "KSA Aquarium", link: "#" }
          ]
        },
        {
          name: "Pet Grooming",
          models: [
            { name: "Pet Grooming", link: "#" },
            { name: "Pet Grooming 2", link: "#" }
          ]
        },
        {
          name: "Pet Boarding",
          models: [
            { name: "Pet Boarding", link: "#" },
            { name: "Boarding", link: "#" }
          ]
        },
        {
          name: "Pet Clinic",
          models: [
            { name: "Pet Clinic", link: "#" }
          ]
        }
      ]
    },
    cosmetics: {
      title: "COSMETICS",
      subcategories: [
        {
          name: "Cosmetic Shop",
          models: [
            { name: "Cosmetics", link: "#" }
          ]
        },
        {
          name: "Fancy Shop",
          models: [
            { name: "Fancy", link: "#" },
            { name: "Fancy/Novelty Big", link: "#" }
          ]
        },
        {
          name: "Bangle",
          models: [
            { name: "Bangle", link: "#" }
          ]
        },
        {
          name: "One Gram Gold",
          models: [
            { name: "One Gram Gold", link: "#" }
          ]
        },
        {
          name: "Imitation Jewel",
          models: [
            { name: "Riyawat Jewel", link: "#" }
          ]
        },
        {
          name: "Gift",
          models: [
            { name: "Bhagavathi Gift Shop", link: "#" }
          ]
        }
      ]
    },
    real_estate: {
      title: "REAL ESTATE",
      subcategories: [
        {
          name: "Agent",
          models: [
            { name: "Agent", link: "#" }
          ]
        },
        {
          name: "Builders and Constructions",
          models: [
            { name: "Leafy Property", link: "#" },
            { name: "Real Estate Office", link: "#" }
          ]
        }
      ]
    },
    grocery: {
      title: "GROCERY",
      subcategories: [
        {
          name: "Kirana",
          models: [
            { name: "Dummy", link: "#" }
          ]
        },
        {
          name: "Supermarket/Departmental Store",
          models: [
            { name: "Super Market", link: "#" }
          ]
        },
        {
          name: "Rice Traders",
          models: [
            { name: "Rice Traders", link: "#" }
          ]
        },
        {
          name: "Pickles",
          models: [
            { name: "Pickle", link: "#" }
          ]
        },
        {
          name: "Only Jaggery",
          models: [
            { name: "Only Jaggery Wholesale", link: "#" }
          ]
        },
        {
          name: "Dry Fruit",
          models: [
            { name: "Dry Fruit", link: "#" }
          ]
        }
      ]
    },
    mobile: {
      title: "MOBILE",
      subcategories: [
        {
          name: "Mobile Retail Sales",
          models: [
            { name: "Mobile Retail Sales", link: "#" }
          ]
        },
        {
          name: "Mobile Service",
          models: [
            { name: "Mobile Service", link: "#" }
          ]
        },
        {
          name: "Mobile Accessories",
          models: [
            { name: "Gayathri Mobile Accessories", link: "#" }
          ]
        },
        {
          name: "Wholesale",
          models: [
            { name: "Wholesale", link: "#" }
          ]
        },
        {
          name: "Apple",
          models: [
            { name: "Apple Store", link: "#" }
          ]
        },
        {
          name: "Samsung",
          models: [
            { name: "Samsung", link: "#" }
          ]
        },
        {
          name: "Mobile Spare Parts",
          models: [
            { name: "Mobile Spare Parts", link: "#" }
          ]
        }
      ]
    },
    laptop: {
      title: "LAPTOP",
      subcategories: [
        {
          name: "Laptop Sales",
          models: [
            { name: "Gadget Junction", link: "#" }
          ]
        },
        {
          name: "Laptop Accessories",
          models: [
            { name: "Karthik Laptop", link: "#" },
            { name: "Accessories", link: "#" }
          ]
        },
        {
          name: "Laptop Service Centre",
          models: [
            { name: "Laptop Service", link: "#" }
          ]
        },
        {
          name: "MacBook Sales and Service",
          models: [
            { name: "MacBook", link: "#" }
          ]
        }
      ]
    },
    electronics: {
      title: "ELECTRONICS",
      subcategories: [
        {
          name: "Remote Shop",
          models: [
            { name: "Remote Shop", link: "#" }
          ]
        },
        {
          name: "AC Shop",
          models: [
            { name: "AC Shop", link: "#" }
          ]
        },
        {
          name: "Electronic (Everything Mix)",
          models: [
            { name: "Raj Electronics", link: "#" }
          ]
        },
        {
          name: "Speakers",
          models: [
            { name: "Speakers", link: "#" }
          ]
        },
        {
          name: "Home Appliances",
          models: [
            { name: "Home Appliances", link: "#" }
          ]
        },
        {
          name: "Prestige Home Appliance",
          models: [
            { name: "Prestige Items", link: "#" }
          ]
        },
        {
          name: "Gadgets",
          models: [
            { name: "Gadget Junction", link: "#" }
          ]
        }
      ]
    },
    electrical: {
      title: "ELECTRICAL",
      subcategories: [
        {
          name: "All Mix",
          models: [
            { name: "Classical Electrical", link: "#" }
          ]
        },
        {
          name: "Light",
          models: [
            { name: "Light", link: "#" }
          ]
        },
        {
          name: "Switch",
          models: [
            { name: "Switch", link: "#" }
          ]
        },
        {
          name: "Cables/Wires",
          models: [
            { name: "Wire", link: "#" }
          ]
        },
        {
          name: "Fan Shop",
          models: [
            { name: "Fan", link: "#" }
          ]
        }
      ]
    },
    battery: {
      title: "BATTERY",
      subcategories: [
        {
          name: "Battery",
          models: [
            { name: "SN Battery", link: "#" },
            { name: "Kalpana Battery", link: "#" }
          ]
        },
        {
          name: "Solar Panel",
          models: [
            { name: "Solar Panel", link: "#" }
          ]
        },
        {
          name: "Generators",
          models: [
            { name: "Generator Rental Ex", link: "#" }
          ]
        },
        {
          name: "UPS",
          models: [
            { name: "UPS", link: "#" }
          ]
        }
      ]
    },
    motors: {
      title: "MOTORS",
      subcategories: [
        {
          name: "Taro Pumps",
          models: [
            { name: "Taro Pumps", link: "#" }
          ]
        },
        {
          name: "Borewells",
          models: [
            { name: "Borewells", link: "#" }
          ]
        },
        {
          name: "Motor Pumps",
          models: [
            { name: "Motor and Generator", link: "#" }
          ]
        }
      ]
    },
    plumbing: {
      title: "PLUMBING",
      subcategories: [
        {
          name: "Pipe and Cement",
          models: [
            { name: "Pipe and Cement", link: "#" }
          ]
        },
        {
          name: "SS Pipe Fittings",
          models: [
            { name: "SS Pipe Fittings", link: "#" }
          ]
        },
        {
          name: "Piping Materials",
          models: [
            { name: "Piping Materials", link: "#" }
          ]
        }
      ]
    },
    jewellery: {
      title: "JEWELLERY",
      subcategories: [
        {
          name: "Gold",
          models: [
            { name: "Gold", link: "#" }
          ]
        },
        {
          name: "One Gram",
          models: [
            { name: "One Gram", link: "#" }
          ]
        },
        {
          name: "Only Silver",
          models: [
            { name: "Silver Store", link: "#" }
          ]
        },
        {
          name: "Pearl and Gem",
          models: [
            { name: "Pearl", link: "#" },
            { name: "Gems", link: "#" }
          ]
        },
        {
          name: "Silver Photo Frame",
          models: [
            { name: "Silver Photo Frame", link: "#" }
          ]
        },
        {
          name: "Bangles",
          models: [
            { name: "Bangle", link: "#" }
          ]
        },
        {
          name: "Jewellery Tools",
          models: [
            { name: "Jewellery Tools", link: "#" }
          ]
        },
        {
          name: "Gold Melting",
          models: [
            { name: "Gold Melting", link: "#" }
          ]
        }
      ]
    },
    wood: {
      title: "WOOD",
      subcategories: [
        {
          name: "Timber",
          models: [
            { name: "Timber", link: "#" }
          ]
        },
        {
          name: "Plywood",
          models: [
            { name: "Navdurga Plywood", link: "#" },
            { name: "Nandana Glass and Plywood", link: "#" }
          ]
        },
        {
          name: "Doors",
          models: [
            { name: "Cuiras Doors", link: "#" }
          ]
        },
        {
          name: "Saw Mill",
          models: [
            { name: "Saw Mill", link: "#" }
          ]
        }
      ]
    },
    building_materials: {
      title: "BUILDING MATERIALS",
      subcategories: [
        {
          name: "Aluminium",
          models: [
            { name: "Century Aluminium", link: "#" }
          ]
        },
        {
          name: "Welding",
          models: [
            { name: "Welding", link: "#" }
          ]
        },
        {
          name: "Engineering Stainless Steels",
          models: [
            { name: "Engineering Stainless Steels", link: "#" }
          ]
        },
        {
          name: "Railing Work",
          models: [
            { name: "Railing/Metal", link: "#" }
          ]
        },
        {
          name: "Iron and Steel Rod",
          models: [
            { name: "Century Aluminium", link: "#" }
          ]
        },
        {
          name: "Cement",
          models: [
            { name: "Cement", link: "#" }
          ]
        },
        {
          name: "Steel Doors",
          models: [
            { name: "Steel Doors", link: "#" }
          ]
        },
        {
          name: "Timber",
          models: [
            { name: "Timber", link: "#" }
          ]
        },
        {
          name: "Bricks",
          models: [
            { name: "Bricks", link: "#" }
          ]
        },
        {
          name: "Glass",
          models: [
            { name: "Glass Business", link: "#" }
          ]
        }
      ]
    },
    other_building_materials: {
      title: "OTHER BUILDING MATERIALS",
      subcategories: [
        {
          name: "Paint",
          models: [
            { name: "Renuka Paints", link: "#" }
          ]
        },
        {
          name: "Hardware",
          models: [
            { name: "Hardware", link: "#" }
          ]
        },
        {
          name: "Sanitary/Tiles",
          models: [
            { name: "Imperial Tiles", link: "#" }
          ]
        },
        {
          name: "Marbles",
          models: [
            { name: "Dakshinak Minerals", link: "#" }
          ]
        }
      ]
    },
    bike: {
      title: "BIKE",
      subcategories: [
        {
          name: "Bike Repair/Mechanic",
          models: [
            { name: "Bike Service", link: "#" },
            { name: "Bike Service", link: "#" }
          ]
        },
        {
          name: "Bike Service and Accessories",
          models: [
            { name: "Bike Service and Accessories", link: "#" }
          ]
        },
        {
          name: "Bike Consultancy and Finance",
          models: [
            { name: "Auto Consultancy", link: "#" }
          ]
        },
        {
          name: "Bike Showroom",
          models: [
            { name: "Bike Showroom", link: "#" }
          ]
        },
        {
          name: "Bike Stickering",
          models: [
            { name: "Bike Stickering", link: "#" }
          ]
        },
        {
          name: "Bike Rental",
          models: [
            { name: "Bike Rental", link: "#" }
          ]
        },
        {
          name: "2nd Hand Bike",
          models: [
            { name: "2nd Hand Bike", link: "#" }
          ]
        }
      ]
    },
    car: {
      title: "CAR",
      subcategories: [
        {
          name: "Car Repair/Mechanic and Accessories",
          models: [
            { name: "Car Care and Services", link: "#" }
          ]
        },
        {
          name: "Car Modifications",
          models: [
            { name: "Car Modifications", link: "#" }
          ]
        },
        {
          name: "Car Showroom",
          models: [
            { name: "Car Showroom", link: "#" }
          ]
        },
        {
          name: "2nd Hand Car",
          models: [
            { name: "2nd Hand Car", link: "#" }
          ]
        },
        {
          name: "Car Driving School",
          models: [
            { name: "Alfa School of Driving", link: "#" }
          ]
        },
        {
          name: "Car Rental",
          models: [
            { name: "Car Rental", link: "#" }
          ]
        },
        {
          name: "Car Consultancy and Finance",
          models: [
            { name: "Car Consultancy and Finance", link: "#" }
          ]
        }
      ]
    },
    cycle: {
      title: "CYCLE",
      subcategories: [
        {
          name: "Cycle Repair",
          models: [
            { name: "Cycle Repair", link: "#" }
          ]
        },
        {
          name: "Cycle Sales",
          models: [
            { name: "Cycle - Big Small Kids", link: "#" }
          ]
        }
      ]
    },
    hospital: {
      title: "HOSPITAL",
      subcategories: [
        {
          name: "Multispeciality",
          models: [
            { name: "Deepam Hospital", link: "#" },
            { name: "Ramakrishna Medical", link: "#" },
            { name: "Demo", link: "#" },
            { name: "Ponne Hospital", link: "#" }
          ]
        },
        {
          name: "Neuro",
          models: [
            { name: "Rockfort Neurocentre", link: "#" }
          ]
        },
        {
          name: "Pediatric",
          models: [
            { name: "Pediatric", link: "#" }
          ]
        },
        {
          name: "Eye Care",
          models: [
            { name: "Clearview Eye", link: "#" }
          ]
        },
        {
          name: "Dermatology",
          models: [
            { name: "Dermatology", link: "#" }
          ]
        },
        {
          name: "Psychiatric",
          models: [
            { name: "Psychiatric", link: "#" }
          ]
        },
        {
          name: "Psychologist",
          models: [
            { name: "Psychologist", link: "#" }
          ]
        },
        {
          name: "Deaddiction",
          models: [
            { name: "Shanvi Medicare", link: "#" }
          ]
        },
        {
          name: "Gynic",
          models: [
            { name: "Fertility Hospital", link: "#" }
          ]
        },
        {
          name: "Ortho",
          models: [
            { name: "Venkatesh Ortho", link: "#" }
          ]
        },
        {
          name: "Homeopathy",
          models: [
            { name: "Ex1", link: "#" }
          ]
        },
        {
          name: "Anaesthesia",
          models: [
            { name: "Anaesthesia", link: "#" }
          ]
        },
        {
          name: "Ayurvedic",
          models: [
            { name: "Anamaya Pharmacy", link: "#" },
            { name: "Ayurveda Clinic Example", link: "#" }
          ]
        },
        {
          name: "Naturopathy",
          models: [
            { name: "Naturopathy", link: "#" }
          ]
        },
        {
          name: "Cardiologist",
          models: [
            { name: "Cardiology", link: "#" }
          ]
        }
      ]
    },
    dental: {
      title: "DENTAL",
      subcategories: [
        {
          name: "Dental Clinics",
          models: [
            { name: "Dr. Richu - Kerala", link: "#" },
            { name: "Dr. Bens Merry", link: "#" },
            { name: "Akshaya Dental", link: "#" },
            { name: "GG Dental", link: "#" },
            { name: "Reshmas Dental", link: "#" }
          ]
        }
      ]
    },
    diagnostics: {
      title: "DIAGNOSTICS",
      subcategories: [
        {
          name: "Diagnostic Centers",
          models: [
            { name: "Vivid Diagnostics", link: "#" },
            { name: "D2", link: "#" },
            { name: "D3", link: "#" }
          ]
        }
      ]
    },
    medicals: {
      title: "MEDICALS",
      subcategories: [
        {
          name: "Medical Retail",
          models: [
            { name: "Bawa Medicals", link: "#" }
          ]
        },
        {
          name: "Medicals Wholesale/Distributors",
          models: [
            { name: "Bawa Medicals", link: "#" }
          ]
        },
        {
          name: "Surgicals Retail",
          models: [
            { name: "Surgical", link: "#" }
          ]
        },
        {
          name: "Surgical Distributor",
          models: [
            { name: "Wholesale Surgical", link: "#" }
          ]
        },
        {
          name: "Ayurvedic Medical",
          models: [
            { name: "Ayur Pharma", link: "#" },
            { name: "Prakruthi", link: "#" }
          ]
        }
      ]
    },
    overseas_consultancy: {
      title: "OVERSEAS CONSULTANCY",
      subcategories: [
        {
          name: "Universal Consultancy",
          models: [
            { name: "Universal Consultancy", link: "#" }
          ]
        }
      ]
    },
    institute: {
      title: "INSTITUTE",
      subcategories: [
        {
          name: "School",
          models: [
            { name: "School", link: "#" }
          ]
        },
        {
          name: "Preschool",
          models: [
            { name: "Iris Floret", link: "#" },
            { name: "Iris Floret Happy", link: "#" },
            { name: "Wow Kids", link: "#" },
            { name: "Dazzling Ducklings", link: "#" }
          ]
        },
        {
          name: "College",
          models: [
            { name: "Sethus College", link: "#" }
          ]
        },
        {
          name: "College2",
          models: [
            { name: "Ex2", link: "#" }
          ]
        },
        {
          name: "College 3",
          models: [
            { name: "Ex3", link: "#" }
          ]
        },
        {
          name: "Computer Institute",
          models: [
            { name: "G Tec Institute", link: "#" }
          ]
        }
      ]
    },
    art_school_fitness: {
      title: "ART SCHOOL/FITNESS",
      subcategories: [
        {
          name: "Music Academy",
          models: [
            { name: "Music Academy", link: "#" }
          ]
        },
        {
          name: "Music Instrument Academy",
          models: [
            { name: "Music Instrument Academy", link: "#" }
          ]
        },
        {
          name: "Dance Academy",
          models: [
            { name: "JJ Dance Academy", link: "#" }
          ]
        },
        {
          name: "Paint Academy",
          models: [
            { name: "Painting Class", link: "#" }
          ]
        },
        {
          name: "Martial Arts/Karate",
          models: [
            { name: "Shindijai", link: "#" }
          ]
        },
        {
          name: "Skating Coaching",
          models: [
            { name: "Rockers Speed Skating", link: "#" }
          ]
        },
        {
          name: "Sports Coaching",
          models: [
            { name: "Sports", link: "#" }
          ]
        },
        {
          name: "Yoga Institute",
          models: [
            { name: "Yoga", link: "#" }
          ]
        },
        {
          name: "Gym",
          models: [
            { name: "Professional Fitness", link: "#" }
          ]
        }
      ]
    },
    art_accessories: {
      title: "ART ACCESSORIES",
      subcategories: [
        {
          name: "Paint Accessories",
          models: [
            { name: "Painting Accessories", link: "#" }
          ]
        },
        {
          name: "Music Instrument Sales",
          models: [
            { name: "Sports and Music", link: "#" },
            { name: "Music Instruments", link: "#" }
          ]
        },
        {
          name: "Dance Dress Sales",
          models: [
            { name: "Dance Dress", link: "#" }
          ]
        },
        {
          name: "Sports Items",
          models: [
            { name: "Rajendra Sports", link: "#" }
          ]
        }
      ]
    },
    net_mesh: {
      title: "NET/MESH",
      subcategories: [
        {
          name: "Mosquito Mesh",
          models: [
            { name: "Mosquito Net", link: "#" }
          ]
        },
        {
          name: "Fishing Items",
          models: [
            { name: "Fishing Equipment", link: "#" }
          ]
        }
      ]
    },
    interiors_house: {
      title: "INTERIORS/HOUSE RELATED",
      subcategories: [
        {
          name: "Interiors",
          models: [
            { name: "Interior", link: "#" }
          ]
        },
        {
          name: "Chimneys",
          models: [
            { name: "Chimneys", link: "#" }
          ]
        },
        {
          name: "Home Decors",
          models: [
            { name: "House Decors", link: "#" }
          ]
        },
        {
          name: "Home Furnishing",
          models: [
            { name: "Home Furnishing", link: "#" }
          ]
        },
        {
          name: "Mattress",
          models: [
            { name: "Mattress", link: "#" }
          ]
        },
        {
          name: "House Keeping Items",
          models: [
            { name: "Ex1", link: "#" }
          ]
        },
        {
          name: "Curtains/Wallpaper",
          models: [
            { name: "Curtains and Wall Paper", link: "#" }
          ]
        },
        {
          name: "Kitchen",
          models: [
            { name: "Kitchen Utensils", link: "#" }
          ]
        }
      ]
    },
    metals_crafts: {
      title: "METALS/CRAFTS",
      subcategories: [
        {
          name: "God Idols",
          models: [
            { name: "Karpaka Vilas", link: "#" },
            { name: "Margatha Lakshmi Pathirai", link: "#" }
          ]
        },
        {
          name: "Paathirai/Metals Shop",
          models: [
            { name: "Paathirai/Metals Shop", link: "#" }
          ]
        },
        {
          name: "Metal",
          models: [
            { name: "Metal", link: "#" }
          ]
        }
      ]
    },
    saloon: {
      title: "SALOON",
      subcategories: [
        {
          name: "Mens Saloon Small",
          models: [
            { name: "Mens Salon", link: "#" }
          ]
        },
        {
          name: "Small Saloon",
          models: [
            { name: "Small Saloon", link: "#" }
          ]
        },
        {
          name: "Big Saloon",
          models: [
            { name: "Big Saloon", link: "#" }
          ]
        }
      ]
    },
    service_centers: {
      title: "SERVICE CENTERS",
      subcategories: [
        {
          name: "Mobile Service Center",
          models: [
            { name: "Mobile Service", link: "#" }
          ]
        },
        {
          name: "Laptop Service Center",
          models: [
            { name: "Laptop Service", link: "#" }
          ]
        },
        {
          name: "AC Service Center",
          models: [
            { name: "AC Service", link: "#" }
          ]
        },
        {
          name: "Washing Machine Service Center",
          models: [
            { name: "Washing Machine Service", link: "#" }
          ]
        },
        {
          name: "Electronic Items Service Center",
          models: [
            { name: "Electronic Items Service Center", link: "#" }
          ]
        }
      ]
    },
    bags_trolleys: {
      title: "BAGS/TROLLEYS",
      subcategories: [
        {
          name: "Ex 1",
          models: [
            { name: "Ex 1", link: "#" }
          ]
        },
        {
          name: "Ex 2",
          models: [
            { name: "Ex 2", link: "#" }
          ]
        }
      ]
    },
    tattoo: {
      title: "TATTOO",
      subcategories: [
        {
          name: "Tattoo",
          models: [
            { name: "Tattoo", link: "#" }
          ]
        }
      ]
    },
    opticals: {
      title: "OPTICALS",
      subcategories: [
        {
          name: "Ex 1",
          models: [
            { name: "Ex 1", link: "#" }
          ]
        }
      ]
    },
    packaging_products: {
      title: "PACKAGING PRODUCTS",
      subcategories: [
        {
          name: "Sri Balaji Marketing",
          models: [
            { name: "Sri Balaji Marketing", link: "#" }
          ]
        },
        {
          name: "Paper Packaging",
          models: [
            { name: "Paper Packaging", link: "#" }
          ]
        }
      ]
    },
    pesticides: {
      title: "PESTICIDES",
      subcategories: [
        {
          name: "Pesticide",
          models: [
            { name: "Pesticide", link: "#" }
          ]
        }
      ]
    },
    plastic_items: {
      title: "PLASTIC ITEMS",
      subcategories: [
        {
          name: "Ex1",
          models: [
            { name: "Ex 1", link: "#" }
          ]
        }
      ]
    },
    power_tools: {
      title: "POWER TOOLS",
      subcategories: [
        {
          name: "AM Power Tools",
          models: [
            { name: "AM Power Tools", link: "#" }
          ]
        }
      ]
    },
    printing: {
      title: "PRINTING",
      subcategories: [
        {
          name: "Ex1",
          models: [
            { name: "Ex 1", link: "#" }
          ]
        },
        {
          name: "Ink Pot - Ex2",
          models: [
            { name: "Ink Pot - Ex2", link: "#" }
          ]
        }
      ]
    },
    hoardings_business: {
      title: "HOARDINGS BUSINESS",
      subcategories: [
        {
          name: "Hoarding Business",
          models: [
            { name: "Hoarding Business", link: "#" }
          ]
        }
      ]
    },
    wedding_cards: {
      title: "WEDDING CARDS",
      subcategories: [
        {
          name: "Ex1",
          models: [
            { name: "Ex 1", link: "#" }
          ]
        }
      ]
    },
    premium_gift_shop: {
      title: "PREMIUM GIFT SHOP",
      subcategories: [
        {
          name: "Maruthi Gifts",
          models: [
            { name: "Maruthi Gifts", link: "#" }
          ]
        },
        {
          name: "Bhagavathi Gift House",
          models: [
            { name: "Bhagavathi Gift House", link: "#" }
          ]
        },
        {
          name: "Ex3",
          models: [
            { name: "Ex 3", link: "#" }
          ]
        }
      ]
    },
    event_management: {
      title: "EVENT MANAGEMENT",
      subcategories: [
        {
          name: "Namma Party House",
          models: [
            { name: "Namma Party House", link: "#" }
          ]
        }
      ]
    },
    trophies: {
      title: "TROPHIES",
      subcategories: [
        {
          name: "Trophy",
          models: [
            { name: "Trophy", link: "#" }
          ]
        }
      ]
    },
    tyre: {
      title: "TYRE",
      subcategories: [
        {
          name: "Tyre",
          models: [
            { name: "Tyre", link: "#" }
          ]
        }
      ]
    },
    tarpaulin: {
      title: "TARPAULIN",
      subcategories: [
        {
          name: "Krishna Tarpaulin",
          models: [
            { name: "Krishna Tarpaulin", link: "#" }
          ]
        }
      ]
    },
    toy: {
      title: "TOY",
      subcategories: [
        {
          name: "Toy",
          models: [
            { name: "Toy", link: "#" }
          ]
        }
      ]
    },
    tours_travels: {
      title: "TOURS AND TRAVELS",
      subcategories: [
        {
          name: "Ex 1",
          models: [
            { name: "Ex1", link: "#" }
          ]
        }
      ]
    },
    trust_ngo: {
      title: "TRUST/NGO",
      subcategories: [
        {
          name: "Charity/Trust/NGO",
          models: [
            { name: "Charity/Trust/NGO", link: "#" }
          ]
        }
      ]
    },
    umbrella: {
      title: "UMBRELLA",
      subcategories: [
        {
          name: "Umbrella",
          models: [
            { name: "Umbrella", link: "#" }
          ]
        }
      ]
    },
    water_purifiers: {
      title: "WATER PURIFIERS",
      subcategories: [
        {
          name: "Santosh Water Purifier",
          models: [
            { name: "Santosh Water Purifier", link: "#" }
          ]
        }
      ]
    },
    watch: {
      title: "WATCH",
      subcategories: [
        {
          name: "Watch",
          models: [
            { name: "Watch", link: "#" }
          ]
        }
      ]
    },
    washing_machine: {
      title: "WASHING MACHINE",
      subcategories: [
        {
          name: "Washing Machine",
          models: [
            { name: "Washing Machine", link: "#" }
          ]
        }
      ]
    },
    weighing_machine: {
      title: "WEIGHING MACHINE",
      subcategories: [
        {
          name: "Ex1",
          models: [
            { name: "Ex1", link: "#" }
          ]
        }
      ]
    },
    xerox: {
      title: "XEROX",
      subcategories: [
        {
          name: "Xerox",
          models: [
            { name: "Xerox", link: "#" }
          ]
        }
      ]
    },
    laundry: {
      title: "LAUNDRY",
      subcategories: [
        {
          name: "Ex1",
          models: [
            { name: "Ex1", link: "#" }
          ]
        },
        {
          name: "Ex2",
          models: [
            { name: "Ex 2", link: "#" }
          ]
        }
      ]
    },
    marbles_granites: {
      title: "MARBLES/GRANITES",
      subcategories: [
        {
          name: "Ex1",
          models: [
            { name: "Ex1", link: "#" }
          ]
        }
      ]
    },
    sanitary_tiles: {
      title: "SANITARY AND TILES",
      subcategories: [
        {
          name: "Sanitary and Tiles",
          models: [
            { name: "Sanitary and Tiles", link: "#" }
          ]
        }
      ]
    },
    key_makers: {
      title: "KEY MAKERS",
      subcategories: [
        {
          name: "MH Key Maker",
          models: [
            { name: "MH Key Maker", link: "#" }
          ]
        }
      ]
    },
    personalities: {
      title: "PERSONALITIES",
      subcategories: [
        {
          name: "Chartered Accountant1",
          models: [
            { name: "Jom Jose", link: "#" }
          ]
        },
        {
          name: "Chartered Accountant2",
          models: [
            { name: "Chartered Accountant2", link: "#" }
          ]
        },
        {
          name: "Lawyer1",
          models: [
            { name: "Advocate", link: "#" }
          ]
        },
        {
          name: "Lawyer2",
          models: [
            { name: "Lawyer2", link: "#" }
          ]
        },
        {
          name: "Manager",
          models: [
            { name: "Manager", link: "#" }
          ]
        },
        {
          name: "Bank Manager",
          models: [
            { name: "Bank Manager", link: "#" }
          ]
        },
        {
          name: "Police",
          models: [
            { name: "Police", link: "#" }
          ]
        },
        {
          name: "Politician",
          models: [
            { name: "Politician", link: "#" }
          ]
        },
        {
          name: "Free Lancer",
          models: [
            { name: "Free Lancer", link: "#" }
          ]
        },
        {
          name: "Artists",
          models: [
            { name: "Artists", link: "#" }
          ]
        },
        {
          name: "Actor",
          models: [
            { name: "Actor", link: "#" }
          ]
        },
        {
          name: "Student",
          models: [
            { name: "Student", link: "#" }
          ]
        }
      ]
    },
    meat: {
      title: "MEAT",
      subcategories: [
        {
          name: "Meat",
          models: [
            { name: "Meat", link: "#" }
          ]
        }
      ]
    },
    astrology: {
      title: "ASTROLOGY",
      subcategories: [
        {
          name: "Bhagavathi Jyothishyalaya",
          models: [
            { name: "Bhagavathi Jyothishyalaya", link: "#" }
          ]
        }
      ]
    },
    plant_nursery: {
      title: "PLANT NURSERY",
      subcategories: [
        {
          name: "Plant Nursery",
          models: [
            { name: "Plant Nursery", link: "#" }
          ]
        }
      ]
    },
    vinyl_sticker: {
      title: "VINYL STICKER/STICKERING",
      subcategories: [
        {
          name: "Stickering",
          models: [
            { name: "Stickering", link: "#" }
          ]
        }
      ]
    },
    footwear: {
      title: "FOOTWEAR",
      subcategories: [
        {
          name: "Footwear",
          models: [
            { name: "Footwear", link: "#" }
          ]
        }
      ]
    },
    bottle: {
      title: "BOTTLE",
      subcategories: [
        {
          name: "Bottle",
          models: [
            { name: "Bottle", link: "#" }
          ]
        }
      ]
    },
    courier_service: {
      title: "COURIER SERVICE",
      subcategories: [
        {
          name: "DTDC",
          models: [
            { name: "DTDC", link: "#" }
          ]
        }
      ]
    },
    photostudio: {
      title: "PHOTOSTUDIO",
      subcategories: [
        {
          name: "Ex1",
          models: [
            { name: "Ex1", link: "#" }
          ]
        }
      ]
    },
    money_exchange: {
      title: "MONEY EXCHANGE",
      subcategories: [
        {
          name: "Money Exchange",
          models: [
            { name: "Money Exchange", link: "#" }
          ]
        }
      ]
    },
    coffee_powder: {
      title: "COFFEE POWDER",
      subcategories: [
        {
          name: "Ex2",
          models: [
            { name: "Ex 2", link: "#" }
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

  const handleModelClick = (modelLink) => {
    if (modelLink && modelLink !== "#") {
      window.open(modelLink, '_blank');
    }
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
          }}>3D Models</h1>
          <p style={{
            fontSize: '18px',
            opacity: '0.9',
            margin: '0',
            fontWeight: '300'
          }}>Explore interactive 3D models across various categories</p>
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
              placeholder="Search for 3D models, categories..."
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

      {/* 3D Model Listings */}
      <div>
        {selectedCategory && modelData[selectedCategory] && (
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
              {modelData[selectedCategory].title}
            </h2>
            
            {/* Subcategories */}
            {modelData[selectedCategory].subcategories.map((subcategory, subIndex) => (
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
                
                {/* 3D Models Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '20px'
                }}>
                  {subcategory.models.map((model, modelIndex) => (
                    <div 
                      key={modelIndex}
                      onClick={() => handleModelClick(model.link)}
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
                        const descEl = e.currentTarget.querySelector('.desc');
                        const iconEl = e.currentTarget.querySelector('.arrow');
                        if (nameEl) nameEl.style.color = 'white';
                        if (descEl) descEl.style.color = 'white';
                        if (iconEl) iconEl.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.borderColor = 'transparent';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #f8fafc, #e2e8f0)';
                        e.currentTarget.style.color = 'initial';
                        const nameEl = e.currentTarget.querySelector('h4');
                        const descEl = e.currentTarget.querySelector('.desc');
                        const iconEl = e.currentTarget.querySelector('.arrow');
                        if (nameEl) nameEl.style.color = '#333';
                        if (descEl) descEl.style.color = '#667eea';
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
                          🧊
                        </div>
                        <div style={{ flex: 1 }}>
                          <h4 style={{
                            margin: '0 0 5px 0',
                            fontSize: '18px',
                            fontWeight: '600',
                            color: '#333',
                            transition: 'color 0.3s ease'
                          }}>
                            {model.name}
                          </h4>
                          <div className="desc" style={{
                            fontSize: '14px',
                            color: '#667eea',
                            fontWeight: '500',
                            transition: 'color 0.3s ease'
                          }}>
                            Click to view 3D model
                          </div>
                        </div>
                        <div className="arrow" style={{
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
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>🎯</div>
            <h3 style={{
              color: '#667eea',
              marginBottom: '15px',
              fontSize: '24px',
              fontWeight: '600'
            }}>Select a category above to explore 3D models</h3>
            <p style={{
              color: '#666',
              fontSize: '16px',
              margin: '0'
            }}>Choose from food, clothing, electronics, furniture, and many more categories!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Models3D;