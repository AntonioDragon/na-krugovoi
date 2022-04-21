const WarningTypography = ({typography}) => {
  console.log(typography)
  return (
    <div className='typography typography--warning'>
      <svg
        className='typography__icon'
        xmlns='http://www.w3.org/2000/svg'
        height='24px'
        viewBox='0 0 24 24'
        width='24px'
      >
        <path d='M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z' />
      </svg>
      <div>
        {typography.map((text, index) => (
          <p key={index} className='typography__text'>
            {text}
          </p>
        ))}
      </div>
    </div>
  )
}

export default WarningTypography
