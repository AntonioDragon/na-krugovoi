const OurRoomCard = ({room, onSetActiveSlider}) => {
  return (
    <div className='room-card' onClick={() => onSetActiveSlider(true, room)}>
      <p className='room-card__number'>{`Room №${room.id + 1}`}</p>
      <img className='room-card__image' src={room.image} alt='Room' />
    </div>
  )
}

export default OurRoomCard
