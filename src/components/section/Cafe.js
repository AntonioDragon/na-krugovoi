import React from 'react'
import {useTranslation} from 'react-i18next'
import SectionHead from '../SectionHead'

const Cafe = () => {
  const {t} = useTranslation()
  return (
    <section id='cafe' className='out-cafe'>
      <SectionHead
        title={t('cafe').title}
        subTitle={t('cafe').subTitle}
        subText={t('cafe').subText}
      />
      <div className='out-cafe__image-wrapper'>
        <img className='out-cafe__image' src={t('cafe').image} alt='Cafe' />
      </div>
    </section>
  )
}

export default Cafe
