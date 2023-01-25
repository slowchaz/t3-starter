import { createTRPCRouter } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { buildsRouter } from "./buildsRouter"

export const appRouter = createTRPCRouter({
  example: exampleRouter,
  auth: authRouter,
  builds: buildsRouter,
});

export type AppRouter = typeof appRouter;