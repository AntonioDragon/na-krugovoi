import SectionHead from '../SectionHead'
import {useTranslation} from 'react-i18next'

const Extras = () => {
  const {t} = useTranslation()
  return (
    <section className='extras' id='extras'>
      <SectionHead title={t('extras').title} subTitle={t('extras').subTitle} />
      <ul className='extras__list'>
        {t('extrasList').map((extra, index) => (
          <li className='extras__list-element' key={index}>
            {extra}
          </li>
        ))}
        <img
          className='decorate__decorate-hair decorate__decorate-hair--fixed'
          src='/decorate-experience-2.png'
          alt=''
        />
      </ul>
      <img
        className='decorate__decorate-feather'
        src='/decorate-experience-1.png'
        alt=''
      />
    </section>
  )
}

export default Extras
