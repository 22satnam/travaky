'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function ApplyVisaPage() {
  useEffect(() => {
    // Wait for OpnForm to render, then append Razorpay buttons
    const observer = new MutationObserver(() => {
      const iframe = document.getElementById('visa-application-form-uzkofw') as HTMLIFrameElement
      if (!iframe || document.getElementById('razorpay-wrapper')) return

      const wrapper = document.createElement('div')
      wrapper.id = 'razorpay-wrapper'
      wrapper.className = 'mt-6 p-4 border rounded-lg shadow bg-white max-w-xl mx-auto'

      wrapper.innerHTML = `
        <h2 class="text-xl font-semibold mb-3">💳 Choose Your Plan</h2>
        <button class="block w-full p-3 bg-blue-600 text-white rounded mb-2" onclick="openPayment('Docs on Call')">Docs on Call – ₹7500</button>
        <button class="block w-full p-3 bg-yellow-600 text-white rounded mb-2" onclick="openPayment('Docs on Door')">Docs on Door – ₹9500</button>
        <button class="block w-full p-3 bg-green-600 text-white rounded" onclick="openPayment('Visa at Door')">Visa at Door – ₹12500</button>
      `
      iframe.insertAdjacentElement('afterend', wrapper)
    })

    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />
      <Script src="https://opnform.com/widgets/iframe.min.js" strategy="afterInteractive" />
      <div className="w-full">
        <iframe
          style={{ border: 'none', width: '100%' }}
          id="visa-application-form-uzkofw"
          src="https://opnform.com/forms/visa-application-form-uzkofw"
          className="h-[1600px]"
        />
      </div>
      <Script id="razorpay-init" strategy="afterInteractive">
        {`
            function openPayment(plan) {
            const prices = {
                "Docs on Call": 7500,
                "Docs on Door": 9500,
                "Visa at Door": 12500
            }

            const options = {
                key: "rzp_test_bBoKqWpCP41T6f",
                amount: prices[plan] * 100,
                currency: "INR",
                name: "Travaky",
                description: plan + " Plan for ${params.country}",
                handler: function (response) {
                const redirectUrl = new URL("/confirmation", window.location.origin)

                redirectUrl.searchParams.append("plan", plan)
                redirectUrl.searchParams.append("id", response.razorpay_payment_id)
                redirectUrl.searchParams.append("country", "${params.country}")
                redirectUrl.searchParams.append("name", "${session?.user?.name ?? 'Guest'}")

                // NOTE: Replace below with real dynamic values when integrating with OpnForm webhook or backend
                redirectUrl.searchParams.append("date", "2025-04-25")
                redirectUrl.searchParams.append("time", "3:00 PM")
                redirectUrl.searchParams.append("address", "B-48 Gurgaon")
                redirectUrl.searchParams.append("pdf", "https://yourdomain.com/pdf/sample-france.pdf")

                window.location.href = redirectUrl.toString()
                }
            }

            const rzp = new Razorpay(options)
            rzp.open()
            }
        `}
        </Script>

    </>
  )
}
