import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";

const handlers = [
  rest.get("*/users", (_, res, ctx) => {
    res(ctx.status(200));
  }),
];

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export const server = setupServer(...handlers);
