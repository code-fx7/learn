import { hamsterModel } from '../model/hamsterModel';

export const postHamster = async (req, res) => {
  try {
    const newHamster = new hamsterModel(req.body);
    await newHamster.save();
    res.send({msg: "New hamster added, new hamster is: ", newHamster})
  } catch (error) {
    console.log(error);
   res.send(error.message)
  }
}
