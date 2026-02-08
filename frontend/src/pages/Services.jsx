import { useEffect, useState } from "react"
import { Container } from "@/components/layout/Container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Link } from "react-router-dom"
import { featuredServices, serviceGroups } from "@/data/content"
import { apiFetch } from "@/lib/api"
import { GradientOrbs, SectionBadge } from "@/components/Decorations"

export function Services() {
  const [services, setServices] = useState(featuredServices)
  const [categories, setCategories] = useState(serviceGroups)
  const [open, setOpen] = useState(false)
  const [activeGroup, setActiveGroup] = useState(serviceGroups[0])

  const groupByTitle = (title) =>
    categories.find((group) => group.title === title) || categories[0]

  useEffect(() => {
    apiFetch("/api/services")
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setServices(data)
      })
      .catch(() => {})
    apiFetch("/api/categories")
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const mapped = data.map((group) => ({
            title: group.title,
            items: group.items || [],
            _id: group._id,
          }))
          setCategories(mapped)
          setActiveGroup(mapped[0])
        }
      })
      .catch(() => {})
  }, [])

  return (
    <div className="bg-sand">
      <section className="relative border-b border-fog bg-sand bg-grid">
        <GradientOrbs />
        <Container className="py-14">
          <SectionBadge>Services</SectionBadge>
          <h1 className="text-4xl font-semibold">Clear, focused delivery</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate">
            We keep the service list tight so you know exactly what to expect.
            Each engagement starts with clarity on scope, timeline, and outcomes.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-12">
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group glass-card cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg"
                onClick={() => {
                  const titleFromService =
                    service?.categoryId?.title ||
                    service?.categoryTitle ||
                    categories[0]?.title
                  const targetGroup = groupByTitle(titleFromService)
                  setActiveGroup(targetGroup)
                  setOpen(true)
                }}
              >
                <CardHeader className="pb-3">
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-slate">
                  <p>{service.description}</p>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-ink/60">
                      Included
                    </div>
                    <ul className="mt-2 space-y-2 text-ink">
                      {(service.includes || []).map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-ink/60">
                      Ideal for
                    </div>
                    <p className="mt-2 text-ink">{service.idealFor}</p>
                  </div>
                  <div className="pt-2 text-xs font-medium text-moss">
                    View complete service list →
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-fog bg-white p-6">
            <div>
              <div className="text-lg font-semibold">Not sure what you need?</div>
              <div className="text-sm text-slate">
                We can help refine scope before any commitment.
              </div>
            </div>
            <Button asChild>
              <Link to="/contact">Talk with us</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-4 rounded-xl border border-fog bg-sand p-6 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold text-ink">Engagement options</div>
              <p className="mt-2 text-sm text-slate">
                Choose the delivery model that fits your team and risk profile.
              </p>
            </div>
            <div className="text-sm text-slate">
              <div className="font-medium text-ink">Fixed scope</div>
              <div>Defined deliverables, clear timeline, fixed budget.</div>
            </div>
            <div className="text-sm text-slate">
              <div className="font-medium text-ink">Retainer</div>
              <div>Monthly roadmap, ongoing improvements, predictable cost.</div>
            </div>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>Complete service list</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 md:grid-cols-[200px_1fr]">
                <div className="space-y-2">
                  {categories.map((group) => (
                    <button
                      key={group.title}
                      type="button"
                      onClick={() => setActiveGroup(group)}
                      className={`w-full rounded-lg px-3 py-2 text-left text-sm ${
                        activeGroup?.title === group.title
                          ? "bg-fog text-ink"
                          : "text-slate hover:bg-sand"
                      }`}
                    >
                      {group.title}
                    </button>
                  ))}
                </div>
                <div className="rounded-lg border border-fog bg-sand p-4">
                  <div className="mb-2 text-sm font-semibold text-ink">
                    {activeGroup?.title}
                  </div>
                  <ul className="space-y-2 text-sm text-slate">
                    {(activeGroup?.items || []).map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </Container>
      </section>
    </div>
  )
}
