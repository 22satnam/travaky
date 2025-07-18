// src/app/contact/page.tsx
export const metadata = {
    title: 'Contact Us',
    description: 'Get in touch with the Travaky team.',
  }
  
  export default function ContactPage() {
    return (
      <div className="prose mx-auto py-12 px-4">
        <h1>Contact Us</h1>
        <p>
          We’re here to help! Reach out to our support team via any of the
          following methods:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:support@travaky.com">support@travaky.com</a>
          </li>
          <li>
            <strong>Phone:</strong> +91-123-456-7890 (Mon–Fri, 9am–6pm IST)
          </li>
          <li>
            <strong>Address:</strong> 123 Travaky Lane, New Delhi, India
          </li>
        </ul>
        <h2>General Inquiries</h2>
        <p>
          For any other questions, use our contact form below:
        </p>
        {/* Insert your existing contact form component if you have one, e.g.: */}
        {/* <ContactForm /> */}
      </div>
    )
  }
  