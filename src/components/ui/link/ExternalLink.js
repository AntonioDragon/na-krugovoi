const ExternalLink = ({
  children,
  href,
  className = 'app-link',
  target,
  rel
}) => {
  return (
    <a className={className} target={target} href={href} rel={rel}>
      {children}
    </a>
  )
}

export default ExternalLink
