import classNames from 'classnames'
import {useTranslation} from 'react-i18next'
import Slider from '../slider/Slider'
import AppButton from '../ui/button/AppButton'
import ModalCard from '../ui/card/ModalCard'

const responsive = {
  desktop: {
    breakpoint: {max: 5000, min: 992},
    items: 1
  },
  tablet: {
    breakpoint: {max: 992, min: 0},
    items: 1
  }
}

const SliderModal = ({roomSlides, onClose}) => {
  const {t} = useTranslation()

  return (
    <article className={classNames('slider-modal', {'is-active': true})}>
      <AppButton
        onClick={()=>onClose(false)}
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
        {roomSlides && (
          <div className='slider-modal__info'>
            <div className='slider-modal__typography'>
              <p className='slider-modal__text slider-modal__text--name'>
                №{roomSlides.id + 1}
              </p>
            </div>
            <div className='slider-modal__typography'>
              <p className='slider-modal__text slider-modal__text--name'>
                {t('priceText')}:
              </p>
              <p className='slider-modal__text'>{roomSlides.price}</p>
            </div>
            <div className='slider-modal__typography'>
              <p className='slider-modal__text slider-modal__text--name'>
                {t('places')}:
              </p>
              <p className='slider-modal__text'>{roomSlides.places}</p>
            </div>
            {roomSlides.rooms && (
              <div className='slider-modal__typography'>
                <p className='slider-modal__text slider-modal__text--name'>
                  {t('rooms')}:
                </p>
                <p className='slider-modal__text'>{roomSlides.rooms}</p>
              </div>
            )}
          </div>
        )}
        <div className='slider-modal__container'>
          <div className='slider-modal__slider-wrapper'>
            {roomSlides?.images && (
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
                removeArrowOnDeviceType={'tablet'}
              >
                {roomSlides.images.map((slide, index) => (
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
