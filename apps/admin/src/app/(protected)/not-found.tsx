import Link from "next/link";

export default function ProtectedNotFoundPage() {
  return (
    <div className="min-h-[calc(100vh-56px)] flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm">
        <p className="text-sm font-semibold text-[#23B349] mb-2">404</p>
        <h1 className="font-['Funnel_Display'] text-2xl font-bold text-[#333733] mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          The protected page you are looking for does not exist.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-[#23B349] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/pages"
            className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-[#333733] hover:bg-gray-50 transition-colors"
          >
            Open Pages
          </Link>
        </div>
      </div>
    </div>
  );
}
