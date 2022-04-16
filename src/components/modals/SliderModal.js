import classNames from 'classnames'
import Slider from '../slider/Slider'
import AppButton from '../ui/button/AppButton'
import ModalCard from '../ui/card/ModalCard'

const responsive = {
  all: {
    breakpoint: {max: 5000, min: 0},
    items: 1
  }
}

const SliderModal = ({isActive, slides, onClose}) => {
  return (
    <article className={classNames('slider-modal', {'is-active': isActive})}>
      <AppButton
        onClick={() => onClose(false)}
        className='slider-modal__button-close'
      >
        <svg
          className='slider-modal__button-icon'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z' />
        </svg>
      </AppButton>
      <div className='slider-modal__wrapper'>
        <div className='slider-modal__container'>
          <div className='slider-modal__slider-wrapper'>
            {slides && (
              <Slider
                responsive={responsive}
                infinite={true}
                arrows={true}
                showDots={true}
                isModalSlider={true}
                sliderClass={'slider-modal__slider-track'}
                containerClass={'slider-modal__slider'}
                dotListClass={'slider-modal__slider-dots'}
                renderDotsOutside={true}
              >
                {slides.map((slide, index) => (
                  <ModalCard key={index} image={slide} />
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default SliderModal
