import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index/Index";
import ProductsPage from "./pages/ProductsPage/ProductsPage";

const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/products", element: <ProductsPage /> },
]);

export default router;
