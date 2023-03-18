import { z } from 'zod';
import { nanoid } from 'nanoid';

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from '../context';

export const userRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
      })
    )
    .output(
      z.object({
        name: z.string(),
        email: z.string().email(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const res = await ctx.prisma.user.create!({
        data: {
          name: input.name,
          email: input.email,
          password: input.password,
        },
      });

      return {
        name: res.name,
        email: res.email,
      };
    }),
});
