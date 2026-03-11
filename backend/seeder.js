require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./src/models/Product');

// Add your MONGO_URI in .env file if not already added.
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/shopez");
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const dummyProducts = [
  {
    name: 'Wireless Bluetooth Headphones',
    description: 'High-quality sound with noise-cancellation and 20 hours of battery life.',
    price: 99.99,
    category: 'Electronics',
    stock: 50,
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop'],
    ratings: 4.5,
    numReviews: 120
  },
  {
    name: 'Men\'s Classic T-Shirt',
    description: '100% cotton, breathable, and comfortable for daily wear.',
    price: 19.99,
    category: 'Clothing',
    stock: 200,
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop'],
    ratings: 4.0,
    numReviews: 85
  },
  {
    name: 'Smart Fitness Watch',
    description: 'Track your steps, heart rate, and sleep patterns accurately.',
    price: 149.50,
    category: 'Electronics',
    stock: 30,
    images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop'],
    ratings: 4.8,
    numReviews: 340
  },
  {
    name: 'Ceramic Coffee Mug',
    description: 'Minimalist design, microwave-safe, perfectly sized for your morning brew.',
    price: 12.99,
    category: 'Home & Kitchen',
    stock: 100,
    images: ['https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=1000&auto=format&fit=crop'],
    ratings: 4.2,
    numReviews: 45
  },
  {
    name: 'Yoga Mat with Alignment Lines',
    description: 'Eco-friendly, non-slip texture, and includes a carrying strap.',
    price: 29.99,
    category: 'Sports & Outdoors',
    stock: 75,
    images: ['https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=1000&auto=format&fit=crop'],
    ratings: 4.6,
    numReviews: 210
  }
];

const importData = async () => {
  await connectDB();
  try {
    await Product.deleteMany(); // Clear existing products
    console.log('Existing products cleared');
    
    await Product.insertMany(dummyProducts);
    console.log('Dummy Products Imported Successfully!');
    process.exit();
  } catch (err) {
    console.error('Error importing data:', err);
    process.exit(1);
  }
};

importData();
