import React, { useState, useEffect, useRef } from "react";
import "./GoogleStreetView.css";

function GoogleStreetView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const searchRef = useRef(null);
  const categoriesRef = useRef(null);

  // All categories with horizontal scroll
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
    { id: "coffee_powder", name: "COFFEE POWDER" },
    { id: "gaming", name: "GAMING" },
  ];

  const businessData = {
    food1: [
      { id: 1, name: "Food Paradise", image: "/api/placeholder/300/200", gsv: true, nfc: true, tour3d: false },
      { id: 2, name: "Tasty Bites", image: "/api/placeholder/300/200", gsv: true, nfc: false, tour3d: true }
    ],
    food2: [
      { id: 8, name: "Spice Garden", image: "/api/placeholder/300/200", gsv: true, nfc: true, tour3d: false },
      { id: 9, name: "Fast Food Corner", image: "/api/placeholder/300/200", gsv: false, nfc: true, tour3d: true }
    ],
    furniture: [
      { id: 10, name: "Modern Furniture", image: "/api/placeholder/300/200", gsv: true, nfc: true, tour3d: true },
      { id: 11, name: "Wood Works", image: "/api/placeholder/300/200", gsv: true, nfc: false, tour3d: false }
    ],
    flower: [
      { id: 12, name: "Rose Garden", image: "/api/placeholder/300/200", gsv: true, nfc: true, tour3d: false }
    ],
    art_school_fitness: [
      { id: 13, name: "Fitness First", image: "/api/placeholder/300/200", gsv: true, nfc: true, tour3d: true },
      { id: 14, name: "Art Academy", image: "/api/placeholder/300/200", gsv: false, nfc: true, tour3d: false }
    ],
    jewellery: [
      { id: 3, name: "Gold Luxe", image: "/api/placeholder/300/200", gsv: true, nfc: true, tour3d: true }
    ],
    clothing: [
      { id: 4, name: "Fashion Hub", image: "/api/placeholder/300/200", gsv: true, nfc: true, tour3d: false },
      { id: 5, name: "Style Central", image: "/api/placeholder/300/200", gsv: false, nfc: true, tour3d: true }
    ],
    hospital: [
      { id: 6, name: "City General Hospital", image: "/api/placeholder/300/200", gsv: true, nfc: false, tour3d: true }
    ],
    gaming: [
      { id: 7, name: "Game Zone", image: "/api/placeholder/300/200", gsv: true, nfc: true, tour3d: false }
    ]
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
              fontSize: '28px',
              color: '#333',
              marginBottom: '25px',
              textAlign: 'center',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {categories.find((cat) => cat.id === selectedCategory)?.name}
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '25px',
              marginTop: '20px'
            }}>
              {businessData[selectedCategory].map((business) => (
                <div 
                  key={business.id} 
                  style={{
                    background: 'white',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    border: '1px solid #e1e5e9',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.transform = 'scale(1)';
                  }}
                >
                  <div style={{
                    height: '200px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <img 
                      src={business.image} 
                      alt={business.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </div>
                  <div style={{
                    padding: '20px',
                    textAlign: 'left'
                  }}>
                    <h3 style={{
                      margin: '0 0 10px 0',
                      fontSize: '20px',
                      color: '#333',
                      fontWeight: '600'
                    }}>{business.name}</h3>
                    <div style={{
                      display: 'flex',
                      gap: '8px',
                      flexWrap: 'wrap',
                      marginTop: '12px'
                    }}>
                      {business.gsv && (
                        <span style={{
                          padding: '4px 12px',
                          background: '#22c55e',
                          color: 'white',
                          borderRadius: '15px',
                          fontSize: '12px',
                          fontWeight: '600'
                        }}>Street View</span>
                      )}
                      {business.nfc && (
                        <span style={{
                          padding: '4px 12px',
                          background: '#3b82f6',
                          color: 'white',
                          borderRadius: '15px',
                          fontSize: '12px',
                          fontWeight: '600'
                        }}>NFC</span>
                      )}
                      {business.tour3d && (
                        <span style={{
                          padding: '4px 12px',
                          background: '#f59e0b',
                          color: 'white',
                          borderRadius: '15px',
                          fontSize: '12px',
                          fontWeight: '600'
                        }}>3D Tour</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
            }}>Choose from restaurants, jewellers, gaming, salons, and more!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GoogleStreetView;