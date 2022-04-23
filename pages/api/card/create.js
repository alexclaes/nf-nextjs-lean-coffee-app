import { nanoid } from "nanoid";

export default function handler(req, res) {
  const id = nanoid();

  if (req.method === "POST") {
    try {
      const data = JSON.parse(req.body);
      const { name, content } = data;
      res.status(200).json({
        status: "success",
        message: "card created",
        data: {
          id,
          name,
          content,
        },
      });
    } catch (error) {
      res.status(400).json({ status: "error", message: error.message });
    }
  }
}
