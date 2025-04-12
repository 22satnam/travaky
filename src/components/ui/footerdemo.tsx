import { Footer } from "@/components/ui/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
        <p className="mt-4 text-lg">This is a demo page showcasing our footer component.</p>
      </div>
      <Footer />
    </main>
  )
}
