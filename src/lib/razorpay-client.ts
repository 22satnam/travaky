'use client'

type OpenCheckoutArgs = { invoiceId: string; amount: number; currency: string; orderId: string; key: string }

export async function openRazorpayCheckout(args: OpenCheckoutArgs) {
  const { invoiceId, amount, currency, orderId, key } = args

  const Razorpay = (window as any).Razorpay
  if (!Razorpay) {
    // load script if not present
    await new Promise<void>((resolve, reject) => {
      const s = document.createElement('script')
      s.src = 'https://checkout.razorpay.com/v1/checkout.js'
      s.onload = () => resolve()
      s.onerror = () => reject(new Error('Razorpay SDK failed to load'))
      document.body.appendChild(s)
    })
  }

  const rzp = new (window as any).Razorpay({
    key,
    amount,
    currency,
    order_id: orderId,
    handler: async (response: any) => {
      // verify on server
      await fetch('/api/payments/razorpay/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          invoiceId,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        }),
      })
    },
    theme: { color: '#0f172a' },
  })

  rzp.open()
}
