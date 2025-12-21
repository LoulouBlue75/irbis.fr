import Image from "next/image";
import Link from "next/link";

export default function MarketingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Executive Search With <br className="hidden md:inline" />
                <span className="text-blue-900 dark:text-blue-400">Adaptive Precision.</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                We combine human expertise with advanced AI to identify and engage the best leaders for your organization.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                href="/contact"
              >
                Discuss a mandate
              </Link>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                href="/candidates"
              >
                Submit your profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Data-Driven Insights</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Leveraging market data to find hidden talent pools and assess fit accurately.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Global Reach</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Access to a worldwide network of executive talent across various industries.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Tailored Approach</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Customized search strategies aligned with your specific business goals and culture.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
