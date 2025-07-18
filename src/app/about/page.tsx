// src/app/about/page.tsx
export const metadata = {
    title: 'About Travaky',
    description: 'Learn more about Travaky and our mission.',
  }
  
  export default function AboutPage() {
    return (
      <div className="prose mx-auto py-12 px-4">
        <h1>About Travaky</h1>
        <p>
          Travaky is your one-stop solution for seamless visa assistance. We help
          travelers around the world navigate complex visa applications with
          ease and confidence.
        </p>
        <h2>Our Mission</h2>
        <p>
          To simplify and streamline the visa application process, providing
          end-to-end support so you can focus on your journey.
        </p>
        <h2>Why Travaky?</h2>
        <ul>
          <li>Expert guidance for every country’s visa requirements</li>
          <li>Secure online document management</li>
          <li>Real-time appointment booking & reminders</li>
          <li>Dedicated customer support</li>
        </ul>
      </div>
    )
  }
  