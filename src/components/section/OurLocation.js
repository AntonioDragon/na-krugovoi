import SectionHead from '../SectionHead'
import {useTranslation} from 'react-i18next'

const OurLocation = () => {
  const {t} = useTranslation()
  return (
    <section className='location' id='location'>
      <SectionHead
        title={t('location').title}
        subTitle={t('location').subTitle}
      />
      <iframe
        className='location__map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2678.478312723931!2d35.184568735648405!3d47.83032638849389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc5defe4daaaab%3A0xc317d0c6c485ff2f!2zItCd0LAg0JrRgNGD0LPQvtCy0ZbQuSIg0JPQvtGC0LXQu9GMINCh0LDRg9C90LA!5e0!3m2!1sru!2sua!4v1650009088527!5m2!1eng!2ua'
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </section>
  )
}

export default OurLocation
