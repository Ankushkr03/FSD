import { Routes, Route, NavLink } from "react-router-dom"
import "./App.css"

import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Products from "./components/Products"
import ProductDetails from "./components/ProductDetails"
import NotFound from "./components/NotFound"

function App() {
  return (
    <>
      <nav>
  <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>
    Home
  </NavLink>

  <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>
    About
  </NavLink>

  <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>
    Contact
  </NavLink>

  <NavLink to="/products" className={({isActive}) => isActive ? "active" : ""}>
    Products
  </NavLink>
</nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App