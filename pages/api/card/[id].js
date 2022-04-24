import { dbConnect } from "../../../src/lib/database";
import Card from "../../../src/model/card";

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  if (req.method === "DELETE") {
    await Card.findByIdAndDelete(id);
    res.status(200).json({ id });
  } else if (req.method === "PUT") {
    const data = JSON.parse(req.body);
    const card = await Card.findByIdAndUpdate(id, data, {
      new: true,
    });

    res.status(200).json({ ...card });
  } else {
    const card = await Card.findById(id);
    res.status(200).json(card);
  }
}
