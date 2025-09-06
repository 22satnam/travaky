// import Link from 'next/link'

// export default function NotFound() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
//       <div className="text-center px-4">
//         <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
//         <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
//         <p className="text-gray-600 mb-8 max-w-md mx-auto">
//           The page you're looking for doesn't exist or has been moved.
//         </p>
//         <Link 
//           href="/"
//           className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
//         >
//           Go Home
//         </Link>
//       </div>
//     </div>
//   )
// }
// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-xl w-full text-center px-6 py-12">
        {/* Keep your UI font/color system intact — no new colors */}
        <h1 className="text-4xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-4 text-base text-gray-600">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-xl px-4 py-2 border border-gray-200 hover:border-gray-300 transition"
          >
            Go to Home
          </Link>
          <Link
            href="/support"
            className="inline-flex items-center rounded-xl px-4 py-2 border border-gray-200 hover:border-gray-300 transition"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
}
