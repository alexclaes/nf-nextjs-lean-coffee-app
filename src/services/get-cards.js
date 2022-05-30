import { dbConnect } from '../lib/database';
import Card from '../model/card';

export const getCards = async () => {
  await dbConnect();

  const cards = await Card.find().populate('user');

  return cards.map(({ id, content, user }) => {
    return {
      id,
      content,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
      },
    };
  });
};
