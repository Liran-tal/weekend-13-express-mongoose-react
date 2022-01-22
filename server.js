const path = require("path");
const express = require("express");
const cors = require("cors");

require('./backend/db/mongoose.js');
const usersRouter = require("./backend/routes/users_routes.js");
const app = express();

const PORT = process.env.PORT || 8080;
const publicPath = path.join(__dirname, 'client/build');

app.use(express.json());
app.use(cors());
app.use(express.static(publicPath));

app.get('/users', (req, res) => {
  try {
    res.status(200).send({ userName: 'Hello world' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});


const User = require("./backend/schemas/user_schema.js");

app.post('/users', async (req, res) => {
  try {
    const newUser = await new User(req.body).save();
    res.status(200).send(newUser);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(publicPath, 'index.html'));
});

app.use("/users", usersRouter);
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
