// src/app/privacy/page.tsx
export const metadata = {
    title: 'Privacy Policy',
    description: 'How Travaky collects, uses, and protects your data.',
  }
  
  export default function PrivacyPage() {
    return (
      <div className="prose mx-auto py-12 px-4">
        <h1>Privacy Policy</h1>
        <p>Last updated: June 2025</p>
        <p>
          Travaky (“we”, “our”) is committed to protecting your privacy. This
          policy explains how we collect, use, and share your personal data.
        </p>
        <h2>Data We Collect</h2>
        <ul>
          <li>Contact details (name, email, phone)</li>
          <li>Passport and travel document information</li>
          <li>Payment transaction details</li>
        </ul>
        <h2>How We Use Your Data</h2>
        <ul>
          <li>To process your visa application</li>
          <li>To send appointment reminders and notifications</li>
          <li>To comply with legal requirements</li>
        </ul>
        <h2>Security</h2>
        <p>
          We use industry-standard encryption and secure servers to protect your
          data.
        </p>
        <h2>Your Rights</h2>
        <p>
          You may request access, correction, or deletion of your personal data
          at any time by{' '}
          <a href="/contact">contacting us</a>.
        </p>
      </div>
    )
  }
  