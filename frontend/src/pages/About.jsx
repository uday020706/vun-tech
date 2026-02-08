import { Container } from "@/components/layout/Container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionBadge, GradientOrbs } from "@/components/Decorations"

const approach = [
  {
    title: "Discovery",
    description: "We define scope, outcomes, risks, and a practical roadmap.",
  },
  {
    title: "Delivery",
    description: "Weekly updates, tight feedback loops, and clear milestones.",
  },
  {
    title: "Stewardship",
    description: "We document, maintain, and improve the system after launch.",
  },
]

const team = [
  {
    name: "Uday Chandra",
    role: "Founder & Delivery Lead",
  },
  {
    name: "Vaani Sharma",
    role: "Product & Client Strategy",
  },
  {
    name: "Nitesh Pal",
    role: "Engineering & Systems",
  },
]

export function About() {
  return (
    <div className="bg-sand">
      <section className="relative border-b border-fog bg-sand bg-grid">
        <GradientOrbs />
        <Container className="py-14">
          <SectionBadge>About</SectionBadge>
          <h1 className="text-4xl font-semibold">Small team, serious delivery</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate">
            We are a focused group of engineers and product strategists. Our work
            is grounded in honesty, simple execution, and measurable progress.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-12">
          <div className="mb-10 grid gap-6 md:grid-cols-3">
            <img
              src="/images/about-1.svg"
              alt="Team collaboration"
              loading="lazy"
              decoding="async"
              className="h-48 w-full rounded-2xl border border-fog object-cover"
            />
            <img
              src="/images/about-2.svg"
              alt="Product planning"
              loading="lazy"
              decoding="async"
              className="h-48 w-full rounded-2xl border border-fog object-cover"
            />
            <img
              src="/images/about-3.svg"
              alt="Engineering delivery"
              loading="lazy"
              decoding="async"
              className="h-48 w-full rounded-2xl border border-fog object-cover"
            />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {approach.map((step) => (
              <Card key={step.title}>
                <CardHeader>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate">
                  {step.description}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10">
            <h2 className="text-2xl font-semibold">Team</h2>
            <p className="mt-2 text-sm text-slate">
              A small, senior team focused on clarity and delivery.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {team.map((member) => (
                <Card key={member.name} className="team-card glass-card">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="team-avatar">
                      {member.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </div>
                    <div>
                      <CardTitle>{member.name}</CardTitle>
                      <div className="mt-1 text-xs text-slate">
                        {member.role}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm text-slate">
                    <div className="team-badge">Core Team</div>
                    <p className="mt-3">
                      Focused on clear scope, dependable execution, and long-term
                      maintainability.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="mt-10 rounded-xl border border-fog bg-white p-6 text-sm text-slate">
            We work best with teams who value clear communication, respect time,
            and want solutions that last. If that sounds like you, we should talk.
          </div>
        </Container>
      </section>
    </div>
  )
}
