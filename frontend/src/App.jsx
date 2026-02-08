import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SiteHeader } from "@/components/layout/SiteHeader"
import { SiteFooter } from "@/components/layout/SiteFooter"
import { Home } from "@/pages/Home"
import { Services } from "@/pages/Services"
import { Work } from "@/pages/Work"
import { Trending } from "@/pages/Trending"
import { About } from "@/pages/About"
import { Contact } from "@/pages/Contact"
import { Privacy } from "@/pages/Privacy"
import { Terms } from "@/pages/Terms"
import { AdminLogin } from "@/pages/AdminLogin"
import { AdminDashboard } from "@/pages/AdminDashboard"
import { RequireAuth } from "@/routes/RequireAuth"
import { ChatWidget } from "@/components/ChatWidget"

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-sand">
        <SiteHeader />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route
              path="/admin/dashboard"
              element={
                <RequireAuth>
                  <AdminDashboard />
                </RequireAuth>
              }
            />
          </Routes>
        </main>
        <SiteFooter />
        <ChatWidget />
      </div>
    </BrowserRouter>
  )
}

export default App
