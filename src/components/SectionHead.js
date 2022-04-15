const SectionHead = ({title, subTitle, subText}) => {
  return (
    <div className='section-head'>
      <h2 className='section-head__title'>{title}</h2>
      {subTitle && <h3 className='section-head__sub-title'>{subTitle}</h3>}
      {subText && <p className='section-head__sub-text'>{subText}</p>}
    </div>
  )
}

export default SectionHead
