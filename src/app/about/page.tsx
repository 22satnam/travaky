// src/app/about/page.tsx
export const metadata = {
    title: 'About Travaky',
    description: 'Learn more about Travaky and our mission.',
  }
export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            About <span className="text-primary">Travaky</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/70">
            Travaky is your one-stop solution for seamless visa assistance. We help
          travelers around the world navigate complex visa applications with
          ease and confidence.
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              ['150+','Countries served'],
              ['10,000+','Visas processed'],
              ['99%','Approval rate*'],
            ].map(([k, v]) => (
              <div key={k} className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6">
                <div className="text-3xl font-extrabold text-primary">{k}</div>
                <div className="mt-1 text-sm text-foreground/70">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6">
            <h2 className="text-xl font-bold">Our Mission</h2>
            <p className="mt-2 text-foreground/70">
            To simplify and streamline the visa application process, providing
          end-to-end support so you can focus on your journey.
              Make global mobility stress-free. <br></br>
              From documents to appointments to delivery,
              Travaky handles the details—so travellers don’t have to.
            </p>
          </div>
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6">
            <h2 className="text-xl font-bold">Our Vision</h2>
            <p className="mt-2 text-foreground/70">
              The world’s most trusted platform for visas and travel compliance,
              with transparent pricing, fast turnaround, and human support.
            </p>
          </div>
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6">
            <h2 className="text-xl font-bold">Core Values</h2>
            <ul className="mt-2 space-y-2 text-foreground/70">
              <li>• Customer Obsession</li>
              <li>• Trust & Data Security</li>
              <li>• Speed with Quality</li>
              <li>• Ownership & Clarity</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-8">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p className="mt-3 text-foreground/70">
            Travaky began with a simple question: why is applying for a visa still
            complicated? We built a doorstep-first process—guided expert reviews,
            managed appointments, and real-time tracking. Today, customers across India
            rely on Travaky to navigate complex requirements with confidence.
          </p>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold">Leadership & Team</h2>
        <p className="mt-2 text-foreground/70">
          A compact team of product builders, operations specialists, and visa experts.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {name:'Satnam Singh', role:'Co-founder'},
            {name:'Umang Rajput', role:'Co-founder'},
          ].map(m => (
            <div key={m.name} className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                {m.name.split(' ').map(s=>s[0]).join('').slice(0,2)}
              </div>
              <div className="mt-3 font-semibold">{m.name}</div>
              <div className="text-sm text-foreground/70">{m.role}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 p-6 ring-1 ring-black/5">
          <h3 className="text-xl font-bold">Want to build the future of visas?</h3>
          <p className="mt-2 text-foreground/70">
            We’re hiring across operations, engineering, and design.
          </p>
          <a href="/careers" className="mt-3 inline-block rounded-xl px-4 py-2 bg-primary text-white font-semibold">
            See Careers
          </a>
        </div>
      </section>
    </div>
  )
}
