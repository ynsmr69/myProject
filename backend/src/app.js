const express = require("express")
const bodyParser = require("body-parser")
require("dotenv").config()
const mongoose = require("mongoose")
const userRoutes = require("./routes/adminRoutes.js")




const PORT =process.env.PORT ;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// database beckend bağlantısı
const db =process.env.MongoURI

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("Db connected"))
  .catch((err) => console.log(err));

app.use("/admin", userRoutes)

app.listen(PORT, ()=>{
    console.log(`server ${PORT} portunda calısıyor...`);
})