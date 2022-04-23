import { getCards } from "../../src/services/get-cards";

export default function handler(req, res) {
  const cards = getCards();
  res.status(200).json(cards);
}
