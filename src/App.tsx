import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import Catalog from "./pages/catalog/Catalog.tsx";
import ShopCart from "./pages/shop-cart/ShopCart.tsx";

function App() {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path='/' element={<Catalog/>}/>
                <Route path="/cart" element={<ShopCart/>}/>
            </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default App
