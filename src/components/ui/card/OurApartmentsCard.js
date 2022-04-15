const OurApartmentsCard = ({id, image}) => {
  return (
    <div className='apartment-card'>
      <p className='apartment-card__number'>{`Apartment №${id + 1}`}</p>
      <img className='apartment-card__image' src={image} alt='Apartment' />
    </div>
  )
}

export default OurApartmentsCard
