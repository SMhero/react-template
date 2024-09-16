import { QueryClient, QueryClientProvider as _QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export const QueryClientProvider = ({ children }: { children: React.ReactNode }) => (
  <_QueryClientProvider client={queryClient}>{children}</_QueryClientProvider>
);
