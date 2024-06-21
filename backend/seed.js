import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from './models/userModel.js'

dotenv.config()

const users = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      password: 'password456',
    },
    {
        name: 'Bob Johnson',
        email: 'bob@example.com',
        password: 'password789',
    },
    {
        name: 'Sarah Davis',
        email: 'sarah@example.com',
        password: 'password321',
    }
  ];
  
  const seedDB = async () => {
    //Connecvts to MongoDB database
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('MongoDB connected');
  
      // Deletes all existing users
      await User.deleteMany();
      console.log('Existing users deleted');
  
      // Inserts new users
      await User.insertMany(users);
      console.log('Users added');
      
      // Close connection
      process.exit();
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  
  seedDB();