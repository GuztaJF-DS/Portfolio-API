import mongoose from 'mongoose';
import http from 'http';
import app from './app';

const server = http.createServer(app);

server.listen((process.env.PORT as string) || 8080, async () => {
  await mongoose.connect(process.env.MONGO_URL as string);
  // eslint-disable-next-line no-console
  console.info(('server running on port ' + process.env.PORT) as string);
});
