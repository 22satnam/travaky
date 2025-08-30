import LegalNav from '../_components/LegalNav'

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold tracking-tight">Privacy Policy</h1>
      <LegalNav active="privacy" />
      <div className="prose max-w-none prose-headings:font-semibold">
        <p>
          We collect only what we need to deliver Travaky’s services (e.g., name,
          contact details, passport information). We never sell your data.
        </p>
        <h3>What we collect</h3>
        <ul>
          <li>Account & contact information</li>
          <li>Application details and documents</li>
          <li>Payment metadata (processed by secure gateways)</li>
        </ul>
        <h3>How we use data</h3>
        <p>
          To review documents, schedule appointments, process payments, and provide
          support. Limited access is granted to trained personnel on a need-to-know basis.
        </p>
        <h3>Retention & security</h3>
        <p>
          Data is stored securely and retained only as long as required by law or for
          service delivery. You may request deletion where applicable.
        </p>
        <h3>Contact</h3>
        <p>Email <a href="mailto:privacy@travaky.com">privacy@travaky.com</a>.</p>
      </div>
    </div>
  )
}
