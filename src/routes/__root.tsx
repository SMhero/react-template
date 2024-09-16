import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import App from "@/components/App/App";

export const Route = createRootRoute({
  component: () => (
    <>
      <App>
        <Outlet />
      </App>
      <ReactQueryDevtools />
      <TanStackRouterDevtools />
    </>
  ),
});
