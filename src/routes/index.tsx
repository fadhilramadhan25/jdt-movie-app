// src/routes/index.tsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import HomePage from "../features/HomePage";
import MovieDetailsPage from "../features/MovieDetailsPage";
import SearchPage from "../features/SearchPage";
import Login from "../features/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import ProductScreen from "../features/product";

export const routes = createBrowserRouter([
{
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/product",
        element: <ProductScreen />,
      },
  {
    path: "/",
    element: <Layout />,        // wrapper
    children: [
      {
        index: true,            // path: '/'
        element: <HomePage />,
      },
      {
        path: "movie/:id",       // path otomatis '/movie/:id'
        element: <MovieDetailsPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      
    ],
  },
],
},
]);
