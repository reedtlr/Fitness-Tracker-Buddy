const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  workoutType: {
    type: String,
    trim: true,
    required: "Workout type is required"
  },

  name: {
    type: String,
    trim: true,
    required: "Name of exercise of required"
  },

  duration: {
    type: Number,
    trim: true,
  },

  weight: {
    type: Number,
    trim: true,
  },
  reps: {
    type: Number,
    trim: true,
  },

  sets: {
    type: Number,
    trim: true,
  },
  
  exerciseTime: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
