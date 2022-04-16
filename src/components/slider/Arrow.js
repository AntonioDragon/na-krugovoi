import classNames from 'classnames'

const Arrow = ({
  isLeft = false,
  onClick,
  isModalSlider = false,
  isPrehover = false,
  isAlternativeArrow
}) => {
  return (
    <div
      className={classNames('slider-arrow', {
        'is-left': isLeft,
        'is-prehover': isPrehover,
        'is-alternative': isAlternativeArrow,
        'is-modal': isModalSlider
      })}
      onClick={onClick}
    >
      <svg
        className='slider-arrow__arrow'
        width='8'
        height='14'
        viewBox='0 0 8 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1 13L7 7L1 1'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default Arrow
