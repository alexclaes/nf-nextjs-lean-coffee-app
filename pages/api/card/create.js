import { dbConnect } from "../../../src/lib/database";
import Card from "../../../src/model/card";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = JSON.parse(req.body);

      await dbConnect();

      const card = await Card.create({
        ...data,
      });

      res.status(200).json({
        status: "success",
        message: "card created",
        data: card,
      });
    } catch (error) {
      res.status(400).json({ status: "error", message: error.message });
    }
  }
}
