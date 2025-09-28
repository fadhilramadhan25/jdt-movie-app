import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import { RouterProvider } from "react-router";
import { routes } from "./routes";
import { TokenProvider } from "./hooks/useToken";
import { FavoritesProvider } from "./context/FavoritesContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TokenProvider>
      <FavoritesProvider>
        <RouterProvider router={routes} />
      </FavoritesProvider>  
    </TokenProvider>
  </StrictMode>
);
