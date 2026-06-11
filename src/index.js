const express = require('express');

const app = express();
const PORT = process.env.port || 3000;
app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`);
});

app.use(express.json());

app.post('/users', (req, res) => {
  console.log(req.body);
  res.send('testing!');
});
