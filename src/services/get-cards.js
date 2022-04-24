import { dbConnect } from "../lib/database";
import Card from "../model/card";

export const getCards = async () => {
  await dbConnect();

  const cards = await Card.find();

  return cards.map(({ id, name, content }) => {
    return {
      id,
      name,
      content,
    };
  });
};
