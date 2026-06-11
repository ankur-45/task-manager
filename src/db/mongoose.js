const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const main = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');
  } catch (error) {
    console.log(error);
  }
};

main();
