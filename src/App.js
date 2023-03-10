import About from './components/About/about.js';
import Cart from './components/Cart/cart.js';
import Product from './components/Product/product.js';
import Confirmation from './components/Confirmation/confirmation';
import NavBar from './components/NavBar/navbar.js';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
export default function App(props) {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="Product" element={<Product/>} />
                    <Route path="About" element={<About/>} />
                    <Route path="Cart" element={<Cart/>} />
                    <Route path="Confirmation" element={<Confirmation/>} />
                </Routes>
            </Router>
        </div>
    )
}