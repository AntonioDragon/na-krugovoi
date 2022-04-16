const OurRoomCard = ({id, image, images, onSetActiveSlider}) => {
  return (
    <div className='room-card' onClick={() => onSetActiveSlider(true, images)}>
      <p className='room-card__number'>{`Room №${id + 1}`}</p>
      <img className='room-card__image' src={image} alt='Room' />
    </div>
  )
}

export default OurRoomCard
