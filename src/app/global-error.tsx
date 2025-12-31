'use client'

import * as Sentry from '@sentry/react'
import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">Une erreur est survenue</h2>
          <p className="mt-2 text-gray-600">{error.message}</p>
          <button
            onClick={reset}
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Réessayer
          </button>
        </div>
      </body>
    </html>
  )
}
