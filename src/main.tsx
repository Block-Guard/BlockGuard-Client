import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router.tsx";
import {QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/sonner";

const clientQuery = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={clientQuery}>
    <RouterProvider router={router} />
    <Toaster />
    {/* <ReactQueryDevtools initialIsOpen={false}/> */}
    </QueryClientProvider>
  </StrictMode>
);
