export default function FAQPage() {
  const faqs: { id?: string; q: string; a: string }[] = [
    { id:'what-is', q:'What is Travaky?', a:'Travaky is a managed visa service—documents, appointments, and delivery handled end-to-end.' },
    { id:'countries', q:'Which countries are supported?', a:'We support visas for 150+ destinations including Schengen, UK, US, UAE, and more.' },
    { id:'pickup', q:'How does doorstep pickup work?', a:'Our courier collects your passport and documents at a scheduled time from your address.' },
    { id:'docs', q:'What documents are required?', a:'Requirements vary by country and purpose. We provide a personalized checklist after you start.' },
    { id:'photo', q:'Any photo guidelines?', a:'We follow embassy specs. If needed, we’ll request a fresh photo during review.' },
    { id:'pay', q:'Which payment methods do you accept?', a:'All major cards, UPI, and net-banking via our secure gateway.' },
    { id:'promo', q:'How do promo codes work?', a:'Enter a valid code during payment. Some codes apply to specific plans only.' },
  ]

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">Frequently Asked Questions</h1>
      <div className="mt-8 space-y-6">
        {faqs.map(f => (
          <div id={f.id} key={f.q} className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6">
            <div className="font-semibold">{f.q}</div>
            <p className="mt-2 text-foreground/70">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
