export async function checkAuth(): Promise<boolean> {
    const res = await fetch("/api/check-auth", {
      credentials: "include", // ✅ VERY important to send cookies
    })
    return res.ok
  }