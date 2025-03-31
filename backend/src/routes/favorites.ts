import express from "express";
import City from "../models/City";

const router = express.Router();

// POST /api/favorites - Save a city
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const city = new City({ name });
    await city.save();
    res.status(201).json(city);
  } catch (error) {
    res.status(500).json({ message: "Error saving city" });
  }
});

// GET /api/favorites - Get all favorite cities
router.get("/", async (req, res) => {
  try {
    const cities = await City.find();
    res.json(cities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching favorite cities" });
  }
});

// DELETE /api/favorites/:id - Delete a city by ID
router.delete("/:id", async (req, res) => {
  try {
    await City.findByIdAndDelete(req.params.id);
    res.json({ message: "City deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting city" });
  }
});

export default router;
