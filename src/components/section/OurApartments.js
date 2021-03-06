import dynamic from 'next/dynamic'
import SectionHead from '../SectionHead'
import OurApartmentsCard from '../ui/card/OurApartmentsCard'
import WarningTypography from '../ui/typography/WarningTypography'
import {useTranslation} from 'react-i18next'

const SliderWrapper = dynamic(async () => import('../slider/SliderWrapper'), {
  ssr: false
})

const responsive = {
  tablet: {
    breakpoint: {max: 992, min: 690},
    items: 2
  },
  mobile: {
    breakpoint: {max: 690, min: 0},
    items: 1
  }
}

const options = {
  responsive,
  swipeable: true,
  showDots: true,
  arrows: false,
  infinite: true,
  showDots: true,
  containerClass: 'our-apartments__slider',
  dotListClass: 'our-apartments__slider-dots',
  itemClass: 'our-apartments__slider-item'
}

const OurApartments = ({onSetActiveSlider}) => {
  const {t} = useTranslation()
  return (
    <section className='our-apartments' id='our-apartments'>
      <SectionHead
        title={t('ourApartments').title}
        subTitle={t('ourApartments').subTitle}
        subText={t('ourApartments').subText}
      />
      <SliderWrapper
        wrapperClass={'our-rooms__wrapper'}
        sliderOptions={options}
        widthChanged={992}
      >
        {t('ourApartmentsCards').map((room) => (
          <OurApartmentsCard
            onSetActiveSlider={onSetActiveSlider}
            key={room.id}
            room={room}
          />
        ))}
      </SliderWrapper>
    </section>
  )
}

export default OurApartments
