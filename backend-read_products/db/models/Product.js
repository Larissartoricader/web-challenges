import mongoose from "mongoose";
import Review from "./Review.js";

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  reviews: { type: [Schema.Types.ObjectId], ref: "reviews" },
});

const Product =
  mongoose.models.products || mongoose.model("products", ProductSchema);
console.log(Product);
export default Product;
