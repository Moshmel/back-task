const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const addUserRoutes = require("./user-route");

const App = express();
App.use(express.static(path.join(__dirname, 'client')));
App.use(bodyParser.json());
App.use(
  cors({
    origin: ["http://localhost:3000",'https://herokuapp.com'],
    credentials: true // enable set cookie
  })
);
const PORT = process.env.PORT || 3001;
App.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
addUserRoutes(App);
App.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/index.html'));
});