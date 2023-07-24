require('dotenv').config();
const mongoose = require("mongoose")
const express = require('express');

const app = express();

mongoose.connect( process.env.DATABASE_URL,{
}).then(con=>{
  console.log("DB Connection is established");
});

app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

const port = process.env.PORT || 9000
if(port){
  app.listen(port, () => {
    console.log(`App running on port ${port} 🚀🚀🚀🚀`);
  })};

module.exports = app