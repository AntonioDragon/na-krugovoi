import Slider from './Slider'
import useResizeWindow from '../../hooks/useResizeWindow'

const SliderWrapper = ({
  children,
  widthChanged,
  wrapperClass,
  sliderOptions
}) => {
  const {width} = useResizeWindow()
  return (
    <>
      {width <= widthChanged ? (
        <Slider {...sliderOptions}>{children}</Slider>
      ) : (
        <div className={wrapperClass}>{children}</div>
      )}
    </>
  )
}

export default SliderWrapper
