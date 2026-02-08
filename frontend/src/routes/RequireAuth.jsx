import { Navigate, useLocation } from "react-router-dom"
import { getAuthToken } from "@/lib/api"

export function RequireAuth({ children }) {
  const location = useLocation()
  const token = getAuthToken()

  if (!token) {
    return <Navigate to="/admin" state={{ from: location }} replace />
  }

  return children
}
