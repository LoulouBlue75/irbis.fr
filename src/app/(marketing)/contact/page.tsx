import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="bg-ivory min-h-[40vh] flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-display mb-6">
          Let's talk.
        </h1>
      </section>

      {/* SPLIT SECTION */}
      <section className="bg-white py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            {/* FORM (60% -> 7 cols) */}
            <div className="md:col-span-7">
              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-text-primary">Name <span className="text-accent-danger">*</span></label>
                  <input id="name" className="input" placeholder="Your name" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-text-primary">Email <span className="text-accent-danger">*</span></label>
                  <input id="email" type="email" className="input" placeholder="Your email" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm font-medium text-text-primary">Company <span className="text-accent-danger">*</span></label>
                  <input id="company" className="input" placeholder="Your company" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="role" className="text-sm font-medium text-text-primary">Role</label>
                  <input id="role" className="input" placeholder="Your role" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-text-primary">Message <span className="text-accent-danger">*</span></label>
                  <textarea 
                    id="message" 
                    className="input min-h-[120px]"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full md:w-auto self-start">
                  Send
                </button>
              </form>
            </div>

            {/* SIDEBAR (40% -> 5 cols) */}
            <div className="md:col-span-5 flex flex-col gap-12 pl-0 md:pl-12 border-l border-border-secondary">
              <div>
                <h3 className="text-lg font-semibold mb-2">Paris</h3>
                <p className="text-text-secondary">
                  Response within 24h
                </p>
              </div>
              
              <div className="h-px bg-border-secondary w-full" />
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Already a client?</h3>
                <Link href="/login" className="text-accent-primary font-medium hover:underline">
                  Console →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
