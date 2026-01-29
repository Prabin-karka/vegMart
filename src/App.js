import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import "./styles.css";

function App() {
  return (
    // ✅ Add basename so routes work under /veg_mart on GitHub Pages
    <BrowserRouter basename="/veg_mart">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;