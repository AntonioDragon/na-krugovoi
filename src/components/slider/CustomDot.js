import classNames from 'classnames'
import AppButton from '../ui/button/AppButton'

const CustomDot = ({onClick, ...rest}) => {
  const {index, active} = rest
  return (
    <AppButton
      key={index}
      onClick={onClick}
      className={classNames('slider-dots__dot', {
        'is-active': active
      })}
    />
  )
}

export default CustomDot
