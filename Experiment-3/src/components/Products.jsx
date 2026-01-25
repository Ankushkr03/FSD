import { Link } from "react-router-dom"

export default function Products() {
  return (
    <div className="page">
      <h2>Products</h2>

      <div className="products">
        <Link className="card" to="/products/101">Bag</Link>
        <Link className="card" to="/products/102">Shoe</Link>
        <Link className="card" to="/products/103">Watch</Link>
        <Link className="card" to="/products/104">School dress</Link>
      </div>
    </div>
  )
}
