import mongoose from 'mongoose';
const { Schema } = mongoose;
import User from './user';

const cardSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Card = mongoose.models.Card ?? mongoose.model('Card', cardSchema);

export default Card;
