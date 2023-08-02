/* eslint-disable no-console */
import mongoose from 'mongoose';
import http from 'http';
import app from './app';

const server = http.createServer(app);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL as string);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB().then(() => {
  server.listen((process.env.PORT as string) || 8080, async () => {
    console.info(('server running on port ' + process.env.PORT) as string);
  });
});
