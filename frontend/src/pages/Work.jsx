import { useEffect, useMemo, useState } from "react"
import { Container } from "@/components/layout/Container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionBadge, GradientOrbs } from "@/components/Decorations"
import { Badge } from "@/components/ui/badge"
import { apiFetch } from "@/lib/api"
import { defaultProjects } from "@/data/content"

export function Work() {
  const [projects, setProjects] = useState(defaultProjects)

  useEffect(() => {
    apiFetch("/api/projects")
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setProjects(data)
      })
      .catch(() => {})
  }, [])

  const industries = useMemo(() => {
    const list = projects
      .map((project) => project.industry)
      .filter(Boolean)
    return Array.from(new Set(list))
  }, [projects])

  return (
    <div className="bg-sand">
      <section className="relative border-b border-fog bg-sand bg-grid">
        <GradientOrbs />
        <Container className="py-14">
          <SectionBadge>Work</SectionBadge>
          <h1 className="text-4xl font-semibold">Case-ready work, no hype</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate">
            A sample of recent delivery across product, operations, and internal
            tooling. Each engagement focuses on clarity and long-term stability.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-12">
          {industries.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {industries.map((industry) => (
                <Badge key={industry}>{industry}</Badge>
              ))}
            </div>
          )}
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <Card key={project._id || project.name}>
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  {project.industry && (
                    <div className="text-xs uppercase tracking-wide text-ink/60">
                      {project.industry}
                    </div>
                  )}
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-slate">
                  <p>{project.description}</p>
                  {project.outcome && (
                    <p className="text-ink">Outcome: {project.outcome}</p>
                  )}
                  {project.stack?.length > 0 && (
                    <div className="flex flex-wrap gap-2 text-xs text-slate">
                      {project.stack.map((item) => (
                        <span key={item} className="rounded-full bg-fog px-2 py-1">
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.link && (
                    <a className="text-sm text-moss" href={project.link}>
                      View details
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
