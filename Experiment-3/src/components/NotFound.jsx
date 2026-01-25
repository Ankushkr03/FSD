import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="page notfound">
      <h2>404 - Page Not Found</h2>
      <Link to="/">Go Home</Link>
    </div>
  )
}