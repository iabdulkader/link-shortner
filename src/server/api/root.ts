import { createTRPCRouter } from './context';
import { createRouter } from './routers/create';
import { userRouter } from './routers/user';

export const appRouter = createTRPCRouter({
  create: createRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;
