const mongoose = require('mongoose');

const main = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');
  } catch (error) {
    console.log(error);
  }
};

main();
