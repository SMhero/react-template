import { useQuery } from "@tanstack/react-query";
import "@testing-library/jest-dom";
import { renderHook, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";

import { getUsers } from "api/users";
import Template from "components/Template/Template";
import { server } from "tests/setupTests";
import { createWrapper, renderWithClient } from "tests/Wrappers";

const mockedUsers = [
  { name: "Leanne Graham" },
  { name: "Ervin Howell" },
  { name: "Clementine Bauch" },
];

describe("Template", () => {
  it("renders properly", async () => {
    renderWithClient(<Template />);

    await userEvent.click(screen.getByText("Show data"));

    expect(screen.getByText("No data here... Try to push submit button!")).toBeVisible();
  });

  it("loads data", async () => {
    server.use(rest.get("*/users", (_, res, ctx) => res(ctx.status(200), ctx.json(mockedUsers))));

    const { container } = renderWithClient(<Template />);

    const { result, rerender } = renderHook(
      ({ enabled }) =>
        useQuery({
          queryKey: ["users-query"],
          queryFn: getUsers,
          enabled,
        }),
      {
        initialProps: {
          enabled: false,
        },
        wrapper: createWrapper,
      }
    );

    await userEvent.click(screen.getByText("Submit"));
    rerender({ enabled: true });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toStrictEqual(mockedUsers);
    expect(container.querySelector(".code")).toBeInTheDocument();
  });

  it("loads error", async () => {
    server.use(rest.get("*/users", (_, res, ctx) => res(ctx.status(500))));

    const { container } = renderWithClient(<Template />);

    const { result, rerender } = renderHook(
      ({ enabled }) =>
        useQuery({
          queryKey: ["users-query"],
          queryFn: getUsers,
          enabled,
        }),
      {
        initialProps: {
          enabled: false,
        },
        wrapper: createWrapper,
      }
    );

    await userEvent.click(screen.getByText("Submit"));
    rerender({ enabled: true });

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current.data).toBe(undefined);
    expect(container.querySelector(".error")).toBeInTheDocument();
  });
});
