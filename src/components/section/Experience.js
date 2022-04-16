import {useTranslation} from 'react-i18next'

const Experience = () => {
  const {t} = useTranslation()
  return (
    <section className='experience' id='experience'>
      <h1 className='experience__title'>
        <span className='experience__title--first-part'>
          {t('experience.titleFirstPart')}
        </span>
        <span className='experience__title--second-part'>
          {t('experience.titleSecondPart')}
        </span>
      </h1>
      <h1 className='experience__title experience__title--full'>
        {`${t('experience.titleFirstPart')} ${t('experience.titleSecondPart')}`}
      </h1>
      <div className='experience__typography-wrapper'>
        <h2 className='experience__sub-title'>{t('experience.subTitle')}</h2>
        {t('experience.text').map((typography, index) => (
          <div className='experience__typography' key={index}>
            <h3 className='experience__typography-title'>{typography.title}</h3>
            {typography.text.map((text, index) => (
              <p className='experience__typography-text' key={index}>
                {text}
              </p>
            ))}
          </div>
        ))}
        <img
          className='decorate__decorate-hair'
          src='/decorate-experience-2.png'
          alt=''
        />
      </div>
      <img
        className='decorate__decorate-feather'
        src='/decorate-experience-1.png'
        alt=''
      />
    </section>
  )
}

export default Experience
