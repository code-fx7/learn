// var express = require('express');
// var server = express();
// var PORT=8000;

// simple server

// server.use(express.json());
// server.listen(PORT, function check(error)
// {
//   if (error)
//   {
//     console.log("server not connected")
//   } else {
//     console.log("connected at PORT: " + PORT)
//   }
// });



// Mongoose connection

// var mongoose = require('mongoose');
import mongoose from "mongoose";
const _database = "hamsterBook";

mongoose.connect("mongodb+srv://codefx21:8MD5arWPhglviRbB@cluster0.cljvta2.mongodb.net/",{useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected");
    mongoose.connection.db.listCollections().toArray()
    .then((collections) => {
      const collectionNames = collections.map((col) => col.name);
      console.log(`Collections of '${_database}' db`, collectionNames );
})
  .catch(error => {
    console.log("Error while fetching collections: ", error);
  });
})
  .catch((error) => {
    console.log("Database connection failed: ") + error;
});
