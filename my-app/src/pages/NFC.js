import React, { useState, useRef } from "react";
import "./NFC.css";

function NFC() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const categoryScrollRef = useRef(null);

  // ✅ Categories
  const categories = [
    "FOOD1", "FOOD2", "HOTEL/STAY", "PG", "CLOTHING", "CLOTHING RENTAL",
    "CLOTH ACCESSORIES", "TEXTILE BIG", "TAILOR", "FURNITURE", "SPORT",
    "STATIONARY", "FLOWER", "PET", "COSMETICS", "REAL ESTATE", "GROCERY",
    "MOBILE", "LAPTOP", "ELECTRONICS", "ELECTRICAL", "BATTERY", "MOTORS",
    "PLUMBING", "JEWELLERY", "WOOD", "BUILDING MATERIALS",
    "OTHER BUILDING MATERIALS", "BIKE", "CAR", "CYCLE", "HOSPITAL",
    "DENTAL", "DIAGNOSTICS", "MEDICALS", "OVERSEAS CONSULTANCY", "INSTITUTE",
    "ART SCHOOL/FITNESS", "ART ACCESSORIES", "NET/MESH", "INTERIORS/HOUSE RELATED",
    "METALS/CRAFTS", "SALOON", "SERVICE CENTERS", "BAGS/TROLLEYS", "TATTOO",
    "OPTICALS", "PACKAGING PRODUCTS", "PESTISIDES", "PLASTIC ITEMS",
    "POWER TOOLS", "PRINTING", "HOARDINGS BUSINESS", "WEDDING CARDS",
    "PREMIUM GIFT SHOP", "EVENT MANAGEMENT", "TROPHIES", "TYRE",
    "TARPAULIN", "TOY", "TOURS AND TRAVELS", "TRUST/NGO", "UMBERELLA",
    "WATER PURIFIERS", "WATCH", "WASHING MACHINE", "WEIGHING MACHINE", "XEROX",
    "LAUNDARY", "MARBLES/GRANITES", "SANITARY AND TILES", "KEY MAKERS",
    "PERSONALITIES", "MEAT", "ASTROLOGY", "PLANT NURSERY",
    "VINYL STICKER/STICKERING", "FOOTWEAR", "BOTTLE", "COURIER SERVICE",
    "PHOTOSTUDIO", "MONEY EXCHANGE", "COFFEE POWDER"
  ];

  // ✅ Business data with relevant images
  const businessData = {
    FOOD1: {
      RESTAURANT: [
        { name: "udupy aradhya", link: "https://nfc.dgtechsoln.com/udupi-aaradhya-example/", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop" },
        { name: "ishta", link: "https://site.dgtechsoln.com/ishtaa-exapmle/", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop" },
        { name: "golden dynasty", link: "https://nfc.dgtechsoln.com/golden-dynasty/", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=300&h=200&fit=crop" },
      ],
      CAFE: [
        { name: "Ruchika's cafe", link: "https://nfc.dgtechsoln.com/rasa-ruchika-cafe-2/", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=300&h=200&fit=crop" },
        { name: "VAN VERY CAFE", link: "https://nfc.dgtechsoln.com/ven-varn-cafery-example/", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=300&h=200&fit=crop" },
      ],
      BIRIYANI: [
        { name: "RR BIRIYANI", link: "https://nfc.dgtechsoln.com/salem-rr-biriyani-example/", image: "https://images.unsplash.com/photo-1563379091339-03246963d321?w=300&h=200&fit=crop" },
        { name: "3AM BIRIYANI", link: "https://nfc.dgtechsoln.com/3am-biryani-example/", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop" },
      ],
      "VEGETABLE AND FRUITS": [
        { name: "fruits and veg", link: "https://nfc.dgtechsoln.com/sabziwala-express/", image: "https://images.unsplash.com/photo-1610832745408-47b6cdbdb98a?w=300&h=200&fit=crop" },
      ],
      CAKE: [
        { name: "FACE CAKE", link: "https://site.dgtechsoln.com/face-cake-example/", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop" },
        { name: "CAKE LAKE", link: "https://site.dgtechsoln.com/cake-lake-example/", image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=300&h=200&fit=crop" },
      ],
      "TEA TIME": [
        { name: "TEA BENCH", link: "https://nfc.dgtechsoln.com/tea-bench-example/", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=200&fit=crop" },
        { name: "TEA BUNK", link: "https://site.dgtechsoln.com/tea-bunk-example/", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
        { name: "TEA DAY", link: "https://site.dgtechsoln.com/teaday-example/", image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300&h=200&fit=crop" },
      ],
      "COFEE POWDER": [
        { name: "ex2", link: "https://nfc.dgtechsoln.com/coffe-powder-example/", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=300&h=200&fit=crop" },
      ],
    },
    FOOD2: {
      PAAN: [
        { name: "THE PAAN SHOP", link: "https://nfc.dgtechsoln.com/the-paan-shop-example/", image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300&h=200&fit=crop" },
      ],
      PICKLE: [
        { name: "VANKIEES PICKLES", link: "https://nfc.dgtechsoln.com/vankiees-pickles/", image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300&h=200&fit=crop" },
      ],
      SWEET: [
        { name: "AGARWAL SWEETS", link: "https://nfc.dgtechsoln.com/agarwal-sweets-example/", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop" },
      ],
      BAKERY: [
        { name: "IYENGAR BAKERY", link: "https://site.dgtechsoln.com/bangalore-iyengar-bakery-cake-palace-example/", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop" },
      ],
      JUICE: [
        { name: "AMRIT JUICE BAR", link: "https://nfc.dgtechsoln.com/amrit-juice-bar/", image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=300&h=200&fit=crop" },
      ],
      SNACKS: [
        { name: "SNACKS CORNER", link: "https://nfc.dgtechsoln.com/snacks-example/", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=300&h=200&fit=crop" },
      ],
      "ICE CREAM": [
        { name: "ICE CREAM WORLD", link: "https://nfc.dgtechsoln.com/ice-cream-world-example/", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=200&fit=crop" },
      ],
    },
    "HOTEL/STAY": {
      "SMALL LODGE": [
        { name: "SMALL LODGE", link: "#", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=300&h=200&fit=crop" },
      ],
      "POSH LODGE": [
        { name: "EMBASSY GRAND", link: "https://nfc.dgtechsoln.com/embassy-grand-boarding-and-lodging-example/", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=300&h=200&fit=crop" },
      ],
      "HOME STAY": [
        { name: "LINGA CLASSIC HOMESTAY", link: "https://nfc.dgtechsoln.com/linga-classic-homestay-example/", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=300&h=200&fit=crop" },
      ],
      "OLD AGE HOME": [
        { name: "AARAMBH LIFE HOME", link: "https://nfc.dgtechsoln.com/aarambh-life-home/", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop" },
      ],
    },
    PG: {
      "MENS PG": [
        { name: "RSR LUXURY PG FOR GENTS", link: "https://nfc.dgtechsoln.com/rsr-luxury-pg-for-gents/", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=300&h=200&fit=crop" },
      ],
      "LADIES PG": [
        { name: "LADIES PG", link: "#", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop" },
      ],
    },
    CLOTHING: {
      "SILK AND SAREE": [
        { name: "PATTUPURA", link: "https://nfc.dgtechsoln.com/pattupura/", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=200&fit=crop" },
        { name: "M LINKU SAH SILKS", link: "https://nfc.dgtechsoln.com/m-linku-sah-silks/", image: "https://images.unsplash.com/photo-1594736797933-d0d6019d906a?w=300&h=200&fit=crop" },
        { name: "AARADHANA THE SILK TEMPLE", link: "https://nfc.dgtechsoln.com/aaradhana-the-silk-temple/", image: "https://images.unsplash.com/photo-1583391265844-6a3538ad27c0?w=300&h=200&fit=crop" },
        { name: "KEERTHANA SILKS SAREES", link: "https://nfc.dgtechsoln.com/keerthana-silks-sarees/", image: "https://images.unsplash.com/photo-1630736412350-3bd0c64d07fa?w=300&h=200&fit=crop" },
      ],
      BOUTIQUE: [
        { name: "BOUTIQUE MENS WOMENS", link: "https://nfc.dgtechsoln.com/boutique-mens-womens-example/", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop" },
      ],
      "MENS WEAR": [
        { name: "MENS WEAR CLOTHS", link: "https://nfc.dgtechsoln.com/mens-wear-cloths-example/", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
      ],
      "MENS MATERIALS": [
        { name: "URBANGENTS FABRICS", link: "https://nfc.dgtechsoln.com/urbangents-fabrics/", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=300&h=200&fit=crop" },
        { name: "MENS FABRICS", link: "https://nfc.dgtechsoln.com/urbangents-fabrics/", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=200&fit=crop" },
      ],
      "KIDS WEAR": [
        { name: "CHHOTA CLOSET", link: "https://nfc.dgtechsoln.com/chhota-closet/", image: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=300&h=200&fit=crop" },
      ],
      UNIFORM: [
        { name: "UNIFORMS WEATHER", link: "https://nfc.dgtechsoln.com/uniforms-weather-example/", image: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?w=300&h=200&fit=crop" },
        { name: "SONU FASHION", link: "https://site.dgtechsoln.com/sonu-fashion-example/", image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=300&h=200&fit=crop" },
      ],
      "INNER GARMENTS": [
        { name: "INNERWEARS", link: "https://nfc.dgtechsoln.com/innerwears-example/", image: "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=300&h=200&fit=crop" },
        { name: "JOCKEY SHOWROOM MANGALDEEP", link: "https://nfc.dgtechsoln.com/jockey-showroom-mangaldeep-example/", image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=300&h=200&fit=crop" },
      ],
      JOCKEY: [
        { name: "JOCKEY MENS AND WOMENS WEAR", link: "https://nfc.dgtechsoln.com/jockey-mens-and-womens-wear-example/", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=200&fit=crop" },
      ],
    },
    ELECTRONICS: {
      "MOBILE SHOP": [
        { name: "Mobile World", link: "#", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop" },
        { name: "Phone Plaza", link: "#", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&h=200&fit=crop" },
      ],
      "LAPTOP STORE": [
        { name: "Tech Solutions", link: "#", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop" },
        { name: "Computer Corner", link: "#", image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=300&h=200&fit=crop" },
      ]
    },
    HOSPITAL: {
      "GENERAL HOSPITAL": [
        { name: "City Hospital", link: "#", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=300&h=200&fit=crop" },
        { name: "Care Medical Center", link: "#", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=300&h=200&fit=crop" },
      ],
      "SPECIALTY CLINIC": [
        { name: "Heart Care Clinic", link: "#", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop" },
        { name: "Eye Care Center", link: "#", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop" },
      ]
    },
    "CLOTHING RENTAL": {
      "BRIDAL RENTAL": [
        { name: "Khaleesi Premium Bridal Rentals", link: "https://nfc.dgtechsoln.com/khaleesi-premium-bridal-rentals-example/", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=200&fit=crop" },
      ],
      "DANCE COSTUME RENTAL": [
        { name: "The Costume Factory", link: "https://nfc.dgtechsoln.com/the-costume-factory/", image: "https://images.unsplash.com/photo-1594736797933-d0d6019d906a?w=300&h=200&fit=crop" },
      ],
    },
    "CLOTH ACCESSORIES": {
      "ONLY THREAD SHOP": [
        { name: "Thread & Thimble", link: "https://nfc.dgtechsoln.com/thread-thimble/", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=300&h=200&fit=crop" },
      ],
      "ONLY BUTTONS": [
        { name: "Button Bazaar", link: "https://nfc.dgtechsoln.com/button-bazaar/", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=200&fit=crop" },
      ],
      "CUT PIECE MATERIALS": [
        { name: "Cut Piece Materials", link: "#", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=300&h=200&fit=crop" },
      ],
      "ALL CLOTH ACCESSORIES": [
        { name: "S P Textiles", link: "https://nfc.dgtechsoln.com/s-p-textiles-example/", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop" },
      ],
    },
    "TEXTILE BIG": {
      "BIG SHOPPING MALL": [
        { name: "Big Shopping Mall", link: "#", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop" },
      ],
    },
    TAILOR: {
      "MENS TAILOR": [
        { name: "Stitch Style Gents Tailors", link: "https://nfc.dgtechsoln.com/stitch-style-gents-tailors/", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
      ],
      BLAZER: [
        { name: "Urban Lapel", link: "https://nfc.dgtechsoln.com/urban-lapel/", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
      ],
      "LADIES TAILOR": [
        { name: "Femme Fit Tailors", link: "https://nfc.dgtechsoln.com/femme-fit-tailors/", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=200&fit=crop" },
      ],
      "BLOUSE RETAIL": [
        { name: "Mehfil Blouse House", link: "https://nfc.dgtechsoln.com/mehfil-blouse-house/", image: "https://images.unsplash.com/photo-1594736797933-d0d6019d906a?w=300&h=200&fit=crop" },
      ],
      "MAGAM WORK": [
        { name: "Magam Work", link: "#", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=300&h=200&fit=crop" },
      ],
      "EMBROIDERY SHOP": [
        { name: "Pure Roots Organics", link: "https://nfc.dgtechsoln.com/pure-roots-organics/", image: "https://images.unsplash.com/photo-1583391265844-6a3538ad27c0?w=300&h=200&fit=crop" },
      ],
    },
    FURNITURE: {
      FURNITURE: [
        { name: "Anakkallumkal Furniture", link: "https://site.dgtechsoln.com/anakkallumkal-furniture-example/", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop" },
      ],
      "OFFICE CHAIR AND TABLE": [
        { name: "Office Chairs Tables", link: "https://nfc.dgtechsoln.com/office-chairs-tables-example/", image: "https://images.unsplash.com/photo-1541558869434-2840d308329a?w=300&h=200&fit=crop" },
      ],
      MATTRESS: [
        { name: "Nocturne Mattresses", link: "https://nfc.dgtechsoln.com/nocturne-mattresses/", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop" },
      ],
      SOFA: [
        { name: "SofaLuxe Studio", link: "https://nfc.dgtechsoln.com/sofaluxe-studio/", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop" },
      ],
    },
    SPORT: {
      "SPORT COACHING": [
        { name: "Sports Club", link: "https://nfc.dgtechsoln.com/sports-club-example/", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop" },
      ],
      "SPORT SHOP": [
        { name: "Swagat Sports and Musicals", link: "https://nfc.dgtechsoln.com/swagat-sports-and-musicals-example/", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop" },
      ],
    },
    STATIONARY: {
      RETAIL: [
        { name: "V Mart Books and Stationery", link: "https://nfc.dgtechsoln.com/v-mart-books-and-stationery-pvt-ltd-example/", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop" },
      ],
      WHOLESALE: [
        { name: "Wholesale Stationery", link: "#", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop" },
      ],
      PEN: [
        { name: "The Signature Inkwell Co", link: "https://nfc.dgtechsoln.com/the-signature-inkwell-co/", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=300&h=200&fit=crop" },
      ],
      "FOLDERS AND DIARY": [
        { name: "Leatherleaf Stationers", link: "https://nfc.dgtechsoln.com/leatherleaf-stationers/", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop" },
      ],
    },
    FLOWER: {
      "FLOWER SHOP": [
        { name: "K Vijayarangan Pushpa Nilayam", link: "https://site.dgtechsoln.com/k-vijayarangan-phuspha-nilayam-example/", image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=300&h=200&fit=crop" },
        { name: "RJ Flower Decoration", link: "https://nfc.dgtechsoln.com/rj-flower-decoration-example/", image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=300&h=200&fit=crop" },
      ],
      "ONLY BOUQUETS": [
        { name: "Bloomwell Flowers", link: "https://nfc.dgtechsoln.com/bloomwell-flowers/", image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=300&h=200&fit=crop" },
      ],
    },
    PET: {
      "PET SHOP/AQUARIUM/BIRDS": [
        { name: "KSA Blue Star Aquarium Pets", link: "https://site.dgtechsoln.com/ksa-blue-star-aquarium-pets-example/", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=200&fit=crop" },
      ],
      "PET GROOMING": [
        { name: "Pet Spa", link: "https://nfc.dgtechsoln.com/pet-spa-example/", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=200&fit=crop" },
        { name: "Pet Grooming Center", link: "https://nfc.dgtechsoln.com/pet-grooming-example/", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=200&fit=crop" },
      ],
      "PET BOARDING": [
        { name: "Tailtown Boarding", link: "https://nfc.dgtechsoln.com/tailtown-boarding/", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=200&fit=crop" },
      ],
      "PET CLINIC": [
        { name: "Pet Clinic", link: "#", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=200&fit=crop" },
      ],
    },
    COSMETICS: {
      "COSMETIC SHOP": [
        { name: "Cosmetics Store", link: "https://nfc.dgtechsoln.com/cosmetics-example/", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=200&fit=crop" },
      ],
      "FANCY SHOP": [
        { name: "Gaurav Fancy Store", link: "https://nfc.dgtechsoln.com/gaurav-fancy-store-example/", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=200&fit=crop" },
        { name: "Shringar Novelty", link: "https://site.dgtechsoln.com/shringar-novelty-example/", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=200&fit=crop" },
      ],
      BANGLE: [
        { name: "Vannam Bangles", link: "https://nfc.dgtechsoln.com/vannam-bangles/", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop" },
      ],
      "ONE GRAM GOLD": [
        { name: "One Gram Gold", link: "#", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop" },
      ],
      "IMITATION JEWEL": [
        { name: "Riwaayat Jewels", link: "https://nfc.dgtechsoln.com/riwaayat-jewels/", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop" },
      ],
      GIFT: [
        { name: "Bhagavathi Gift House", link: "https://nfc.dgtechsoln.com/bhagavathi-gift-house-example/", image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop" },
      ],
    },
    "REAL ESTATE": {
      AGENT: [
        { name: "Real Estate Agent", link: "#", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop" },
      ],
      "BUILDERS AND CONSTRUCTIONS": [
        { name: "Leafy Properties", link: "https://nfc.dgtechsoln.com/leffy-properties-example/", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop" },
        { name: "Vistacore Realtors", link: "https://nfc.dgtechsoln.com/vistacore-realtors/", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop" },
      ],
    },
    GROCERY: {
      KIRANA: [
        { name: "Eswar Rao Kirana Store", link: "https://nfc.dgtechsoln.com/eswar-rao-kirana-store/", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop" },
      ],
      "SUPERMARKET/DEPARTMENTAL STORE": [
        { name: "Evergreen Market", link: "https://nfc.dgtechsoln.com/evergreen-market/", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop" },
      ],
      "RICE TRADERS": [
        { name: "Naidu Rice Traders", link: "https://nfc.dgtechsoln.com/naidu-rice-traders/", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop" },
      ],
      PICKLES: [
        { name: "Vankiees Pickles", link: "https://nfc.dgtechsoln.com/vankiees-pickles/", image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300&h=200&fit=crop" },
      ],
      "ONLY JAGGERY": [
        { name: "The Jaggery House", link: "https://nfc.dgtechsoln.com/the-jaggery-house/", image: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=300&h=200&fit=crop" },
      ],
      "DRY FRUIT": [
        { name: "Pure Roots Organics", link: "https://nfc.dgtechsoln.com/pure-roots-organics/", image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=300&h=200&fit=crop" },
      ],
    },
    MOBILE: {
      "MOBILE RETAIL SALES": [
        { name: "Mobile Retail Sales", link: "#", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop" },
      ],
      "MOBILE SERVICE": [
        { name: "Mobile Service Center", link: "https://nfc.dgtechsoln.com/mobile-service-example/", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&h=200&fit=crop" },
      ],
      "MOBILE ACCESSORIES": [
        { name: "Sri Gayatri Mobile and Computers", link: "https://nfc.dgtechsoln.com/sri-gayatri-mobile-and-computers-example/", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&h=200&fit=crop" },
      ],
      WHOLESALE: [
        { name: "Wholesale Mobile", link: "#", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop" },
      ],
      APPLE: [
        { name: "Apple Store Valanchery", link: "https://nfc.dgtechsoln.com/apple-store-valanchery-example/", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop" },
      ],
      SAMSUNG: [
        { name: "Samsung Smart Store", link: "https://nfc.dgtechsoln.com/samsung-smart-store/", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop" },
      ],
      "MOBILE SPARE PARTS": [
        { name: "Mobile Spare Parts", link: "https://nfc.dgtechsoln.com/pure-roots-organics/", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&h=200&fit=crop" },
      ],
    },
    LAPTOP: {
      "LAPTOP SALES": [
        { name: "Gadget Junction", link: "https://nfc.dgtechsoln.com/gadget-junction/", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop" },
      ],
      "LAPTOP ACCESSORIES": [
        { name: "Karthik Laptop World", link: "https://site.dgtechsoln.com/karthik-laptop-world-example/", image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=300&h=200&fit=crop" },
        { name: "Laptop Accessories", link: "https://nfc.dgtechsoln.com/gadget-junction/", image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=300&h=200&fit=crop" },
      ],
      "LAPTOP SERVICE CENTRE": [
        { name: "Laptop Service Centre", link: "https://nfc.dgtechsoln.com/laptop-service-centre-example/", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
      ],
      "MACBOOK SALES AND SERVICE": [
        { name: "MacBook Service", link: "https://nfc.dgtechsoln.com/laptop-service-centre-example/", image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=200&fit=crop" },
      ],
    },
    ELECTRONICS: {
      "REMOTE SHOP": [
        { name: "Remote Shop", link: "https://nfc.dgtechsoln.com/remote-shop-example/", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
      ],
      "AC SHOP": [
        { name: "AC Service", link: "https://nfc.dgtechsoln.com/ac-service-example/", image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=300&h=200&fit=crop" },
      ],
      "ELECTRONIC(EVERYTHING MIX)": [
        { name: "Raj Electronics", link: "https://site.dgtechsoln.com/raj-electronics-example/", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
      ],
      SPEAKERS: [
        { name: "Speakers World", link: "https://nfc.dgtechsoln.com/speakers-world-example/", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=200&fit=crop" },
      ],
      "HOME APPLIANCES": [
        { name: "Home Appliances", link: "https://nfc.dgtechsoln.com/home-appliancess-example/", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
      ],
      "PRESTIGE HOME APPLIANCE": [
        { name: "Prestige Home Appliance", link: "https://nfc.dgtechsoln.com/prestige-home-appliance/", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
      ],
      GADGETS: [
        { name: "Anandit Infotech India Pvt Ltd", link: "https://nfc.dgtechsoln.com/anandit-infotech-india-pvt-ltd-example/", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&h=200&fit=crop" },
      ],
    },
    ELECTRICAL: {
      "ALL MIX": [
        { name: "Classical Electricals", link: "https://nfc.dgtechsoln.com/classical-electricals/", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=300&h=200&fit=crop" },
      ],
      LIGHT: [
        { name: "BrightEdge", link: "https://nfc.dgtechsoln.com/brightedge/", image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop" },
      ],
      SWITCH: [
        { name: "Switches Shop", link: "https://nfc.dgtechsoln.com/switches-shop-example/", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=300&h=200&fit=crop" },
      ],
      "CABLES/WIRES": [
        { name: "Voltline Cables", link: "https://nfc.dgtechsoln.com/voltline-cables/", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=300&h=200&fit=crop" },
      ],
      "FAN SHOP": [
        { name: "The Fan Stop", link: "https://nfc.dgtechsoln.com/the-fan-stop/", image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=300&h=200&fit=crop" },
      ],
    },
    BATTERY: {
      BATTERY: [
        { name: "SN Battery Point", link: "https://nfc.dgtechsoln.com/sn-battery-point-example/", image: "https://images.unsplash.com/photo-1609592817899-ac687e0a91d0?w=300&h=200&fit=crop" },
        { name: "Sri Kalpana Battery Centre", link: "https://nfc.dgtechsoln.com/sri-kalpana-battery-centre-example/", image: "https://images.unsplash.com/photo-1609592817899-ac687e0a91d0?w=300&h=200&fit=crop" },
      ],
      "SOLAR PANEL": [
        { name: "SolarNest Solutions", link: "https://nfc.dgtechsoln.com/solarnest-solutions/", image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=300&h=200&fit=crop" },
      ],
      GENERATORS: [
        { name: "C M Generator Rent", link: "https://nfc.dgtechsoln.com/c-m-generator-rent-example/", image: "https://images.unsplash.com/photo-1609592817899-ac687e0a91d0?w=300&h=200&fit=crop" },
      ],
      UPS: [
        { name: "PowerVault India", link: "https://nfc.dgtechsoln.com/powervault-india/", image: "https://images.unsplash.com/photo-1609592817899-ac687e0a91d0?w=300&h=200&fit=crop" },
      ],
    },
    MOTORS: {
      "TARO PUMPS": [
        { name: "Taro Pumps", link: "#", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop" },
      ],
      BOREWELLS: [
        { name: "Sunil Borewell", link: "https://nfc.dgtechsoln.com/sunil-borewell-example/", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop" },
      ],
      "MOTOR PUMPS": [
        { name: "Sri Lakshmi Traders Texmo Motors", link: "https://nfc.dgtechsoln.com/sri-lakshmi-traders-texmo-motors-pumpsets-generators-example/", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop" },
      ],
    },
    PLUMBING: {
      "PIPE AND CEMENT": [
        { name: "SolidFlow Supplies", link: "https://nfc.dgtechsoln.com/solidflow-supplies/", image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=300&h=200&fit=crop" },
      ],
      "SS PIPE FITTINGS": [
        { name: "SS Pipe Fittings", link: "https://nfc.dgtechsoln.com/ss-pipe-fittings-example/", image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=300&h=200&fit=crop" },
      ],
      "PIPING MATERIALS": [
        { name: "Piping Materials", link: "#", image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=300&h=200&fit=crop" },
      ],
    },
    JEWELLERY: {
      GOLD: [
        { name: "Gold Jewellery", link: "#", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop" },
      ],
      "ONE GRAM": [
        { name: "One Gram Gold", link: "#", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop" },
      ],
      "ONLY SILVER": [
        { name: "Siya Fine Silver Jewellery", link: "https://nfc.dgtechsoln.com/siya-fine-silver-jewellery-example/", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop" },
      ],
      "PEARL AND GEM": [
        { name: "My Pearl World", link: "https://nfc.dgtechsoln.com/my-pearl-world-example/", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop" },
        { name: "Janatha Gems", link: "https://nfc.dgtechsoln.com/janatha-gems-example/", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop" },
      ],
      "SILVER PHOTO FRAME": [
        { name: "Silver Photo Frame", link: "https://nfc.dgtechsoln.com/silver-photo-frame-example/", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop" },
      ],
      BANGLES: [
        { name: "Vannam Bangles", link: "https://nfc.dgtechsoln.com/vannam-bangles/", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop" },
      ],
      "JEWELLERY TOOLS": [
        { name: "Jewellery Tools", link: "https://nfc.dgtechsoln.com/jewellery-tools-example/", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop" },
      ],
      "GOLD MELTING": [
        { name: "Gold Melting Shops", link: "https://nfc.dgtechsoln.com/gold-melting-shops-example/", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop" },
      ],
    },
    WOOD: {
      TIMBER: [
        { name: "TimberCore India", link: "https://nfc.dgtechsoln.com/timbercore-india/", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop" },
      ],
      PLYWOOD: [
        { name: "Shree Navdurga Plywoods", link: "https://nfc.dgtechsoln.com/shree-navdurga-plywoods-example/", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop" },
        { name: "Nandana Glass and Plywoods", link: "https://nfc.dgtechsoln.com/nandana-glass-and-plywoods-example/", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop" },
      ],
      DOORS: [
        { name: "Cuirass Steel Doors", link: "https://nfc.dgtechsoln.com/cuirass-steel-doors-example/", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop" },
      ],
      "SAW MILL": [
        { name: "Saw Mill", link: "#", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop" },
      ],
    },
    "BUILDING MATERIALS": {
      ALUMINIUM: [
        { name: "Century Aluminium Steel", link: "https://site.dgtechsoln.com/century-aluminium-steel-example/", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=300&h=200&fit=crop" },
      ],
      WELDING: [
        { name: "Welding Shop", link: "https://nfc.dgtechsoln.com/welding-shop-example/", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=300&h=200&fit=crop" },
      ],
      "ENGINEERING STAINLESS STEELS": [
        { name: "Engineering Stainless Steels", link: "#", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=300&h=200&fit=crop" },
      ],
      "RAILING WORK": [
        { name: "Best India Metals", link: "https://nfc.dgtechsoln.com/best-india-metals-example/", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=300&h=200&fit=crop" },
      ],
      "IRON AND STEEL ROD": [
        { name: "Century Aluminium", link: "https://site.dgtechsoln.com/century-aluminium-steel-example/", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=300&h=200&fit=crop" },
      ],
      CEMENT: [
        { name: "Cement", link: "#", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=300&h=200&fit=crop" },
      ],
      "STEEL DOORS": [
        { name: "Steel Doors", link: "#", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop" },
      ],
      TIMBER: [
        { name: "TimberCore India", link: "https://nfc.dgtechsoln.com/timbercore-india/", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop" },
      ],
      BRICKS: [
        { name: "The Brick Store", link: "https://nfc.dgtechsoln.com/the-brick-store-example/", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=300&h=200&fit=crop" },
      ],
      GLASS: [
        { name: "The Glass Boutique", link: "https://nfc.dgtechsoln.com/the-glass-boutique/", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=300&h=200&fit=crop" },
      ],
    },
    "OTHER BUILDING MATERIALS": {
      PAINT: [
        { name: "Sri Renuka Paints", link: "https://nfc.dgtechsoln.com/sri-renuka-paints-example/", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop" },
      ],
      HARDWARE: [
        { name: "Hardware Planet Co", link: "https://site.dgtechsoln.com/hardware-planet-co-example/", image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=200&fit=crop" },
      ],
      "SANITARY/TILES": [
        { name: "Imperial Tile Depot", link: "https://nfc.dgtechsoln.com/imperial-tile-depot/", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=300&h=200&fit=crop" },
      ],
      MARBLES: [
        { name: "Dakshinak Minerals LLP", link: "https://nfc.dgtechsoln.com/dakshinak-minerals-llp-example/", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=300&h=200&fit=crop" },
      ],
    },
    BIKE: {
      "BIKE REPAIR /MECHANIC": [
        { name: "Bike Service Point", link: "https://nfc.dgtechsoln.com/bike-service-point-example/", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
        { name: "BZ Bike Zone Unit 2", link: "https://site.dgtechsoln.com/bz-bike-zone-unit-2-example/", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
      ],
      "BIKE SERVICE AND ACCESSORIES": [
        { name: "Royal Bike Point", link: "https://site.dgtechsoln.com/royal-bike-point-example/", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
      ],
      "BIKE CONSULTANCY AND FINANCE": [
        { name: "Perfect Auto Consultants", link: "https://site.dgtechsoln.com/perfect-auto-consultants-example/", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop" },
      ],
      "BIKE SHOWROOM": [
        { name: "Bikes World", link: "https://nfc.dgtechsoln.com/bikes-world-example/", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop" },
      ],
      "BIKE STICKERING": [
        { name: "Bike Stickering Shop", link: "https://nfc.dgtechsoln.com/bike-stickering-shop-example/", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop" },
      ],
      "BIKE RENTAL": [
        { name: "TrailTrek Rentals", link: "https://nfc.dgtechsoln.com/trailtrek-rentals/", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop" },
      ],
      "2ND HAND BIKE": [
        { name: "Perfect Auto Consultants", link: "https://site.dgtechsoln.com/perfect-auto-consultants-example/", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop" },
      ],
    },
    CAR: {
      "CAR REPAIR/MECHANIC AND ACCESSORIES": [
        { name: "First Choice Car Care", link: "https://nfc.dgtechsoln.com/first-choice-car-care-car-accessories-example/", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&h=200&fit=crop" },
      ],
      "CAR MODIFICATIONS": [
        { name: "Car Modification Centre", link: "https://nfc.dgtechsoln.com/car-modification-centre-example/", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&h=200&fit=crop" },
      ],
      "CAR SHOWROOM": [
        { name: "Car Showroom", link: "https://nfc.dgtechsoln.com/car-showroom-example/", image: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?w=300&h=200&fit=crop" },
      ],
      "2ND HAND CAR": [
        { name: "QZ Moto Hub", link: "https://site.dgtechsoln.com/qz-moto-hub-example/", image: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?w=300&h=200&fit=crop" },
      ],
      "CAR DRIVING SCHOOL": [
        { name: "Alfa School of Driving", link: "https://site.dgtechsoln.com/alfa-school-of-driving-example/", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop" },
      ],
      "CAR RENTAL": [
        { name: "Car Rental", link: "#", image: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?w=300&h=200&fit=crop" },
      ],
      "CAR CONSULTANCY AND FINANCE": [
        { name: "Car Consultancy and Finance", link: "#", image: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?w=300&h=200&fit=crop" },
      ],
    },
    CYCLE: {
      "CYCLE REPAIR": [
        { name: "Cycle Repair Shop", link: "https://nfc.dgtechsoln.com/cycle-repair-shop-example/", image: "https://images.unsplash.com/photo-1544191696-15ca3b994ed3?w=300&h=200&fit=crop" },
      ],
      "CYCLE SALES": [
        { name: "Busnur Cycles", link: "https://nfc.dgtechsoln.com/busnur-cycles-example/", image: "https://images.unsplash.com/photo-1544191696-15ca3b994ed3?w=300&h=200&fit=crop" },
      ],
    },
    HOSPITAL: {
      MULTISPECIALITY: [
        { name: "Deepan Hospital", link: "https://nfc.dgtechsoln.com/deepan-hospital-example/", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=300&h=200&fit=crop" },
        { name: "Ramakrishna Medical Centre", link: "https://nfc.dgtechsoln.com/ramakrishna-medical-centre-llp-example/", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=300&h=200&fit=crop" },
        { name: "Medical Template Demo", link: "https://nfc.dgtechsoln.com/medical-template/", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=300&h=200&fit=crop" },
        { name: "Ponne Hospital", link: "https://nfc.dgtechsoln.com/ponne-hospitalz-a-unit-of-tmch-example/", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=300&h=200&fit=crop" },
      ],
      NEURO: [
        { name: "Rockfort Neurocentre", link: "https://nfc.dgtechsoln.com/rockfort-neurocentre-example/", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop" },
      ],
      PEDIATRIC: [
        { name: "Pediatrician", link: "https://nfc.dgtechsoln.com/pediatrician-example/", image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=300&h=200&fit=crop" },
      ],
      "EYE CARE": [
        { name: "ClearView Eye Center", link: "https://nfc.dgtechsoln.com/clearview-eye-center/", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop" },
      ],
      DERMATOLOGY: [
        { name: "Dr Pai Skin Hair and Healthcare Clinic", link: "https://site.dgtechsoln.com/dr-pai-skin-hair-and-healthcare-clinic-example/", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop" },
      ],
      PSYCHIATRIC: [
        { name: "Psychiatrist", link: "https://nfc.dgtechsoln.com/psychiatrist-example/", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop" },
      ],
      PSYCHOLOGIST: [
        { name: "InnerPath Wellness", link: "https://nfc.dgtechsoln.com/innerpath-wellness/", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop" },
      ],
      DEADDICTION: [
        { name: "Shanvi Mind Care and Deaddiction Centre", link: "https://nfc.dgtechsoln.com/shanvi-mind-care-and-deaddiction-centre-example/", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop" },
      ],
      GYNIC: [
        { name: "Thambiran Maternity Children Hospital", link: "https://nfc.dgtechsoln.com/thambiran-maternity-children-hospital-shivani-fertility-centre-example/", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop" },
      ],
      ORTHO: [
        { name: "Venkatesh Ortho Trauma Speciality Hospital", link: "https://site.dgtechsoln.com/venkatesh-ortho-trauma-speciality-hospital-exapmle/", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop" },
      ],
      HOMEOPATHY: [
        { name: "Homeopathy Clinic", link: "https://nfc.dgtechsoln.com/homeopathy-example/", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop" },
      ],
      ANAESTHESIA: [
        { name: "Anaesthesia", link: "#", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop" },
      ],
      AYURVEDIC: [
        { name: "Anaamaya Ayurveda", link: "https://nfc.dgtechsoln.com/anaamaya-ayurveda-example/", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop" },
      ],
      NATUROPATHY: [
        { name: "Naturopathy", link: "#", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop" },
      ],
      CARDIOLOGIST: [
        { name: "Cardiologist", link: "https://nfc.dgtechsoln.com/cardiologist-example/", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop" },
      ],
    },
    DENTAL: {
      "DENTAL CLINIC": [
        { name: "Dr Richu Dr Essas Dent Care Centre", link: "https://nfc.dgtechsoln.com/dr-richu-dr-essas-dent-care-centre-example/", image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=300&h=200&fit=crop" },
        { name: "Dr Bens Mary Matha Dental Clinic", link: "https://site.dgtechsoln.com/dr-bens-mary-matha-dental-clinic-example/", image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=300&h=200&fit=crop" },
        { name: "Sri Akshaya Dental Care", link: "https://nfc.dgtechsoln.com/sri-akshaya-dental-care-and-implant-center-example/", image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=300&h=200&fit=crop" },
        { name: "GG Dental", link: "https://nfc.dgtechsoln.com/gg-dental-example/", image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=300&h=200&fit=crop" },
        { name: "Dr Reshmas Dental Care", link: "https://nfc.dgtechsoln.com/dr-reshmas-dental-care-example/", image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=300&h=200&fit=crop" },
      ],
    },
    DIAGNOSTICS: {
      "DIAGNOSTICS CENTER": [
        { name: "Vivid Imaging and Diagnostics", link: "https://nfc.dgtechsoln.com/vivid-imaging-and-diagnostics-example/", image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=300&h=200&fit=crop" },
      ],
    },
    MEDICALS: {
      "MEDICAL RETAIL": [
        { name: "Bawaa Medicals", link: "https://nfc.dgtechsoln.com/bawaa-medicals-example/", image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=300&h=200&fit=crop" },
      ],
      "MEDICALS WHOLESALE/DISTRIBUTORS": [
        { name: "Bawaa Medicals Wholesale", link: "https://nfc.dgtechsoln.com/bawaa-medicals-example/", image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=300&h=200&fit=crop" },
      ],
      "SURGICALS RETAIL": [
        { name: "Surgical Store", link: "https://nfc.dgtechsoln.com/solarnest-solutions/", image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=300&h=200&fit=crop" },
      ],
      "SURGICAL DISTRIBUTOR": [
        { name: "MedEquip Wholesale", link: "https://nfc.dgtechsoln.com/medequip-wholesale/", image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=300&h=200&fit=crop" },
      ],
      "AYURVEDIC MEDICAL": [
        { name: "Ayur Pharma", link: "https://nfc.dgtechsoln.com/ayur-pharma-example/", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop" },
        { name: "Prakruti The Ayurveda Store", link: "https://nfc.dgtechsoln.com/prakruti-the-ayurveda-store-example/", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop" },
      ],
    },
    "OVERSEAS CONSULTANCY": {
      "UNIVERSAL CONSULTANCY": [
        { name: "Universal Educational Consultancy", link: "https://nfc.dgtechsoln.com/universal-educational-consultancy-example/", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop" },
      ],
    },
    INSTITUTE: {
      SCHOOL: [
        { name: "Hillview International School", link: "https://nfc.dgtechsoln.com/hillview-international-school/", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=300&h=200&fit=crop" },
      ],
      PRESCHOOL: [
        { name: "Iris Florets Pre School Daycare", link: "https://nfc.dgtechsoln.com/iris-florets-pre-school-daycare-example/", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop" },
        { name: "Iris Florets The Happy Play School", link: "https://nfc.dgtechsoln.com/iris-florets-the-happy-play-school-example/", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop" },
        { name: "WowKids Prodigy Academy Pre School", link: "https://nfc.dgtechsoln.com/wowkids-prodigy-academy-pre-school-example/", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop" },
        { name: "Dazzling Ducklings", link: "https://nfc.dgtechsoln.com/dazzling-ducklings-example/", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop" },
      ],
      COLLEGE: [
        { name: "Sethu Institute of Technology", link: "https://site.dgtechsoln.com/sethu-institute-of-technology-example/", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop" },
        { name: "Logos Institute of Management and Technology", link: "https://nfc.dgtechsoln.com/logos-institute-of-management-and-technology-example/", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop" },
        { name: "Datatec Skill Academy", link: "https://nfc.dgtechsoln.com/datatec-skill-academy-example/", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop" },
      ],
      "COMPUTER INSTITUTE": [
        { name: "G Tec Computer Education", link: "https://nfc.dgtechsoln.com/g-tec-computer-education-example/", image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=200&fit=crop" },
      ],
    },
    "ART SCHOOL/FITNESS": {
      "MUSIC ACADEMY": [
        { name: "Music Academy", link: "https://nfc.dgtechsoln.com/music-academy-example/", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop" },
      ],
      "MUSIC INSTRUMENT ACADEMY": [
        { name: "Music Instrument Academy", link: "#", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop" },
      ],
      "DANCE ACADEMY": [
        { name: "JJ Dance Fusion", link: "https://nfc.dgtechsoln.com/jj-dance-fusion-example/", image: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=300&h=200&fit=crop" },
      ],
      "PAINT ACADEMY": [
        { name: "Painting Academy", link: "https://nfc.dgtechsoln.com/painting-academy-example/", image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop" },
      ],
      "MARTIAL ARTS/KARATE": [
        { name: "Shinjidai Sports Academy", link: "https://nfc.dgtechsoln.com/shinjidai-sports-academy-example/", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=200&fit=crop" },
      ],
      "SKATING COACHING": [
        { name: "Rockers Speed Skating Academy", link: "https://site.dgtechsoln.com/rockers-speed-skating-academy-example/", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop" },
      ],
      "SPORTS COACHING": [
        { name: "Sports Club", link: "https://nfc.dgtechsoln.com/sports-club-example/", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop" },
      ],
      "YOGA INSTITUTE": [
        { name: "ShantiFlow Yoga", link: "https://nfc.dgtechsoln.com/shantiflow-yoga/", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68e71?w=300&h=200&fit=crop" },
      ],
      GYM: [
        { name: "The Professional Fitness Club", link: "https://nfc.dgtechsoln.com/the-professional-fitness-club-example/", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop" },
      ],
    },
    "ART ACCESSORIES": {
      "PAINT ACCESSORIES": [
        { name: "Painting Accessories", link: "https://nfc.dgtechsoln.com/painting-accessories-example/", image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop" },
      ],
      "MUSIC INSTRUMENT SALES": [
        { name: "Swagat Sports and Musicals", link: "https://nfc.dgtechsoln.com/swagat-sports-and-musicals-example/", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop" },
        { name: "The Music Vault", link: "https://nfc.dgtechsoln.com/the-music-vault/", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop" },
      ],
      "DANCE DRESS SALES": [
        { name: "The Costume Factory", link: "https://nfc.dgtechsoln.com/the-costume-factory/", image: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=300&h=200&fit=crop" },
      ],
      "SPORTS ITEMS": [
        { name: "Rajendra Sports", link: "https://site.dgtechsoln.com/rajendra-sports-example/", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop" },
      ],
    },
    "NET/MESH": {
      "MOSQUITO MESH": [
        { name: "Mosquito Net", link: "https://nfc.dgtechsoln.com/mosquito-net-example/", image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=300&h=200&fit=crop" },
      ],
      "FISHING ITEMS": [
        { name: "The Fishermans Cove", link: "https://nfc.dgtechsoln.com/the-fishermans-cove/", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop" },
      ],
    },
    "INTERIORS/HOUSE RELATED": {
      INTERIORS: [
        { name: "Interiors", link: "https://nfc.dgtechsoln.com/interiors-example/", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop" },
      ],
      CHIMNEYS: [
        { name: "Kitchen Chimneys", link: "https://nfc.dgtechsoln.com/kitchen-chimneys-example/", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop" },
      ],
      "HOME DECORS": [
        { name: "Mannoor Home Decor", link: "https://site.dgtechsoln.com/mannoor-home-decor-example/", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop" },
      ],
      "HOME FURNISHING": [
        { name: "Home Furnishing", link: "#", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop" },
      ],
      MATTRESS: [
        { name: "Nocturne Mattresses", link: "https://nfc.dgtechsoln.com/nocturne-mattresses/", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop" },
      ],
      "HOUSE KEEPING ITEMS": [
        { name: "House Utility Hub", link: "https://nfc.dgtechsoln.com/house-utility-hub/", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop" },
      ],
      "CURTAINS/WALLPAPER": [
        { name: "Urban Blinds Beyond", link: "https://nfc.dgtechsoln.com/urban-blinds-beyond/", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop" },
      ],
      KITCHEN: [
        { name: "Kitchen Ware Items", link: "https://nfc.dgtechsoln.com/kitchen-ware-items-example/", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop" },
      ],
    },
    "METALS/CRAFTS": {
      "GOD IDOLS": [
        { name: "Ganesan Karpaka Vilas", link: "https://nfc.dgtechsoln.com/ganesan-karpaka-vilas-example/", image: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=300&h=200&fit=crop" },
        { name: "Maragatha Lakshmi Pathira Maligai", link: "https://nfc.dgtechsoln.com/maragatha-lakshmi-pathira-maligai-example/", image: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=300&h=200&fit=crop" },
      ],
      "PAATHIRAI/METALS SHOP": [
        { name: "Paathirai/Metals Shop", link: "#", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=300&h=200&fit=crop" },
      ],
      METAL: [
        { name: "Best India Metals", link: "https://nfc.dgtechsoln.com/best-india-metals-example/", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=300&h=200&fit=crop" },
      ],
    },
    SALOON: {
      "MENS SALOON SMALL": [
        { name: "Mens Salon", link: "https://nfc.dgtechsoln.com/mens-salon-example/", image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=300&h=200&fit=crop" },
      ],
      "SMALL SALOON": [
        { name: "Small Saloon", link: "#", image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=300&h=200&fit=crop" },
      ],
      "BIG SALOON": [
        { name: "Big Saloon", link: "#", image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=300&h=200&fit=crop" },
      ],
    },
    "SERVICE CENTERS": {
      "MOBILE SERVICE CENTER": [
        { name: "Mobile Service", link: "https://nfc.dgtechsoln.com/mobile-service-example/", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&h=200&fit=crop" },
      ],
      "LAPTOP SERVICE CENTER": [
        { name: "Laptop Service", link: "https://nfc.dgtechsoln.com/laptop-service-centre-example/", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
      ],
      "AC SERVICE CENTER": [
        { name: "AC Service", link: "https://nfc.dgtechsoln.com/ac-service-example/", image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=300&h=200&fit=crop" },
      ],
      "WASHING MACHINE SERVICE CENTER": [
        { name: "Washing Machine Service", link: "https://nfc.dgtechsoln.com/ac-service-example/", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
      ],
      "ELECTRONIC ITEMS SERVICE CENTER": [
        { name: "Electronic Items Service Center", link: "#", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
      ],
    },
    "SERVICE CENTERS": {
      "MOBILE SERVICE CENTER": [
        { name: "Mobile Service", link: "https://nfc.dgtechsoln.com/mobile-service-example/", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&h=200&fit=crop" },
      ],
      "LAPTOP SERVICE CENTER": [
        { name: "Laptop Service", link: "https://nfc.dgtechsoln.com/laptop-service-centre-example/", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
      ],
      "AC SERVICE CENTER": [
        { name: "AC Service", link: "https://nfc.dgtechsoln.com/ac-service-example/", image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=300&h=200&fit=crop" },
      ],
      "WASHING MACHINE SERVICE CENTER": [
        { name: "Washing Machine Service", link: "https://nfc.dgtechsoln.com/ac-service-example/", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
      ],
      "ELECTRONIC ITEMS SERVICE CENTER": [
        { name: "Electronic Items Service Center", link: "#", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
      ],
    },
    "BAGS/TROLLEYS": {
      "BAGS": [
        { name: "Velve Bags", link: "https://nfc.dgtechsoln.com/velve-bags/", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop" },
        { name: "Nauti Crew", link: "https://nfc.dgtechsoln.com/nauti-crew-example/", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop" },
      ],
    },
    TATTOO: {
      "TATTOO STUDIO": [
        { name: "Tattoos World", link: "https://nfc.dgtechsoln.com/tattoos-world-example/", image: "https://images.unsplash.com/photo-1565058379802-bbe93b2d0360?w=300&h=200&fit=crop" },
      ],
    },
    OPTICALS: {
      "OPTICAL SHOP": [
        { name: "Bachewar Opticals", link: "https://nfc.dgtechsoln.com/bachewar-opticals-example/", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=300&h=200&fit=crop" },
      ],
    },
    "PACKAGING PRODUCTS": {
      "MARKETING/PACKAGING": [
        { name: "Sri Balaji Marketing", link: "https://nfc.dgtechsoln.com/shree-balaji-marketing-example/", image: "https://images.unsplash.com/photo-1586262462859-6e5e37b55d57?w=300&h=200&fit=crop" },
        { name: "Box Bulk Packaging", link: "https://nfc.dgtechsoln.com/box-bulk-packaging/", image: "https://images.unsplash.com/photo-1586262462859-6e5e37b55d57?w=300&h=200&fit=crop" },
      ],
    },
    PESTICIDES: {
      "AGRO PESTICIDES": [
        { name: "Agro Agency Pesticides", link: "https://nfc.dgtechsoln.com/agro-agency-pesticides-example/", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&h=200&fit=crop" },
      ],
    },
    "PLASTIC ITEMS": {
      "PLASTIC PRODUCTS": [
        { name: "Plastic Items", link: "https://nfc.dgtechsoln.com/plastic-items-example/", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
      ],
    },
    "POWER TOOLS": {
      "POWER TOOLS": [
        { name: "A M Power Tools", link: "https://site.dgtechsoln.com/new-a-m-power-tools-example/", image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=200&fit=crop" },
      ],
    },
    PRINTING: {
      "PRINT SERVICES": [
        { name: "Print World", link: "https://site.dgtechsoln.com/print-world-example/", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
        { name: "Ink Pot", link: "https://site.dgtechsoln.com/ink-pot-example/", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
      ],
    },
    "HOARDINGS BUSINESS": {
      "HOARDING BUSINESS": [
        { name: "JK Commercials", link: "https://nfc.dgtechsoln.com/jk-commercials-example/", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
      ],
    },
    "WEDDING CARDS": {
      "WEDDING CARDS": [
        { name: "Wedding Cards", link: "https://nfc.dgtechsoln.com/wedding-cards-example/", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=200&fit=crop" },
      ],
    },
    "PREMIUM GIFT SHOP": {
      "GIFT SHOPS": [
        { name: "Maruthi Craft Gifts", link: "https://site.dgtechsoln.com/maruthi-craft-gifts-example/", image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop" },
        { name: "Bhagavathi Gift House", link: "https://nfc.dgtechsoln.com/bhagavathi-gift-house-example/", image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop" },
        { name: "Premium Gift Shop", link: "https://nfc.dgtechsoln.com/premium-gift-shop-example/", image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop" },
      ],
    },
    "EVENT MANAGEMENT": {
      "EVENT MANAGEMENT": [
        { name: "Namma Party House", link: "https://nfc.dgtechsoln.com/nam-party-celebrations-examples/", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=200&fit=crop" },
      ],
    },
    TROPHIES: {
      "TROPHY SHOP": [
        { name: "TrophyCraft", link: "https://nfc.dgtechsoln.com/trophycraft/", image: "https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?w=300&h=200&fit=crop" },
      ],
    },
    TYRE: {
      "TYRE SHOP": [
        { name: "Tyre Shop", link: "#", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
      ],
    },
    TARPAULIN: {
      "TARPAULIN SHOP": [
        { name: "Shree Krishna Tarpaulin Polymer", link: "https://site.dgtechsoln.com/shree-krishna-tarpaulin-polymer-example/", image: "https://images.unsplash.com/photo-1586262462859-6e5e37b55d57?w=300&h=200&fit=crop" },
      ],
    },
    TOY: {
      "TOY SHOP": [
        { name: "Philips Green Shop", link: "https://nfc.dgtechsoln.com/philips-green-shop-example/", image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=300&h=200&fit=crop" },
      ],
    },
    "TOURS AND TRAVELS": {
      "TRAVEL AGENCY": [
        { name: "Tours Travels", link: "https://nfc.dgtechsoln.com/tours-travels-example/", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=200&fit=crop" },
      ],
    },
    "TRUST/NGO": {
      "CHARITY/TRUST/NGO": [
        { name: "M Venkat Naidu Memorial Trust", link: "https://nfc.dgtechsoln.com/m-venkat-naidu-memorial-trust/", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop" },
      ],
    },
    UMBERELLA: {
      "UMBRELLA SHOP": [
        { name: "Sunsplash Umbrellas", link: "https://nfc.dgtechsoln.com/sunsplash-umbrellas/", image: "https://images.unsplash.com/photo-1541558869434-2840d308329a?w=300&h=200&fit=crop" },
      ],
    },
    "WATER PURIFIERS": {
      "WATER PURIFIERS": [
        { name: "Santosh Water Tech", link: "https://nfc.dgtechsoln.com/santosh-water-tech-example/", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
      ],
    },
    WATCH: {
      "WATCH SHOP": [
        { name: "Watch Shop", link: "https://nfc.dgtechsoln.com/m-venkat-naidu-memorial-trust/", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=200&fit=crop" },
      ],
    },
    "WASHING MACHINE": {
      "WASHING MACHINE": [
        { name: "Washing Machine", link: "#", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
      ],
    },
    "WEIGHING MACHINE": {
      "WEIGHING MACHINE": [
        { name: "Weighing Machines", link: "https://nfc.dgtechsoln.com/weighing-machines-example/", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
      ],
    },
    XEROX: {
      "XEROX": [
        { name: "Xpress Xerox Hub", link: "https://nfc.dgtechsoln.com/xpress-xerox-hub/", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
      ],
    },
    LAUNDARY: {
      "LAUNDRY": [
        { name: "Laundry and Dry Cleaners", link: "https://nfc.dgtechsoln.com/laundry-and-dry-cleaners-example/", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
        { name: "Laundry Service", link: "https://nfc.dgtechsoln.com/laundry-and-dry-cleaners-example/", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
      ],
    },
    "MARBLES/GRANITES": {
      "MARBLES/GRANITES": [
        { name: "Dakshinak Minerals LLP", link: "https://nfc.dgtechsoln.com/dakshinak-minerals-llp-example/", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=300&h=200&fit=crop" },
      ],
    },
    "SANITARY AND TILES": {
      "SANITARY AND TILES": [
        { name: "Sanitary and Tiles", link: "#", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=300&h=200&fit=crop" },
      ],
    },
    "KEY MAKERS": {
      "KEY MAKERS": [
        { name: "M H Key Makers", link: "https://nfc.dgtechsoln.com/m-h-key-makers-exapmle/", image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=200&fit=crop" },
      ],
    },
    PERSONALITIES: {
      "CHARTERED ACCOUNTANT": [
        { name: "Jom Jose", link: "https://site.dgtechsoln.com/dr-bens-mary-matha-dental-clinic-example/", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
        { name: "Chartered Accountant", link: "#", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
      ],
      LAWYER: [
        { name: "T Vijay Advocate and Consultant", link: "https://nfc.dgtechsoln.com/t-vijay-advocate-and-consultant-example/", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
        { name: "Lawyer", link: "#", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
      ],
      MANAGER: [
        { name: "Manager", link: "#", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
      ],
      "BANK MANAGER": [
        { name: "Bank Manager", link: "#", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
      ],
      POLICE: [
        { name: "Police", link: "#", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
      ],
      POLITICIAN: [
        { name: "Politician", link: "#", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
      ],
      "FREE LANCER": [
        { name: "Free Lancer", link: "#", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
      ],
      ARTISTS: [
        { name: "Artists", link: "#", image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop" },
      ],
      ACTOR: [
        { name: "Actor", link: "#", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
      ],
      STUDENT: [
        { name: "Student", link: "#", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
      ],
    },
    MEAT: {
      "MEAT SHOP": [
        { name: "Heritage Meats", link: "https://nfc.dgtechsoln.com/heritage-meats/", image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=300&h=200&fit=crop" },
      ],
    },
    ASTROLOGY: {
      ASTROLOGY: [
        { name: "Kerala Sri Bhagavathi Jyothishyalaya", link: "https://nfc.dgtechsoln.com/kerala-sri-bhagavathi-jyothishyalaya-example/", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop" },
      ],
    },
    "PLANT NURSERY": {
      "PLANT NURSERY": [
        { name: "The Leafy Nest", link: "https://nfc.dgtechsoln.com/the-leafy-nest/", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop" },
      ],
    },
    "VINYL STICKER/STICKERING": {
      "STICKERING": [
        { name: "StickLab Creations", link: "https://nfc.dgtechsoln.com/sticklab-creations/", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
      ],
    },
    FOOTWEAR: {
      FOOTWEAR: [
        { name: "Thomson Footwears", link: "https://nfc.dgtechsoln.com/thomson-footwears-example/", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=200&fit=crop" },
      ],
    },
    BOTTLE: {
      BOTTLE: [
        { name: "Bottle World", link: "https://nfc.dgtechsoln.com/bottle-world-example/", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop" },
      ],
    },
    "COURIER SERVICE": {
      COURIER: [
        { name: "DTDC Neo Town", link: "https://nfc.dgtechsoln.com/dtdc-neo-town-example/", image: "https://images.unsplash.com/photo-1586262462859-6e5e37b55d57?w=300&h=200&fit=crop" },
      ],
    },
    PHOTOSTUDIO: {
      "PHOTO STUDIO": [
        { name: "Kaladalan Photo Studio", link: "https://nfc.dgtechsoln.com/kaladalan-photo-studio-example/", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=200&fit=crop" },
      ],
    },
    "MONEY EXCHANGE": {
      "MONEY EXCHANGE": [
        { name: "Money Exchange", link: "https://nfc.dgtechsoln.com/money-exchange-example/", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
      ],
    },
    "COFFEE POWDER": {
      "COFFEE POWDER": [
        { name: "Coffee Powder", link: "https://nfc.dgtechsoln.com/coffe-powder-example/", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=300&h=200&fit=crop" },
      ]
    }
  };

  // Filter categories based on search term
  const filteredCategories = categories.filter(cat =>
    cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search result selection
  const handleSearchSelect = (category) => {
    setSelectedCategory(category);
    setSearchTerm(""); // Clear search after selection
  };

  // Enhanced scroll categories horizontally
  const scrollCategories = (direction) => {
    if (categoryScrollRef.current) {
      const scrollAmount = 300; // Increased scroll amount for smoother navigation
      if (direction === 'left') {
        categoryScrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        categoryScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="nfc-container">
      {/* Hero Section */}
      <div className="nfc-hero">
        <h1>NFC Business Categories</h1>
        <p>Click a category to explore businesses</p>
      </div>

      {/* Search Bar */}
      <div className="search-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <div className="search-results">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((cat, index) => (
                  <div
                    key={index}
                    className="search-result-item"
                    onClick={() => handleSearchSelect(cat)}
                  >
                    {cat}
                  </div>
                ))
              ) : (
                <div className="search-result-item no-results">
                  No categories found
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Category List - Horizontal Scroll with Better Navigation */}
      <div className="category-section">
        <button 
          className="scroll-btn left" 
          onClick={() => scrollCategories('left')}
        >
          ‹
        </button>
        
        <div className="category-filter-container">
          <div className="category-filter" ref={categoryScrollRef}>
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <button 
          className="scroll-btn right" 
          onClick={() => scrollCategories('right')}
        >
          ›
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span>← Swipe to browse categories →</span>
      </div>

      {/* Category Details */}
      <div className="details-section">
        {selectedCategory ? (
          <>
            <h2 className="details-title">{selectedCategory}</h2>

            {businessData[selectedCategory] ? (
              <div className="subcategories">
                {Object.keys(businessData[selectedCategory]).map((subcat, i) => (
                  <div key={i} className="subcategory">
                    <h3>{subcat}</h3>
                    <div className="business-grid">
                      {businessData[selectedCategory][subcat].map((biz, j) => (
                        <div key={j} className="business-card">
                          <img src={biz.image} alt={biz.name} className="business-image" />
                          <h4>{biz.name}</h4>
                          <a href={biz.link} target="_blank" rel="noopener noreferrer">
                            🔗 Visit
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No businesses listed yet for {selectedCategory}.</p>
            )}
          </>
        ) : (
          <p className="placeholder">Select a category to see details</p>
        )}
      </div>
    </div>
  );
}

export default NFC;