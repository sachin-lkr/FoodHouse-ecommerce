import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/productModel.js'; // Apne model ka sahi path dein

dotenv.config();

const products = [
  { 
    name: "Strawberry",
    price: 199,
    discountPercent: 10,
    category: "Fruits",
    image: "https://res.cloudinary.com/ilgm5fc0/image/upload/v1794555611/strawberry.png",
    rating: 4.5,
    stock: 0 ,
    description: "Fresh and juicy strawberries rich in vitamins and natural sweetness."
  },
  { 
    name: "Butter",
    price: 120,
    discountPercent: 5,
    category: "Dairy",
    image: "https://res.cloudinary.com/ilgm5fc0/image/upload/v1794556662/butter.png",
    rating: 4.2,
    stock: 18,
    description: "Creamy dairy butter perfect for cooking and baking."
  },
  { 
    name: "Eggs",
    price: 90,
    discountPercent: 8,
    category: "Dairy",
    image: "https://res.cloudinary.com/ilgm5fc0/image/upload/v1794555598/eggs.png",
    rating: 4.4,
    stock: 40,
    description: "Farm fresh eggs packed with high-quality protein."
  },
  { 
    name: "Cabbage",
    price: 40,
    discountPercent: 0,
    category: "Vegetables",
    image: "https://res.cloudinary.com/ilgm5fc0/image/upload/v1794555594/cabbage.png",
    rating: 4.0,
    stock: 30,
    description: "Fresh green cabbagor salads and daily cooking."
  },
  { 
    name: "Eggplant",
    price: 60,
    discountPercent: 5,
    category: "Vegetables",
    image: "https://res.cloudinary.com/ilgm5fc0/image/upload/v1794556660/eggplant.jpg",
    rating: 4.1,
    stock: 22,
    description: "Organic eggplant perfect for curries and grilling."
  },
  { 
    name: "Shrimp",
    price: 350,
    discountPercent: 12,
    category: "SeaFood",
    image: "https://res.cloudinary.com/ilgm5fc0/image/upload/v1794556661/shrimp.png",
    rating: 4.6,
    stock: 12,
    description: "Premium quality shrimp rich in protein and flavor."
  },
  { 
    name: "Kiwi",
    price: 120,
    discountPercent: 6,
    category: "Fruits",
    image: "https://res.cloudinary.com/ilgm5fc0/image/upload/v1794556665/kiwi.png",
    rating: 4.3,
    stock: 20,
    description: "Sweet and tangy kiwi loaded with Vitamin C."
  },
  { 
    name: "Green Capsicum",
    price: 70,
    discountPercent: 4,
    category: "Vegetables",
    image: "https://res.cloudinary.com/ilgm5fc0/image/upload/v1794555583/capsicum.png",
    rating: 4.0,
    stock: 28,
    description: "Crisp green capsicum perfect for stir fry and salads."
  },
  { 
    name: "Broccoli",
    price: 110,
    discountPercent: 7,
    category: "Vegetables",
    image: "https://res.cloudinary.com/ilgm5fc0/image/upload/v1794556663/broccoli.png",
    rating: 4.5,
    stock: 15,
    description: "Healthy broccoli rich in fiber and essential nutrients."
  },
  {
    name: "Yogurt",
    price: 60,
    discountPercent: 5,
    category: "Dairy",
    image:"https://res.cloudinary.com/ilgm5fc0/image/upload/v1794555610/yogurt.png",
    rating: 4.2,
    stock: 35,
    description: "Thick and creamy yogurt great for digestion."
  },
  {
    name: "Beef",
    price: 550,
    discountPercent: 15,
    category: "Meat",
    image: "https://res.cloudinary.com/ilgm5fc0/image/upload/v1794556671/beef.png",
    rating: 4.7,
    stock: 10,
    description: "Premium beef rich in flavor and protein."
  },
  {
    name: "Chicken Breast",
    price: 320,
    discountPercent: 10,
    category: "Meat",
    image: "https://res.cloudinary.com/ilgm5fc0/image/upload/v1794555568/chicken-breast.png",
    rating: 4.6,
    stock: 14,
    description: "Lean and tender chicken breasor healthy meals."
  },
  {
    name: "Kale Leaves",
    price: 80,
    discountPercent: 5,
    category: "Vegetables",
    image: "https://res.cloudinary.com/ilgm5fc0/image/upload/v1794556667/kale.png",
    rating: 4.1,
    stock: 19,
    description: "Fresh kale packed with antiand vitamins."
  },
  {
    name: "Mozzarella Cheese",
    price: 280,
    discountPercent: 10,
    category: "Dairy",
    image:"https://res.cloudinary.com/ilgm5fc0/image/upload/v1794555579/cheese.png" ,
    rating: 4.5,
    stock: 16,
    description: "Soft mozzarella cheese perfect for pizza and pasta."
  },
  {
    name: "Condensed Milk",
    price: 140,
    discountPercent: 6,
    category: "Dairy",
    image: "https://res.cloudinary.com/ilgm5fc0/image/upload/v1794555577/condensed-milk.png",
    rating: 4.3,
    stock: 20,
    description: "Sweet and creamy condensed milor desserts."
  },
  {
    name: "Salmon Filet",
    price: 450,
    discountPercent: 12,
    category: "SeaFood",
    image:"https://res.cloudinary.com/ilgm5fc0/image/upload/v1794555604/salmon.png" ,
    rating: 4.6,
    stock: 11,
    description: "Fresh salmon filet rich in omega-3 and premium taste."
  },
  {
    name: "Banana",
    price: 50,
    discountPercent: 5,
    category: "Fruits",
    image:"https://res.cloudinary.com/ilgm5fc0/image/upload/v1794555566/banana.png",
    rating: 4.2,
    stock: 45,
    description: "Naturally sweet bananas full of energy and potassium."
  },
  {
    name: "Milk Bottle (3)",
    price: 180,
    discountPercent: 8,
    category: "Dairy",
    image:"https://res.cloudinary.com/ilgm5fc0/image/upload/v1794555599/milk.png" ,
    rating: 4.4,
    stock: 24,
    description: "Pack of 3 fresh milk bottles rich in calcium."
  },
  {
    name: "PineApple",
    price: 120,
    discountPercent: 7,
    category: "Fruits",
    image: "https://res.cloudinary.com/ilgm5fc0/image/upload/v1794555598/pineapple.png",
    rating: 4.3,
    stock: 17,
    description: "Juicy pineapple with refreshing tropical sweetness."
  },
  {
    name: "Tofu Cubes",
    price: 150,
    discountPercent: 5,
    category: "Dairy",
    image: "https://res.cloudinary.com/ilgm5fc0/image/upload/v1794555611/tofu.png",
    rating: 4.1,
    stock: 21,
    description: "Healthy tofu cubes rich in plant-based protein."
  },
  {
    name: "Tilapia Fish",
    price: 280,
    discountPercent: 10,
    category: "SeaFood",
    image: "https://res.cloudinary.com/ilgm5fc0/image/upload/v1794556654/tilapia.png",
    rating: 4.4,
    stock: 13,
    description: "Fresh tilapia fish perfect for frying and grilling."
  },
  {
    name: "Slice Cheese",
    price: 160,
    discountPercent: 6,
    category: "Dairy",
    image: "https://res.cloudinary.com/ilgm5fc0/image/upload/v1794555615/slice-cheese.png",
    rating: 4.2,
    stock: 19,
    description: "Creamy cheese sliceor sandwiches."
  },
  {
    name: "Ricotta Cheese",
    price: 300,
    discountPercent: 9,
    category: "Dairy",
    image: "https://res.cloudinary.com/ilgm5fc0/image/upload/v1794556659/ricotta-cheese.png",
    rating: 4.5,
    stock: 15,
    description: "Soft ricotta cheese perfect for desserts and pasta."
  },
  {
    name: "Grapes",
    price: 90,
    discountPercent: 5,
    category: "Fruits",
    image: "https://res.cloudinary.com/ilgm5fc0/image/upload/v1794556664/grapes.png",
    rating: 4.3,
    stock: 26,
    description: "Fresh and juicy grapes packed with natural sweetness."
  }
];
const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected for Seeding...");

    await Product.deleteMany({}); 
    await Product.insertMany(products);
    
    console.log("All products seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
};

seedDB();