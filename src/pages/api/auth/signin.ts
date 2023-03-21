import { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '../../../server/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: {
          equals: req.body.email,
        },
      },
    });

    if (!user) {
      return res.json({ success: false, error: 'User with email not found' });
    }

    if (user.password !== req.body.password) {
      return res.json({ success: false, error: 'Invalid password' });
    }

    return res.json({ success: true, user });
  } catch (error) {
    res.json({ success: false, error: 'Something went wrong.' });
  }
};
