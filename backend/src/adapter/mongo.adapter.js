import mongoose from "mongoose";

class ConnectionAdapter {
    constructor() {}

    connect() {
        try {
            mongoose.set("strictQuery", true);
            mongoose.connect(process.env.MONGODB_URL, {
                dbName: process.env.DB_NAME,
            });
            console.log("Connected to mongodb");
        } catch (error) {
            console.log("Failed to connect to MongoDB", { error });
            throw error;
        }
    }

    async disconnect() {
        try {
            await mongoose.disconnect();
            console.log("Disconnected from MongoDB");
        } catch (error) {
            console.log("Failed to disconnected to MongoDB", { error });
            throw error;
        }
    }
}

export default new ConnectionAdapter();
