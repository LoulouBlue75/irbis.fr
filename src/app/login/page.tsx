import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-ivory flex items-center justify-center px-6">
      <div className="w-full max-w-md flex flex-col items-center text-center">
        <Link href="/" className="text-2xl font-bold font-serif tracking-tight text-ink mb-12">
          IRBIS
        </Link>
        
        <div className="w-full bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
          <h1 className="text-h2 font-serif font-semibold text-ink mb-2">
            Console
          </h1>
          <p className="text-stone mb-8">
            Where decisions take shape.
          </p>
          
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="email" className="text-sm font-medium text-ink">Email</label>
              <Input id="email" type="email" placeholder="name@company.com" />
            </div>
            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="password" className="text-sm font-medium text-ink">Password</label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <Button type="submit" size="lg" className="w-full mt-4">
              Enter
            </Button>
          </form>
          
          <div className="mt-6 flex justify-between text-sm">
            <Link href="/signup" className="text-stone hover:text-ink transition-colors">Create account</Link>
            <Link href="/forgot-password" className="text-stone hover:text-ink transition-colors">Forgot password</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
