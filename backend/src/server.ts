import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import weatherRoutes from "./routes/weather";
import favoritesRoutes from "./routes/favorites";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/weather", weatherRoutes);
app.use("/api/favorites", favoritesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
