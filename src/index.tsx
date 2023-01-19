import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "components/App/App";
import ErrorBoundary from "modules/ErrorBoundary/ErrorBoundary";

import "./assets/css/global.css";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const renderApp = () => {
  root.render(
    <StrictMode>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ErrorBoundary>
    </StrictMode>
  );
};

renderApp();

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./components/App/App", () => {
    renderApp();
  });
}
