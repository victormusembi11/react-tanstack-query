import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <App queryClient={queryClient} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
