import { dbConnect } from '../../../src/lib/database';
import Card from '../../../src/model/card';
import User from '../../../src/model/user';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = JSON.parse(req.body);
      console.log(data);

      await dbConnect();

      let user = await User.findOne({ email: data.user.email });
      if (!user) {
        user = await User.create({ ...data.user });
      }

      const card = await Card.create({
        content: data.content,
        user: user.id,
      });

      res.status(200).json({
        status: 'success',
        message: 'card created',
        data: card,
      });
    } catch (error) {
      res.status(400).json({ status: 'error', message: error.message });
    }
  }
}
