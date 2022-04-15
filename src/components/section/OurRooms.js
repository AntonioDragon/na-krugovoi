import dynamic from 'next/dynamic'
import SectionHead from '../SectionHead'
import OurRoom from '../ui/card/OurRoomCard'
import WarningTypography from '../ui/typography/WarningTypography'
import roomsContent from '../../content/our-rooms/rooms.json'
import roomsCardsContent from '../../content/our-rooms/rooms-card.json'

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

const OurRooms = () => {
  return (
    <section className='our-rooms'>
      <SectionHead
        title={roomsContent.title}
        subTitle={roomsContent.subTitle}
        subText={roomsContent.subText}
      />
      <WarningTypography typography={roomsContent.typography} />
      <SliderWrapper
        wrapperClass={'our-rooms__wrapper'}
        sliderOptions={options}
        widthChanged={992}
      >
        {roomsCardsContent.map((room) => (
          <OurRoom key={room.id} {...room} />
        ))}
      </SliderWrapper>
    </section>
  )
}

export default OurRooms
