import {useCallback, useRef} from 'react'
import Carousel from 'react-multi-carousel'
import Arrow from './Arrow'
import CustomDot from './CustomDot'

const Slider = ({
  arrows = false,
  autoPlay = false,
  autoPlaySpeed = 5000,
  children,
  showDots,
  infinite,
  isModalSlider,
  isAlternativeArrow,
  removeArrowOnDeviceType,
  dotListClass,
  sliderClass,
  containerClass,
  renderDotsOutside,
  itemClass,
  responsive,
  ssr = false,
  centerMode = false,
  isArrowsPreHover = false
}) => {
  const carouselRef = useRef(null)

  const onClickNextSlide = useCallback(
    () => carouselRef.current.previous(),
    [carouselRef]
  )

  const onClickPreviousSlide = useCallback(
    () => carouselRef.current.next(),
    [carouselRef]
  )

  return (
    <Carousel
      ref={carouselRef}
      autoPlay={autoPlay}
      removeArrowOnDeviceType={removeArrowOnDeviceType}
      swipeable={true}
      arrows={arrows}
      renderDotsOutside={renderDotsOutside}
      customLeftArrow={
        <Arrow
          isLeft={true}
          isModalSlider={true}
          onClick={onClickNextSlide}
          isPrehover={isArrowsPreHover}
          isAlternativeArrow={isAlternativeArrow}
        />
      }
      customRightArrow={
        <Arrow
          onClick={onClickPreviousSlide}
          isPrehover={isArrowsPreHover}
          isAlternativeArrow={isAlternativeArrow}
        />
      }
      dotListClass={dotListClass}
      customDot={<CustomDot />}
      draggable={false}
      showDots={showDots}
      autoPlaySpeed={autoPlaySpeed}
      centerMode={centerMode}
      responsive={responsive}
      transitionDuration={400}
      ssr={ssr}
      sliderClass={sliderClass}
      containerClass={containerClass}
      infinite={infinite}
      itemClass={itemClass}
    >
      {children}
    </Carousel>
  )
}

export default Slider
