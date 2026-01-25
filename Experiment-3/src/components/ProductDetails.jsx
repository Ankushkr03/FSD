import { useParams } from "react-router-dom"

export default function ProductDetails() {
  const { id } = useParams()

  return (
    <div className="page">
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
    </div>
  )
}
