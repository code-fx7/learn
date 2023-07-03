import { Mongoose } from "./";

export const hamsterSchema = Mongoose.Schema({
  name: {
    type: String,
  },
  text: {
    type: String,
  },
});
