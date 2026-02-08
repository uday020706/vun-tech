import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Container } from "@/components/layout/Container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { apiFetch, setAuthToken } from "@/lib/api"

export function AdminLogin() {
  const navigate = useNavigate()
  const location = useLocation()
  const [form, setForm] = useState({ email: "", password: "" })
  const [status, setStatus] = useState({ type: "idle", message: "" })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: "loading", message: "Signing in..." })
    try {
      const data = await apiFetch("/api/admin/login", {
        method: "POST",
        body: JSON.stringify(form),
      })
      setAuthToken(data.token)
      const redirectTo = location.state?.from?.pathname || "/admin/dashboard"
      navigate(redirectTo, { replace: true })
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Login failed.",
      })
    }
  }

  return (
    <div className="bg-sand min-h-[70vh]">
      <Container className="py-12">
        <Card className="mx-auto max-w-md">
          <CardHeader>
            <CardTitle>Admin login</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Password</label>
                <Input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" className="w-full">
                Sign in
              </Button>
              {status.type !== "idle" && (
                <p
                  className={`text-sm ${
                    status.type === "error" ? "text-red-600" : "text-moss"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </Container>
    </div>
  )
}
