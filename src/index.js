const express = require('express');
require('./db/mongoose');

const PORT = process.env.PORT || 3000;
const userRouter = require('./routers/userRouter');
const taskRouter = require('./routers/taskRouter');

const app = express();

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled');
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send('Site is currently down due to maintenance');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`);
});
