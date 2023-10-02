const Puppy = require('../models/Puppy'); // Import your Mongoose model

// Create a new puppy
const createPuppy = async (req, res) => {
  try {
    const puppy = new Puppy(req.body); // Create a new puppy instance using request data
    const savedPuppy = await puppy.save(); // Save the puppy to the database
    res.status(201).json(savedPuppy); // Return the saved puppy as JSON
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all puppies
const getAllPuppies = async (req, res) => {
  try {
    const puppies = await Puppy.find(); // Find all puppies in the database
    res.json(puppies); // Return the list of puppies as JSON
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific puppy by ID
const getPuppyById = async (req, res) => {
  try {
    const puppy = await Puppy.findById(req.params.id); // Find a puppy by its ID
    if (!puppy) {
      return res.status(404).json({ error: 'Puppy not found' });
    }
    res.json(puppy); // Return the puppy as JSON
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a puppy by ID
const updatePuppyById = async (req, res) => {
  try {
    const updatedPuppy = await Puppy.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ); // Find and update a puppy by its ID
    if (!updatedPuppy) {
      return res.status(404).json({ error: 'Puppy not found' });
    }
    res.json(updatedPuppy); // Return the updated puppy as JSON
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a puppy by ID
const deletePuppyById = async (req, res) => {
  try {
    const deletedPuppy = await Puppy.findByIdAndDelete(req.params.id); // Find and delete a puppy by its ID
    if (!deletedPuppy) {
      return res.status(404).json({ error: 'Puppy not found' });
    }
    res.json(deletedPuppy); // Return the deleted puppy as JSON
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPuppy,
  getAllPuppies,
  getPuppyById,
  updatePuppyById,
  deletePuppyById,
};
