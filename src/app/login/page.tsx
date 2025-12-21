import { login, signup } from '../auth/actions'

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Login</h1>
      <form className="flex flex-col gap-4 w-full max-w-md">
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required className="border p-2 rounded text-black" />
        
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required className="border p-2 rounded text-black" />
        
        <div className="flex gap-4 mt-4">
          <button formAction={login} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 flex-1">Log in</button>
          <button formAction={signup} className="bg-green-500 text-white p-2 rounded hover:bg-green-600 flex-1">Sign up</button>
        </div>
      </form>
    </div>
  )
}
