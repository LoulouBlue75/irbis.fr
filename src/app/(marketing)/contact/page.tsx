import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="bg-ivory min-h-[40vh] flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-display font-serif font-bold text-ink mb-4">
          Let's talk.
        </h1>
      </section>

      {/* SPLIT SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* FORM (60% -> 7 cols) */}
            <div className="md:col-span-7">
              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-ink">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-ink">Email</label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm font-medium text-ink">Company</label>
                  <Input id="company" placeholder="Your company" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="role" className="text-sm font-medium text-ink">Role (optional)</label>
                  <Input id="role" placeholder="Your role" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-ink">Message</label>
                  <textarea 
                    id="message" 
                    className="flex min-h-[120px] w-full rounded-md border border-gray-200 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-stone focus-visible:outline-none focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold/20 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="How can we help?"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full md:w-auto self-start">
                  Send
                </Button>
              </form>
            </div>

            {/* SIDEBAR (40% -> 5 cols) */}
            <div className="md:col-span-5 flex flex-col gap-12 pl-0 md:pl-12 border-l border-gray-100">
              <div>
                <h3 className="text-lg font-semibold text-ink mb-2">Paris</h3>
                <p className="text-stone">
                  Response within 24 hours.
                </p>
              </div>
              
              <div className="h-px bg-gray-100 w-full" />
              
              <div>
                <h3 className="text-lg font-semibold text-ink mb-2">Already a client?</h3>
                <Link href="/login" className="text-gold font-medium hover:underline">
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
