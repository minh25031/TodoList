import mongoose from "mongoose";
import 'dotenv/config';

const mongoURI = process.env.MONGO_URI;

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongoURI);

        console.log(`MongoDB đã được kết nối: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Lỗi kết nối MongoDB: ${error.message}`);
        process.exit(1);
    }
}