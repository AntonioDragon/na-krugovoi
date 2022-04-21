import Slider from '../slider/Slider'
import SectionHead from '../SectionHead'
import OurSaunaCard from '../ui/card/OurSaunaCard'
import WarningTypography from '../ui/typography/WarningTypography'
import {useTranslation} from 'react-i18next'

const responsive = {
  superLargeDesktop: {
    breakpoint: {max: 4000, min: 3000},
    items: 5
  },
  desktop: {
    breakpoint: {max: 3000, min: 1440},
    items: 3.5
  },
  tablet: {
    breakpoint: {max: 1440, min: 1225},
    items: 3
  },
  tablet_middle: {
    breakpoint: {max: 1225, min: 1014},
    items: 2.5
  },
  tablet_small: {
    breakpoint: {max: 1014, min: 900},
    items: 2.2
  },
  mobile: {
    breakpoint: {max: 800, min: 0},
    items: 1
  }
}
const OurSauna = () => {
  const {t} = useTranslation()
  return (
    <section className='our-sauna' id='our-sauna'>
      <SectionHead
        title={t('ourSauna').title}
        subTitle={t('ourSauna').subTitle}
      />
      <div className='our-sauna__typography-wrapper'>
        <WarningTypography typography={t('ourSauna').typography} />
      </div>
      <Slider
        arrows={true}
        ssr={true}
        infinite={true}
        responsive={responsive}
        sliderClass={'our-sauna__slider-track'}
        containerClass={'our-sauna__slider'}
        dotListClass={'our-sauna__slider-dots'}
        showDots={true}
        renderDotsOutside={true}
        itemClass={'our-sauna__slider-item'}
        removeArrowOnDeviceType={['tablet', 'mobile']}
      >
        {t('ourSaunaCards').map((saunaCard) => (
          <OurSaunaCard key={saunaCard.id} {...saunaCard} />
        ))}
      </Slider>
    </section>
  )
}

export default OurSauna
