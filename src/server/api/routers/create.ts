import { z } from 'zod';
import { nanoid } from 'nanoid';

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from '../context';

export const createRouter = createTRPCRouter({
  createUnAuth: publicProcedure
    .input(
      z.object({
        url: z.string(),
      })
    )
    .output(
      z.object({
        shortLink: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const slug = nanoid(7);

      const res = await ctx.prisma.link.create!({
        data: {
          url: input.url,
          slug,
        },
      });

      ctx.res.setHeader('Content-Type', 'application/json');
      ctx.res.setHeader('Access-Control-Allow-Origin', '*');
      ctx.res.setHeader(
        'Cache-Control',
        's-maxage=1000000000, stale-while-revalidate'
      );

      return {
        shortLink: res.slug,
      };
    }),
});
