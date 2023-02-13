import { createTRPCRouter } from './context';
import { createRouter } from './routers/create';

export const appRouter = createTRPCRouter({
  create: createRouter,
});

export type AppRouter = typeof appRouter;
