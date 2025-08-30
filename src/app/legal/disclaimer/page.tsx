import LegalNav from '../_components/LegalNav'

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold tracking-tight">Disclaimer</h1>
      <LegalNav active="disclaimer" />
      <div className="prose max-w-none">
        <p>
          Travaky provides facilitation services. Final visa decisions are made by the
          respective consulates. Information on this site is subject to change without notice.
        </p>
      </div>
    </div>
  )
}
