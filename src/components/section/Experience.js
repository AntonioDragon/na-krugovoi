import experienceContent from '../../content/experience/experience.json'

const Experience = () => {
  const content = experienceContent
  return (
    <section className='experience'>
      <h1 className='experience__title'>
        <span className='experience__title--first-part'>
          {content.titleFirstPart}
        </span>
        <span className='experience__title--second-part'>
          {content.titleSecondPart}
        </span>
      </h1>
      <h1 className='experience__title experience__title--full'>
        {`${content.titleFirstPart} ${content.titleSecondPart}`}
      </h1>
      <div className='experience__typography-wrapper'>
        <h2 className='experience__sub-title'>{content.subTitle}</h2>
        {content.text.map((typography, index) => (
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
          className='experience__decorate-hair'
          src='/decorate-experience-2.png'
          alt=''
        />
      </div>
      <img
        className='experience__decorate-feather'
        src='/decorate-experience-1.png'
        alt=''
      />
    </section>
  )
}

export default Experience
