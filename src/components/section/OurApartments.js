import dynamic from 'next/dynamic'
import SectionHead from '../SectionHead'
import OurApartmentsCard from '../ui/card/OurApartmentsCard'
import WarningTypography from '../ui/typography/WarningTypography'
import apartmentsContent from '../../content/our-apartments/apartments.json'
import apartmentsCards from '../../content/our-apartments/apartments-cards.json'

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
  containerClass: 'our-apartments__slider',
  dotListClass: 'our-apartments__slider-dots'
}

const OurApartments = () => {
  return (
    <section className='our-apartments'>
      <SectionHead
        title={apartmentsContent.title}
        subTitle={apartmentsContent.subTitle}
        subText={apartmentsContent.subText}
      />
      <WarningTypography typography={apartmentsContent.typography} />
      <SliderWrapper
        wrapperClass={'our-rooms__wrapper'}
        sliderOptions={options}
        widthChanged={992}
      >
        {apartmentsCards.map((room) => (
          <OurApartmentsCard key={room.id} {...room} />
        ))}
      </SliderWrapper>
    </section>
  )
}

export default OurApartments
