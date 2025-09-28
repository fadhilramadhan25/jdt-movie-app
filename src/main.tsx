import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import { RouterProvider } from "react-router";
import { routes } from "./routes";
import { FavoritesProvider } from "./context/FavoritesContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <FavoritesProvider>
        <RouterProvider router={routes} />
      </FavoritesProvider>  
  </StrictMode>
);
