import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

class Database {
  constructor() {
    this.serverUrl = `mongodb://${process.env.SERVER}/${process.env.DATABASE_NAME}`;
    this.connect();
  }

  async connect() {
    // Make the connection to the database
    await mongoose.connect(this.serverUrl, {
      useNewUrlParser: true,
    });
    console.log('Database has full connection');
  }
}

export default Database;
