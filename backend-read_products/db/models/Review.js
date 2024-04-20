import mongoose from "mongoose";

const { Schema } = mongoose;

const ReviewSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  rating: { type: Number, required: true },
});

const Review =
  mongoose.models.reviews || mongoose.model("reviews", ReviewSchema);

export default Review;
