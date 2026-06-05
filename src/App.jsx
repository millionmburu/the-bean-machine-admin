import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer";

import About from "./pages/About.jsx"
import AddProduct from "./pages/AddProduct.jsx"
import Home from "./pages/Home.jsx"
import NotFound from "./pages/NotFound.jsx"
import Products from "./pages/Products.jsx"

function App() {
    return (
        <BrowserRouter>
            <Navbar/>

            <div class = "container mt-3">
                <Routes>
                    <Route path = "/" element= {<Home/>}/>
                    <Route path = "/products" element= {<Products/>}/>
                    <Route path = "*" element= {<NotFound/>}/>
                    <Route path = "/about" element= {<About/>}/>
                    <Route path = "/add-product" element= {<AddProduct/>}/>
                </Routes>
                <Footer/>
            </div> 
            
        </BrowserRouter>
        
    )
}

export default App;