import React, { useState, useEffect, useRef } from "react";
import "./Models3D.css";

function Models3D() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedModel, setSelectedModel] = useState(null);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const searchRef = useRef(null);
  const categoriesRef = useRef(null);

  // All 3D model categories
  const categories = [
    { id: "architectural", name: "ARCHITECTURAL" },
    { id: "product_showcase", name: "PRODUCT SHOWCASE" },
    { id: "interactive_demo", name: "INTERACTIVE DEMO" },
    { id: "educational", name: "EDUCATIONAL" },
    { id: "gaming_assets", name: "GAMING ASSETS" },
    { id: "medical_models", name: "MEDICAL MODELS" },
    { id: "automotive", name: "AUTOMOTIVE" },
    { id: "furniture_3d", name: "FURNITURE 3D" },
    { id: "fashion_3d", name: "FASHION 3D" },
    { id: "industrial", name: "INDUSTRIAL" },
    { id: "art_sculpture", name: "ART SCULPTURE" },
    { id: "electronics_3d", name: "ELECTRONICS 3D" },
    { id: "jewelry_3d", name: "JEWELRY 3D" },
    { id: "food_3d", name: "FOOD 3D" },
    { id: "environment", name: "ENVIRONMENT" },
    { id: "character_models", name: "CHARACTER MODELS" },
    { id: "mechanical", name: "MECHANICAL" },
    { id: "sports_equipment", name: "SPORTS EQUIPMENT" },
    { id: "home_decor", name: "HOME DECOR" },
    { id: "transportation", name: "TRANSPORTATION" },
    { id: "scientific", name: "SCIENTIFIC" },
    { id: "abstract_art", name: "ABSTRACT ART" },
    { id: "nature_organic", name: "NATURE ORGANIC" },
    { id: "tech_gadgets", name: "TECH GADGETS" },
    { id: "construction", name: "CONSTRUCTION" },
    { id: "military_defense", name: "MILITARY DEFENSE" },
    { id: "space_aerospace", name: "SPACE AEROSPACE" },
    { id: "marine_nautical", name: "MARINE NAUTICAL" },
    { id: "fantasy_mythical", name: "FANTASY MYTHICAL" },
    { id: "historic_artifacts", name: "HISTORIC ARTIFACTS" }
  ];

  const modelData = {
    architectural: [
      { id: 1, name: "Modern House Design", image: "/api/placeholder/300/200", ar: true, vr: true, interactive: false },
      { id: 2, name: "Office Complex", image: "/api/placeholder/300/200", ar: true, vr: false, interactive: true }
    ],
    product_showcase: [
      { id: 8, name: "Smartphone Model", image: "/api/placeholder/300/200", ar: true, vr: true, interactive: false },
      { id: 9, name: "Luxury Watch", image: "/api/placeholder/300/200", ar: false, vr: true, interactive: true }
    ],
    furniture_3d: [
      { id: 10, name: "Designer Sofa", image: "/api/placeholder/300/200", ar: true, vr: true, interactive: true },
      { id: 11, name: "Dining Table Set", image: "/api/placeholder/300/200", ar: true, vr: false, interactive: false }
    ],
    automotive: [
      { id: 12, name: "Sports Car Model", image: "/api/placeholder/300/200", ar: true, vr: true, interactive: false }
    ],
    gaming_assets: [
      { id: 13, name: "Fantasy Weapon", image: "/api/placeholder/300/200", ar: true, vr: true, interactive: true },
      { id: 14, name: "Character Avatar", image: "/api/placeholder/300/200", ar: false, vr: true, interactive: false }
    ],
    jewelry_3d: [
      { id: 3, name: "Diamond Ring", image: "/api/placeholder/300/200", ar: true, vr: true, interactive: true }
    ],
    fashion_3d: [
      { id: 4, name: "Designer Dress", image: "/api/placeholder/300/200", ar: true, vr: true, interactive: false },
      { id: 5, name: "Sneaker Collection", image: "/api/placeholder/300/200", ar: false, vr: true, interactive: true }
    ],
    medical_models: [
      { id: 6, name: "Human Heart Model", image: "/api/placeholder/300/200", ar: true, vr: false, interactive: true }
    ],
    interactive_demo: [
      { id: 7, name: "Engine Prototype", image: "/api/placeholder/300/200", ar: true, vr: true, interactive: false }
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
    setSelectedModel(null);
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
          }}>3D Models</h1>
          <p style={{
            fontSize: '18px',
            opacity: '0.9',
            margin: '0',
            fontWeight: '300'
          }}>Visualize interactive 3D models for your projects with cutting-edge technology.</p>
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

      {/* 3D Model Features Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '25px',
        marginBottom: '40px'
      }}>
        <div style={{
          background: 'white',
          padding: '30px',
          borderRadius: '20px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          textAlign: 'center',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        }}
        >
          <div style={{ fontSize: '48px', marginBottom: '15px' }}>🎮</div>
          <h3 style={{
            color: '#333',
            marginBottom: '10px',
            fontSize: '20px',
            fontWeight: '600'
          }}>Interactive 3D Viewer</h3>
          <p style={{
            color: '#666',
            fontSize: '16px',
            margin: '0'
          }}>Rotate, zoom, and explore 3D models with intuitive controls.</p>
        </div>

        <div style={{
          background: 'white',
          padding: '30px',
          borderRadius: '20px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          textAlign: 'center',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        }}
        >
          <div style={{ fontSize: '48px', marginBottom: '15px' }}>📱</div>
          <h3 style={{
            color: '#333',
            marginBottom: '10px',
            fontSize: '20px',
            fontWeight: '600'
          }}>AR Integration</h3>
          <p style={{
            color: '#666',
            fontSize: '16px',
            margin: '0'
          }}>View 3D models in augmented reality using your mobile device.</p>
        </div>

        <div style={{
          background: 'white',
          padding: '30px',
          borderRadius: '20px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          textAlign: 'center',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        }}
        >
          <div style={{ fontSize: '48px', marginBottom: '15px' }}>⚡</div>
          <h3 style={{
            color: '#333',
            marginBottom: '10px',
            fontSize: '20px',
            fontWeight: '600'
          }}>Custom Animations</h3>
          <p style={{
            color: '#666',
            fontSize: '16px',
            margin: '0'
          }}>Add dynamic animations and transitions to enhance user experience.</p>
        </div>
      </div>

      {/* Model Listings */}
      <div>
        {selectedCategory && modelData[selectedCategory] && (
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
              {modelData[selectedCategory].map((model) => (
                <div 
                  key={model.id} 
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
                      src={model.image} 
                      alt={model.name}
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
                    }}>{model.name}</h3>
                    <div style={{
                      display: 'flex',
                      gap: '8px',
                      flexWrap: 'wrap',
                      marginTop: '12px'
                    }}>
                      {model.ar && (
                        <span style={{
                          padding: '4px 12px',
                          background: '#22c55e',
                          color: 'white',
                          borderRadius: '15px',
                          fontSize: '12px',
                          fontWeight: '600'
                        }}>AR Ready</span>
                      )}
                      {model.vr && (
                        <span style={{
                          padding: '4px 12px',
                          background: '#3b82f6',
                          color: 'white',
                          borderRadius: '15px',
                          fontSize: '12px',
                          fontWeight: '600'
                        }}>VR</span>
                      )}
                      {model.interactive && (
                        <span style={{
                          padding: '4px 12px',
                          background: '#f59e0b',
                          color: 'white',
                          borderRadius: '15px',
                          fontSize: '12px',
                          fontWeight: '600'
                        }}>Interactive</span>
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
            }}>Choose from architectural, product showcase, gaming assets, and more!</p>
          </div>
        )}
      </div>

      {/* 3D Model Features List */}
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        marginBottom: '30px'
      }}>
        <h3 style={{
          fontSize: '24px',
          color: '#333',
          marginBottom: '25px',
          textAlign: 'center',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>3D Model Features</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '15px',
          color: '#555',
          fontSize: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#22c55e', fontSize: '20px' }}>✓</span>
            High-quality rendering and textures
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#22c55e', fontSize: '20px' }}>✓</span>
            Cross-platform compatibility
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#22c55e', fontSize: '20px' }}>✓</span>
            Real-time lighting and shadows
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#22c55e', fontSize: '20px' }}>✓</span>
            Interactive hotspots and annotations
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#22c55e', fontSize: '20px' }}>✓</span>
            VR/AR ready models
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#22c55e', fontSize: '20px' }}>✓</span>
            Optimized for web and mobile
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        marginTop: '30px'
      }}>
        <button style={{
          padding: '15px 30px',
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          color: 'white',
          border: 'none',
          borderRadius: '25px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #5a67d8, #6b46a3)';
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
        }}
        >
          🎮 Launch 3D Viewer
        </button>

        <button style={{
          padding: '15px 30px',
          background: 'linear-gradient(135deg, #22c55e, #16a34a)',
          color: 'white',
          border: 'none',
          borderRadius: '25px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #16a34a, #15803d)';
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 6px 20px rgba(34, 197, 94, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 15px rgba(34, 197, 94, 0.3)';
        }}
        >
          📱 AR Preview
        </button>

        <button style={{
          padding: '15px 30px',
          background: 'linear-gradient(135deg, #f59e0b, #d97706)',
          color: 'white',
          border: 'none',
          borderRadius: '25px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3)'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #d97706, #b45309)';
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 6px 20px rgba(245, 158, 11, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 15px rgba(245, 158, 11, 0.3)';
        }}
        >
          ⬆️ Upload Model
        </button>
      </div>
    </div>
  );
}

export default Models3D;