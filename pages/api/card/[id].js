import { getCards } from "../../../src/services/get-cards";

export default function handler(req, res) {
  const { id } = req.query;

  const cards = getCards();

  const index = cards.findIndex((card) => card.id === id);

  if (index === -1) {
    res
      .status(404)
      .json({ status: "error", message: "card not found", data: { id } });
  }

  if (req.method === "DELETE") {
    res
      .status(200)
      .json({ status: "success", message: "card deleted", data: { id } });
  } else if (req.method === "PUT") {
    res
      .status(200)
      .json({ status: "success", message: "card updated", data: { id } });
  } else {
    res.status(200).json(cards[index]);
  }
}
