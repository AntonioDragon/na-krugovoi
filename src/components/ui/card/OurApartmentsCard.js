const OurApartmentsCard = ({id, image, images, onSetActiveSlider}) => {
  return (
    <div
      className='apartment-card'
      onClick={() => onSetActiveSlider(true, images)}
    >
      <p className='apartment-card__number'>{`Apartment №${id + 1}`}</p>
      <img className='apartment-card__image' src={image} alt='Apartment' />
    </div>
  )
}

export default OurApartmentsCard
