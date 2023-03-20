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
        slug: z.string().optional(),
        email: z.string().optional(),
      })
    )
    .output(
      z.object({
        shortLink: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const slug = input.slug || nanoid(7);
      let res;

      if (input.email) {
        res = await ctx.prisma.user.update!({
          where: {
            email: input.email,
          },
          data: {
            links: {
              create: {
                url: input.url,
                slug,
              },
            },
          },
        });

        ctx.res.setHeader('Content-Type', 'application/json');
        ctx.res.setHeader('Access-Control-Allow-Origin', '*');
        ctx.res.setHeader(
          'Cache-Control',
          's-maxage=1000000000, stale-while-revalidate'
        );

        return {
          shortLink: slug,
        };
      }
      if (!input.email) {
        res = await ctx.prisma.link.create!({
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
        console.log(res);

        return {
          shortLink: res.slug,
        };
      }

      return {
        shortLink: slug,
      };
    }),
});
