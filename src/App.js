import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import ProductsListPage from "./pages/ProductsListPage/ProductsListPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CategoriesListPage from "./pages/CategoriesListPage/CategoriesListPage"
import ProductInfoPage from "./pages/ProductInfoPage/ProductInfoPage"
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage"



function App() {
  return (
    <div id="home">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="categories" element={<CategoriesListPage />} />
          <Route path="products" element={<ProductsListPage />} />
          <Route path="categories/:id" element={<ProductsListPage />} />
          <Route path="products/:id" element={<ProductInfoPage />} />
          <Route path="cart" element={<ShoppingCartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
