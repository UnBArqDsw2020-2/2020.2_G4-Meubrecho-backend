import mongoose from 'mongoose';

class Database {
  constructor() {
    this.init();

  }

  init() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    });
  }
}

export default new Database();
