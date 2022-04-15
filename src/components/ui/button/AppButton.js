const AppButton = ({
  children,
  className = 'app-button',
  disabled = false,
  onClick,
  type = 'button'
}) => {
  return (
    <button
      className={className}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default AppButton
