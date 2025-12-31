'use client'

import { useEffect } from 'react'
import * as Sentry from '@sentry/react'

let initialized = false

export function SentryProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!initialized && process.env.NEXT_PUBLIC_SENTRY_DSN) {
      Sentry.init({
        dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
        tracesSampleRate: 1.0,
        replaysSessionSampleRate: 0.1,
        replaysOnErrorSampleRate: 1.0,
        integrations: [
          Sentry.replayIntegration({
            maskAllText: true,
            blockAllMedia: true,
          }),
        ],
        debug: false,
        environment: process.env.NODE_ENV,
      })
      initialized = true
    }
  }, [])

  return <>{children}</>
}
