import LegalNav from '../_components/LegalNav'

export default function CookiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold tracking-tight">Cookie Policy</h1>
      <LegalNav active="cookies" />
      <div className="prose max-w-none">
        <p>
          We use cookies to keep you signed in, remember preferences, and measure usage.
          You can disable cookies in your browser; some features may not work correctly.
        </p>
      </div>
    </div>
  )
}
