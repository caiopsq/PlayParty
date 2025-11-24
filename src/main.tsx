
  import { createRoot } from "react-dom/client";
  import { StrictMode } from "react";
  import App from "./App.tsx";
  import Sandbox from "./components/pages/Sandbox.jsx";
  import ProductPage from "./components/pages/ProductPage.tsx";
  import './index.css';
  import { createBrowserRouter, RouterProvider } from "react-router-dom";
  const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/produtos",
        element: <ProductPage />,
      },
      {
        path: "/playground",
        element: <Sandbox />,
      }
  ]);

  createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
  