import { Link } from "react-router-dom"

export default function Products() {
  return (
    <div className="page">
      <h2>Products</h2>

      <div className="products">
        <Link className="card" to="/products/101">Product 101</Link>
        <Link className="card" to="/products/102">Product 102</Link>
        <Link className="card" to="/products/103">Product 103</Link>
        <Link className="card" to="/products/104">Product 104</Link>
      </div>
    </div>
  )
}
