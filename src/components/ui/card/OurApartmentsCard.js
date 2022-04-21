const OurApartmentsCard = ({room, onSetActiveSlider}) => {
  return (
    <div
      className='apartment-card'
      onClick={() => onSetActiveSlider(true, room)}
    >
      <p className='apartment-card__number'>{`Apartment №${room.id + 1}`}</p>
      <img className='apartment-card__image' src={room.image} alt='Apartment' />
    </div>
  )
}

export default OurApartmentsCard
