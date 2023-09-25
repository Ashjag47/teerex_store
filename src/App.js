import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductListingPage, ShoppingCartPage } from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListingPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
