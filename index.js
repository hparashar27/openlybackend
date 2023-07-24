require('dotenv').config();
const mongoose = require("mongoose")
const express = require('express');

const app = express();

mongoose.connect( process.env.DATABASE_URL,{
}).then(con=>{
  console.log("DB Connection is established");
});
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
// app.use("/api/opportunities", opportunitiesRoutes);

app.use("/api", require("./routes/Members/index"));
app.use("/api", require("./routes/Opportunities/index"));

app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

const port = process.env.PORT || 9999
if(port){
  app.listen(port, () => {
    console.log(`App running on port ${port} 🚀🚀🚀🚀`);
  })};

module.exports = app