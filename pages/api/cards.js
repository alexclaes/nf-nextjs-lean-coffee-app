import { getCards } from "../../src/services/get-cards";

export default async function handler(req, res) {
  const cards = await getCards();
  res.status(200).json(cards);
}
