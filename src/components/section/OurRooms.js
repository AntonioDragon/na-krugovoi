import dynamic from 'next/dynamic'
import {useTranslation} from 'react-i18next'
import SectionHead from '../SectionHead'
import OurRoom from '../ui/card/OurRoomCard'
import WarningTypography from '../ui/typography/WarningTypography'

const SliderWrapper = dynamic(async () => import('../slider/SliderWrapper'), {
  ssr: false
})

const responsive = {
  tablet: {
    breakpoint: {max: 992, min: 464},
    items: 2
  },
  mobile: {
    breakpoint: {max: 464, min: 0},
    items: 1
  }
}

const options = {
  responsive,
  swipeable: true,
  showDots: true,
  arrows: false,
  containerClass: 'our-rooms__slider',
  dotListClass: 'our-rooms__slider-dots'
}

const OurRooms = ({onSetActiveSlider}) => {
  const {t} = useTranslation()
  return (
    <section className='our-rooms' id='our-rooms'>
      <SectionHead
        title={t('ourRooms').title}
        subTitle={t('ourRooms').subTitle}
        subText={t('ourRooms').subText}
      />
      <WarningTypography typography={t('ourRooms').typography} />
      <SliderWrapper
        wrapperClass={'our-rooms__wrapper'}
        sliderOptions={options}
        widthChanged={992}
      >
        {t('ourRoomsCards').map((room) => (
          <OurRoom
            onSetActiveSlider={onSetActiveSlider}
            key={room.id}
            {...room}
          />
        ))}
      </SliderWrapper>
    </section>
  )
}

export default OurRooms
