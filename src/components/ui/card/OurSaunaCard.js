const OurSaunaCard = ({id, image}) => {
  return (
    <div className='sauna-card'>
      <img className='sauna-card__image' src={image} alt='Card Sauna' />
    </div>
  )
}

export default OurSaunaCard
