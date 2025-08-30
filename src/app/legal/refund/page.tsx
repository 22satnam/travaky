import LegalNav from '../_components/LegalNav'

export default function RefundPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold tracking-tight">Refund Policy</h1>
      <LegalNav active="refund" />
      <div className="prose max-w-none">
        <p>
          If we fail to deliver the promised Travaky service component, contact us at
          <a href="mailto:support@travaky.com"> support@travaky.com</a>. Visa/VFS/embassy
          fees are typically non-refundable.
        </p>
        <ul>
          <li>Refunds apply to Travaky service fees only.</li>
          <li>Processed to the original payment method.</li>
          <li>Please allow 5–10 business days to reflect.</li>
        </ul>
      </div>
    </div>
  )
}
