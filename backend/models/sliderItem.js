import mongoose from "mongoose";

const sliderItemsSchema = new mongoose.Schema({
    imageUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }, { timestamps: true });
  

const SliderItems = mongoose.model("SliderItems", sliderItemsSchema);
export default SliderItems;