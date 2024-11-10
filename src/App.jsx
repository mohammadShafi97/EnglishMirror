import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/home/HomePage";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [{ index: true, element: <HomePage /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}
