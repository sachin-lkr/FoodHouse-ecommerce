import Butter from "../assets/butter.png";
import Strawberry from "../assets/strawberry.png";
import Eggs from "../assets/eggs.png";
import Cabbage from "../assets/cabbage.png";
import Eggplant from "../assets/eggplant.png";
import Shrimp from "../assets/shrimp.png";
import Kiwi from "../assets/kiwi.png";
import Capsicum from "../assets/capsicum.png";
import Broccoli from "../assets/broccoli.png";
import Yogurt from "../assets/yogurt.png";
import Beef from "../assets/beef.png";
import ChickenBreast from "../assets/chicken-breast.png";
import Kale from "../assets/kale.png";
import Cheese from "../assets/cheese.png";
import CondensedMilk from "../assets/condensed-milk.png";
import Salmon from "../assets/salmon.png";
import Banana from "../assets/banana.png";
import Milk from "../assets/milk.png";
import Pineapple from "../assets/pineapple.png";
import Tofu from "../assets/tofu.png";
import Tilapia from "../assets/tilapia.png";
import SliceCheese from "../assets/slice-cheese.png";
import RicottaCheese from "../assets/ricotta-cheese.png";
import Grapes from "../assets/grapes.png";


const products = [
  {
    id: 1,
    name: "Strawberry",
    price: 199,
    discountPercent: 10,
    category: "Fruits",
    image: Strawberry,
    rating: 4.5,
    stock: 0 ,
    description: "Fresh and juicy strawberries rich in vitamins and natural sweetness."
  },
  {
    id: 2,
    name: "Butter",
    price: 120,
    discountPercent: 5,
    category: "Dairy",
    image: Butter,
    rating: 4.2,
    stock: 18,
    description: "Creamy dairy butter perfect for cooking and baking."
  },
  {
    id: 3,
    name: "Eggs",
    price: 90,
    discountPercent: 8,
    category: "Dairy",
    image: Eggs,
    rating: 4.4,
    stock: 40,
    description: "Farm fresh eggs packed with high-quality protein."
  },
  {
    id: 4,
    name: "Cabbage",
    price: 40,
    discountPercent: 0,
    category: "Vegetables",
    image: Cabbage,
    rating: 4.0,
    stock: 30,
    description: "Fresh green cabbage ideal for salads and daily cooking."
  },
  {
    id: 5,
    name: "Eggplant",
    price: 60,
    discountPercent: 5,
    category: "Vegetables",
    image: Eggplant,
    rating: 4.1,
    stock: 22,
    description: "Organic eggplant perfect for curries and grilling."
  },
  {
    id: 6,
    name: "Shrimp",
    price: 350,
    discountPercent: 12,
    category: "SeaFood",
    image: Shrimp,
    rating: 4.6,
    stock: 12,
    description: "Premium quality shrimp rich in protein and flavor."
  },
  {
    id: 7,
    name: "Kiwi",
    price: 120,
    discountPercent: 6,
    category: "Fruits",
    image: Kiwi,
    rating: 4.3,
    stock: 20,
    description: "Sweet and tangy kiwi loaded with Vitamin C."
  },
  {
    id: 8,
    name: "Green Capsicum",
    price: 70,
    discountPercent: 4,
    category: "Vegetables",
    image: Capsicum,
    rating: 4.0,
    stock: 28,
    description: "Crisp green capsicum perfect for stir fry and salads."
  },
  {
    id: 9,
    name: "Broccoli",
    price: 110,
    discountPercent: 7,
    category: "Vegetables",
    image: Broccoli,
    rating: 4.5,
    stock: 15,
    description: "Healthy broccoli rich in fiber and essential nutrients."
  },
  {
    id: 10,
    name: "Yogurt",
    price: 60,
    discountPercent: 5,
    category: "Dairy",
    image: Yogurt,
    rating: 4.2,
    stock: 35,
    description: "Thick and creamy yogurt great for digestion."
  },
  {
    id: 11,
    name: "Beef",
    price: 550,
    discountPercent: 15,
    category: "Meat",
    image: Beef,
    rating: 4.7,
    stock: 10,
    description: "Premium beef rich in flavor and protein."
  },
  {
    id: 12,
    name: "Chicken Breast",
    price: 320,
    discountPercent: 10,
    category: "Meat",
    image: ChickenBreast,
    rating: 4.6,
    stock: 14,
    description: "Lean and tender chicken breast ideal for healthy meals."
  },
  {
    id: 13,
    name: "Kale Leaves",
    price: 80,
    discountPercent: 5,
    category: "Vegetables",
    image: Kale,
    rating: 4.1,
    stock: 19,
    description: "Fresh kale packed with antioxidants and vitamins."
  },
  {
    id: 14,
    name: "Mozzarella Cheese",
    price: 280,
    discountPercent: 10,
    category: "Dairy",
    image: Cheese,
    rating: 4.5,
    stock: 16,
    description: "Soft mozzarella cheese perfect for pizza and pasta."
  },
  {
    id: 15,
    name: "Condensed Milk",
    price: 140,
    discountPercent: 6,
    category: "Dairy",
    image: CondensedMilk,
    rating: 4.3,
    stock: 20,
    description: "Sweet and creamy condensed milk ideal for desserts."
  },
  {
    id: 16,
    name: "Salmon Filet",
    price: 450,
    discountPercent: 12,
    category: "SeaFood",
    image: Salmon,
    rating: 4.6,
    stock: 11,
    description: "Fresh salmon filet rich in omega-3 and premium taste."
  },
  {
    id: 17,
    name: "Banana",
    price: 50,
    discountPercent: 5,
    category: "Fruits",
    image: Banana,
    rating: 4.2,
    stock: 45,
    description: "Naturally sweet bananas full of energy and potassium."
  },
  {
    id: 18,
    name: "Milk Bottle (3)",
    price: 180,
    discountPercent: 8,
    category: "Dairy",
    image: Milk,
    rating: 4.4,
    stock: 24,
    description: "Pack of 3 fresh milk bottles rich in calcium."
  },
  {
    id: 19,
    name: "PineApple",
    price: 120,
    discountPercent: 7,
    category: "Fruits",
    image: Pineapple,
    rating: 4.3,
    stock: 17,
    description: "Juicy pineapple with refreshing tropical sweetness."
  },
  {
    id: 20,
    name: "Tofu Cubes",
    price: 150,
    discountPercent: 5,
    category: "Dairy",
    image: Tofu,
    rating: 4.1,
    stock: 21,
    description: "Healthy tofu cubes rich in plant-based protein."
  },
  {
    id: 21,
    name: "Tilapia Fish",
    price: 280,
    discountPercent: 10,
    category: "SeaFood",
    image: Tilapia,
    rating: 4.4,
    stock: 13,
    description: "Fresh tilapia fish perfect for frying and grilling."
  },
  {
    id: 22,
    name: "Slice Cheese",
    price: 160,
    discountPercent: 6,
    category: "Dairy",
    image: SliceCheese,
    rating: 4.2,
    stock: 19,
    description: "Creamy cheese slices ideal for sandwiches."
  },
  {
    id: 23,
    name: "Ricotta Cheese",
    price: 300,
    discountPercent: 9,
    category: "Dairy",
    image: RicottaCheese,
    rating: 4.5,
    stock: 15,
    description: "Soft ricotta cheese perfect for desserts and pasta."
  },
  {
    id: 24,
    name: "Grapes",
    price: 90,
    discountPercent: 5,
    category: "Fruits",
    image: Grapes,
    rating: 4.3,
    stock: 26,
    description: "Fresh and juicy grapes packed with natural sweetness."
  }
];
export default products;