import "@testing-library/jest-dom";

import { setupServer } from "msw/node";

import { handlers } from "__mocks__/mswMock";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export const server = setupServer(...handlers);
