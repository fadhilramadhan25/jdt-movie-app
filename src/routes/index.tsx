// src/routes/index.tsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import HomePage from "../features/HomePage";
import MovieDetailsPage from "../features/MovieDetailsPage";
import SearchPage from "../features/SearchPage";

export const routes = createBrowserRouter([
{
    
    children: [
      
      
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
