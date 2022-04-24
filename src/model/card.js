import mongoose from "mongoose";
const { Schema } = mongoose;

const cardSchema = new Schema(
  {
    content: { type: String, required: true },
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Card = mongoose.models.Card ?? mongoose.model("Card", cardSchema);

export default Card;
