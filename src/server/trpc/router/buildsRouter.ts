import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const buildsRouter = createTRPCRouter({
  createBuild: publicProcedure
    .input(z.object({ matchUp: z.string(), build: z.string() }))
    .mutation(async ({ input, ctx }) => {
      // save to db

      const build = await ctx.prisma.buildOrder.create({
        data: {
          ...input,
        }
      });

      return build;
    }),
});
