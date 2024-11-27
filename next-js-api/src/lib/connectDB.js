import mongoose from "mongoose";

let db;

const connectDB = async () => {
    if (db) {
        return db;
    }

    try {
        const url = process.env.NEXT_PUBLIC_MONGODB_URL;
        if (!url) {
            throw new Error("MongoDB connection URL is not defined.");
        }

        db = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // Timeout for database connection in 30 seconds
            socketTimeoutMS: 45000, // Timeout for socket communication in 45 seconds
        });
        console.log("\nConnected to MongoDB\n");
        return db;
    } catch (error) {
        console.log("Error connecting to MongoDB:", error.message);
        throw new Error("Database connection failed.");
    }
};

export default connectDB;