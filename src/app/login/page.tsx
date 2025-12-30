import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-paper-cream flex items-center justify-center px-6">
      <div className="w-full max-w-md flex flex-col items-center text-center">
        {/* Logo */}
        <Link href="/" className="mb-12">
          <img
            src="/images/Irbis_Logo_full.svg"
            alt="Irbis Partners"
            className="h-16"
          />
        </Link>

        {/* Card */}
        <div className="w-full bg-paper-white border border-ink-navy/10 p-10">
          <h1 className="font-display text-3xl text-ink-navy mb-2 italic">
            Console
          </h1>
          <p className="text-ink-light mb-10">
            Where decisions take shape.
          </p>

          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 text-left">
              <label className="text-xs font-mono uppercase tracking-widest text-foil-bronze">
                Email
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full px-4 py-3 bg-paper-cream border border-ink-navy/10 text-ink-navy placeholder:text-ink-light/50 focus:border-foil-gold focus:outline-none transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2 text-left">
              <label className="text-xs font-mono uppercase tracking-widest text-foil-bronze">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-paper-cream border border-ink-navy/10 text-ink-navy placeholder:text-ink-light/50 focus:border-foil-gold focus:outline-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 mt-4 bg-foil-gold text-ink-navy font-medium tracking-wide transition-all duration-300 hover:bg-foil-bronze"
            >
              Enter
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-ink-navy/10 flex justify-between text-xs">
            <Link href="/signup" className="text-ink-light hover:text-foil-gold transition-colors">
              Create account
            </Link>
            <Link href="/forgot-password" className="text-ink-light hover:text-foil-gold transition-colors">
              Forgot password
            </Link>
          </div>
        </div>

        {/* Tagline */}
        <p className="mt-8 text-xs text-ink-light italic">
          House of Perspective
        </p>
      </div>
    </div>
  );
}
