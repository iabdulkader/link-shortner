import { z } from 'zod';
import { nanoid } from 'nanoid';

import { createTRPCRouter, publicProcedure } from '../context';

export const linkRouter = createTRPCRouter({
  checkSlug: publicProcedure
    .input(
      z.object({
        slug: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const res = await ctx.prisma.link.findFirst({
        where: {
          slug: input.slug,
        },
      });

      if (res) {
        return true;
      } else {
        return false;
      }
    }),
});
