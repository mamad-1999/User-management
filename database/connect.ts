import mongoose, { ConnectOptions } from "mongoose";

interface ConnectionOptionsExtend {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
}

const options: ConnectOptions & ConnectionOptionsExtend = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

if (!process.env.MONGODB_URI) {
  throw new Error("Add Mongo URI to .env.local");
}

const connectMongo = async () => {
  try {
    mongoose.set("strictQuery", true);
    const { connection } = await mongoose.connect(
      process.env.MONGODB_URI?.toString()!,
      options
    );
    if (connection.readyState === 1) {
      console.log("CONNECTED DATABASE");
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectMongo;
