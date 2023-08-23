import { forwardRef, memo } from 'react'

interface WithLinkProps {
  href: string
}

function withLink<T>(Component: React.ComponentType<T>) {
  const withLinkHOC = memo(
    forwardRef<React.ComponentType<T>, T & WithLinkProps>(function FC(props, ref) {
      const { href, ...withoutFcous } = props
      return (
        <a href={href} aria-label="test" target="_blank">
          <Component {...(withoutFcous as T)} ref={ref} />
        </a>
      )
    }),
  )

  return withLinkHOC
}

export default withLink
