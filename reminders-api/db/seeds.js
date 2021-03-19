const mongoose = require("mongoose");
const { dbURI } = require("../config/environment");
const Task = require("../models/task");
const taskData = require("./data/tasks");

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  async (err) => {
    if (err) throw new Error();
    try {
      console.log("About to drop database");
      await mongoose.connection.db.dropDatabase(
        console.log("Database dropped")
      );
      let createdTasks = await Task.create(taskData);
      console.log(`${createdTasks.length} tasks created!`);
    } catch (err) {
      console.log(err);
    }
    await mongoose.connection.close();
    console.log("Goodbye!");
  }
);
