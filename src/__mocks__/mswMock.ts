import { rest } from "msw";

export const handlers = [
  rest.get("*/users", (_, res, ctx) => {
    res(ctx.status(200));
  }),
  rest.get("*/users", (_, res, ctx) => {
    res(ctx.status(500));
  }),
];
