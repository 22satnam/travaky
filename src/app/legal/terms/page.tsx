import LegalNav from '../_components/LegalNav'

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold tracking-tight">Terms of Service</h1>
      <LegalNav active="terms" />
      <div className="prose max-w-none">
        <p>
          By using Travaky, you agree to these terms. We facilitate visa processes but
          do not guarantee outcomes; final decisions rest with embassies/consulates.
        </p>
        <h3>Use of Service</h3>
        <ul>
          <li>Provide accurate information and documents.</li>
          <li>Comply with applicable laws and embassy guidelines.</li>
        </ul>
        <h3>Fees & Payments</h3>
        <p>Fees are listed during checkout. Taxes may apply. Third-party fees may be payable at VFS/embassy.</p>
        <h3>Liability</h3>
        <p>
          Travaky is not liable for delays, rejections, or policy changes by authorities.
          We commit to transparent communication and support.
        </p>
      </div>
    </div>
  )
}
