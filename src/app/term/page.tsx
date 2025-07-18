// src/app/terms/page.tsx
export const metadata = {
    title: 'Terms & Conditions',
    description: 'Read Travaky’s terms of service and user agreement.',
  }
  
  export default function TermsPage() {
    return (
      <div className="prose mx-auto py-12 px-4">
        <h1>Terms & Conditions</h1>
        <p>Last updated: June 2025</p>
        <p>
          Welcome to Travaky. By using our services, you agree to the following
          terms and conditions. Please read them carefully.
        </p>
        <h2>1. Use of Service</h2>
        <p>
          Travaky provides visa application assistance. You must comply with all
          applicable laws and provide accurate information.
        </p>
        <h2>2. Fees & Payment</h2>
        <p>
          All fees are quoted in INR and must be paid via our supported payment
          gateways. Refunds are subject to our refund policy.
        </p>
        <h2>3. Privacy</h2>
        <p>
          We respect your privacy. Please review our{' '}
          <a href="/privacy">Privacy Policy</a> to learn how we handle your data.
        </p>
        <h2>4. Limitation of Liability</h2>
        <p>
          Travaky is not responsible for visa approval decisions made by
          government authorities.
        </p>
        <h2>Contact Us</h2>
        <p>
          For any questions regarding these terms, please{' '}
          <a href="/contact">contact us</a>.
        </p>
      </div>
    )
  }
  