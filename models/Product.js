import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  pname: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  cat: {
    type: String,
    required: true,
  },
});

export default mongoose.models.PRODUCTS ||
  mongoose.model("PRODUCTS", productSchema);
