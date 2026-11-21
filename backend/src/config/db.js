import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

let memoryServer = null;

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/staysphere';

  try {
    // Set short server selection timeout for initial attempt
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 2000,
    });
    console.log(`✅ MongoDB Connected to standard daemon: ${mongoose.connection.host}:${mongoose.connection.port}`);
    return mongoose.connection;
  } catch (initialErr) {
    console.log(`ℹ️  Local MongoDB daemon not reachable on ${uri}. Initializing in-memory MongoDB server...`);
    try {
      const { MongoMemoryServer } = await import('mongodb-memory-server');
      memoryServer = await MongoMemoryServer.create({
        instance: {
          dbName: 'staysphere',
        },
      });
      const memoryUri = memoryServer.getUri();
      await mongoose.connect(memoryUri);
      console.log(`✅ MongoDB Memory Server connected successfully: ${memoryUri}`);
      return mongoose.connection;
    } catch (memErr) {
      console.error('❌ Failed to initialize MongoDB:', memErr.message);
      throw memErr;
    }
  }
};

export const disconnectDB = async () => {
  await mongoose.disconnect();
  if (memoryServer) {
    await memoryServer.stop();
  }
};
