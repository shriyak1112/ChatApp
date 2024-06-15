import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";


const PORT = process.env.PORT || 5000;

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cookieParser());

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.use("/api/users",userRoutes);

app.listen(PORT, async () => {
    await connectToMongoDB(); // Ensure MongoDB connection is established before starting the server
    console.log(`Server Running on port ${PORT}`);
});
