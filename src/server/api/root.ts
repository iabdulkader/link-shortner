import { createTRPCRouter } from './context';
import { createRouter } from './routers/create';
import { linkRouter } from './routers/link';
import { userRouter } from './routers/user';

export const appRouter = createTRPCRouter({
  create: createRouter,
  user: userRouter,
  link: linkRouter,
});

export type AppRouter = typeof appRouter;
