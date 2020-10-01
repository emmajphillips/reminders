const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    name: { type: String, required: true },
    completed: { type: Boolean, default: false },
    deadline: { type: Date, default: Date.now },
    notes: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);
