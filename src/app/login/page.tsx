import { login, signup } from '../auth/actions'

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-primary">
      <h1 className="text-4xl font-bold mb-8 text-primary">Login</h1>
      <form className="flex flex-col gap-4 w-full max-w-md">
        <label htmlFor="email" className="text-secondary">Email:</label>
        <input id="email" name="email" type="email" required className="input" />
        
        <label htmlFor="password" className="text-secondary">Password:</label>
        <input id="password" name="password" type="password" required className="input" />
        
        <div className="flex gap-4 mt-4">
          <button formAction={login} className="button-primary flex-1">Log in</button>
          <button formAction={signup} className="button-secondary flex-1">Sign up</button>
        </div>
      </form>
    </div>
  )
}
