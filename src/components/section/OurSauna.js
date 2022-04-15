import Slider from '../slider/Slider'
import SectionHead from '../SectionHead'
import saunaContent from '../../content/our-sauna/sauna.json'
import saunaCads from '../../content/our-sauna/sauna-cards.json'
import OurSaunaCard from '../ui/card/OurSaunaCard'
import WarningTypography from '../ui/typography/WarningTypography'

const responsive = {
  superLargeDesktop: {
    breakpoint: {max: 4000, min: 3000},
    items: 5
  },
  desktop: {
    breakpoint: {max: 3000, min: 1024},
    items: 3
  },
  tablet: {
    breakpoint: {max: 1024, min: 464},
    items: 2
  },
  mobile: {
    breakpoint: {max: 464, min: 0},
    items: 1
  }
}
const OurSauna = () => {
  return (
    <section className='our-sauna'>
      <SectionHead
        title={saunaContent.title}
        subTitle={saunaContent.subTitle}
      />
      <WarningTypography typography={saunaContent.typography} />
      <Slider ssr={true} responsive={responsive} containerClass={'our-sauna__slider'}>
        {saunaCads.map((saunaCard) => (
          <OurSaunaCard key={saunaCard.id} {...saunaCard} />
        ))}
      </Slider>
    </section>
  )
}

export default OurSauna
