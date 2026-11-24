import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

// Returns a connection, or null when no database is configured / reachable.
export default async function dbConnect() {
  if (!MONGODB_URI) return null;
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, { serverSelectionTimeoutMS: 4000 })
      .catch((err) => {
        cached.promise = null;
        console.error("MongoDB connection failed, using sample data:", err.message);
        return null;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
