"use client";
<<<<<<< HEAD
=======

>>>>>>> 690e3d29ea468f826666bce77e191df162285363
import React, { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/ui/sonner";
import { store } from "./state/store";
import { Provider } from "react-redux";

function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000 * 5,
          },
        },
      })
  );
  return (
<<<<<<< HEAD
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>{children}</Provider>
      <Toaster />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
=======
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>{children}</Provider>
        <Toaster />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
>>>>>>> 690e3d29ea468f826666bce77e191df162285363
  );
}

export default Providers;
