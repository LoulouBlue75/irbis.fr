import Image from "next/image";
import Link from "next/link";

export default function TaylorShiftPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                <span className="text-yellow-500">TAYLOR SHIFT</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                The premier recruitment platform for the global Luxury Retail industry.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-yellow-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                href="/taylor-shift/opportunities"
              >
                Find Opportunities
              </Link>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-gray-700 bg-black px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                href="/contact"
              >
                Hire Talent
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
