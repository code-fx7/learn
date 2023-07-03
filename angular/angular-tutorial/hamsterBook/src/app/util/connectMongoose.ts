import { Mongoose } from "mongoose";
import { from, mergeMap } from "rxjs";

// const _user = process.env.MONGO_DB_USER;
// const _pwd = process.env.MONGO_DB_PW;
// const _cluster = "cluster0.cljvta2.mongodb.net";
// const:_uri = `mongodb+srv://${_user}:${_pwd}@${_cluster}/${_database}`;
const _database = "hamsterBook";

from(Mongoose.connect("mongodb+srv://codefx21:8MD5arWPhglviRbB@cluster0.cljvta2.mongodb.net/"))
  .pipe(
    mergeMap(() => from(Mongoose.connection.db.listCollections().toArray()))
  )
  .subscribe({
    next: (collections) => {
      const colletionNames = collections.map((col) => col.name);
      console.log(`Collections of '${_database}' db:`, colletionNames);
    },
    error: (error) => {
      console.log("Error while fetching collections:", error);
    },
    complete:() => {
      console.log("Database connected");
    }
  });
