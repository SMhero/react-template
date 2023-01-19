import { useQuery } from "@tanstack/react-query";
import "@testing-library/jest-dom";
import { fireEvent, renderHook, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";

import { getUsers } from "api/users";
import Template from "components/Template/Template";
import { server } from "tests/setupTests";
import { createWrapper, renderWithClient } from "tests/Wrappers";

describe("Template", () => {
  it("renders properly", () => {
    renderWithClient(<Template />);

    fireEvent.click(screen.getByText("Show data"));
    expect(
      screen.getByText("No data here... Try to push submit button!")
    ).toBeVisible();
  });

  it("loads data", async () => {
    renderWithClient(<Template />);

    server.use(
      rest.get("*/users", (_, res, ctx) =>
        res(
          ctx.status(200),
          ctx.json([
            { name: "Leanne Graham" },
            { name: "Ervin Howell" },
            { name: "Clementine Bauch" },
          ])
        )
      )
    );

    const { result, rerender } = renderHook(
      ({ enabled }) =>
        useQuery({
          queryKey: ["users"],
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

    fireEvent.click(screen.getByText("Submit"));

    rerender({ enabled: true });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
      expect(result.current.data).toStrictEqual([
        { name: "Leanne Graham" },
        { name: "Ervin Howell" },
        { name: "Clementine Bauch" },
      ]);
    });
  });
});
