import { useState } from "react"
import { Container } from "@/components/layout/Container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { SectionBadge, GradientOrbs } from "@/components/Decorations"
import { apiFetch } from "@/lib/api"

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  website: "",
  humanCheck: "",
}

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "hello@techservices.agency"
const WHATSAPP_URL = import.meta.env.VITE_WHATSAPP_URL || "https://wa.me/1234567890"

export function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: "idle", message: "" })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = "Name is required."
    if (!form.email.trim()) nextErrors.email = "Email is required."
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email."
    }
    if (!form.phone.trim()) nextErrors.phone = "Contact number is required."
    if (!form.message.trim()) nextErrors.message = "Message is required."
    if (form.humanCheck.trim() !== "7") {
      nextErrors.humanCheck = "Please answer the spam check."
    }
    return nextErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    if (form.website) {
      setStatus({ type: "success", message: "Thanks! We'll be in touch." })
      setForm(initialForm)
      return
    }

    setStatus({ type: "loading", message: "Sending..." })

    try {
      await apiFetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          message: form.message,
        }),
      })
      setStatus({
        type: "success",
        message: "Thanks. We will respond within two business days.",
      })
      setForm(initialForm)
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      })
    }
  }

  return (
    <div className="bg-sand">
      <section className="relative border-b border-fog bg-sand bg-grid">
        <GradientOrbs />
        <Container className="py-14">
          <SectionBadge>Contact</SectionBadge>
          <h1 className="text-4xl font-semibold">Tell us about your project</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate">
            Share your goals and timelines. We will reply with clear next steps.
          </p>
        </Container>
      </section>

      <section>
        <Container className="grid gap-6 py-12 md:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <CardHeader>
              <CardTitle>Project inquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <Input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium">Contact number</label>
                    <Input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 555 000 1234"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium">Company (optional)</label>
                    <Input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company name"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Project details</label>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What are you building? What's the deadline?"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                  )}
                </div>
                <div className="hidden">
                  <label className="text-sm font-medium">Website</label>
                  <Input
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Spam check: 3 + 4 = ?</label>
                  <Input
                    name="humanCheck"
                    value={form.humanCheck}
                    onChange={handleChange}
                    placeholder="Answer"
                  />
                  {errors.humanCheck && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.humanCheck}
                    </p>
                  )}
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send inquiry
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

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Direct contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate">
                <div>Email: {CONTACT_EMAIL}</div>
                <div>
                  WhatsApp:{" "}
                  <a className="text-moss" href={WHATSAPP_URL}>
                    Message us
                  </a>
                </div>
                <div>We are based in the US and work remotely.</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What happens next</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate">
                <div>1. We review your request.</div>
                <div>2. We confirm scope and priorities.</div>
                <div>3. You get a clear plan and timeline.</div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>What we need from you</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate">
                <div>• A short description of the project.</div>
                <div>• Expected deadline or milestone.</div>
                <div>• Current links, docs, or references.</div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  )
}
