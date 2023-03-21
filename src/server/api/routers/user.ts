import { z } from 'zod';
import { nanoid } from 'nanoid';

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from '../context';
import { Prisma } from '@prisma/client';

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
        id: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
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
          id: res.id,
        };
      } catch (error) {
        if (
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === 'P2002'
        ) {
          throw new Error('User already exists with this email');
        } else {
          throw new Error('Something went wrong');
        }
      }
    }),
  allLinks: publicProcedure
    .input(
      z.object({
        email: z.string().email().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const res = await ctx.prisma.user.findFirst({
        where: {
          email: input.email,
        },
        include: {
          links: true,
        },
      });

      if (res!.links) {
        return res!.links;
      } else {
        return [];
      }
    }),
  deleteLink: publicProcedure

    .input(
      z.object({
        slug: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const res = await ctx.prisma.link.delete!({
        where: {
          slug: input.slug,
        },
      });

      return res;
    }),
});
