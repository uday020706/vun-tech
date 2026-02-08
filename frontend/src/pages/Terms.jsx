import { Container } from "@/components/layout/Container"
import { Badge } from "@/components/ui/badge"

export function Terms() {
  return (
    <div className="bg-sand">
      <section className="border-b border-fog bg-white/70">
        <Container className="py-12">
          <Badge variant="outline" className="mb-4">
            Terms of Service
          </Badge>
          <h1 className="text-4xl font-semibold">Terms of Service</h1>
          <p className="mt-4 text-slate">
            Effective date: February 7, 2026.
          </p>
        </Container>
      </section>

      <section>
        <Container className="max-w-3xl space-y-4 py-10 text-sm text-slate">
          <p>
            By engaging Tech Services Agency, you agree to the terms described
            here. Detailed terms for a specific project will be defined in a
            written agreement.
          </p>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-ink">Services</h3>
            <p>
              We provide software design, development, and support services as
              agreed in project documentation.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-ink">Client responsibilities</h3>
            <ul className="list-disc space-y-1 pl-4">
              <li>Provide timely access to information and stakeholders.</li>
              <li>Review deliverables and provide feedback promptly.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-ink">Payment</h3>
            <p>
              Payment terms are agreed in writing before work begins. Late
              payments may pause delivery.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-ink">Limitation of liability</h3>
            <p>
              We are not liable for indirect damages. Our total liability is
              limited to fees paid for the services.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-ink">Contact</h3>
            <p>
              Questions about these terms can be sent to
              hello@techservices.agency.
            </p>
          </div>
        </Container>
      </section>
    </div>
  )
}
