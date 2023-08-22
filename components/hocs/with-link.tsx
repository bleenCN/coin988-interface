import { forwardRef, memo } from 'react'

interface WithLinkProps {
  href: string
}

function withLink<T>(Component: React.ComponentType<T>) {
  const withLinkHOC = memo(
    forwardRef<React.ComponentType<T>, T & WithLinkProps>(function FC(props, ref) {
      return (
        <a
          href={props.href}
          tabIndex={-1}
          aria-label="test"
          onClick={(e) => e.stopPropagation()}
          target="_blank"
        >
          <Component {...props} ref={ref} />
        </a>
      )
    }),
  )

  return withLinkHOC
}

export default withLink
