'use client'

import { useRouter } from 'next-intl/client'
import * as React from 'react'

export function ProjectCard({
  projectId,
  children,
}: {
  projectId: string
  children: React.ReactNode
}) {
  const router = useRouter()

  return (
    <article
      className="flex flex-col rounded-xl border bg-card duration-200 hover:-translate-y-2"
      onMouseEnter={() => router.prefetch('/ecosystem/' + projectId)}
      onClick={() => router.push('/ecosystem/' + projectId)}
    >
      {children}
    </article>
  )
}

export function PropagationStopper({ onClick, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      {...props}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.(e)
      }}
    />
  )
}
