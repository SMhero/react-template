import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { QueryClientProvider } from "@/components/providers/QueryClientProvider";

import ErrorBoundary from "@/modules/ErrorBoundary/ErrorBoundary";

import { routeTree } from "@/routeTree.gen";

import "./assets/css/global.css";

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const router = createRouter({ routeTree });

const root = document.getElementById("root") as HTMLDivElement;

createRoot(root).render(
  <StrictMode>
    <ErrorBoundary>
      <QueryClientProvider>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ErrorBoundary>
  </StrictMode>
);
