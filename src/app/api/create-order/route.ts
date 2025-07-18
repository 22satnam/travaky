const PRICE_TABLE: Record<string, number> = {
    "Docs on Call": 7500,
    "Docs on Door": 9500,
    "Visa at Door": 12500,
  }
  
  const rupees = PRICE_TABLE[plan] * travelerCount
  const paise  = rupees * 100          // Razorpay wants paise
  
  /* 1️⃣  update the booking record right now -------------------- */
  await supabase
    .from("visa_applications")
    .update({ total_amount: rupees })
    .eq("id", bookingId)
  
  /* 2️⃣  send amount to Razorpay -------------------------------- */
  const razorpayOrder = await razorpay.orders.create({
    amount   : paise,
    currency : "INR",
    receipt  : `va_${bookingId}`,
  })
  