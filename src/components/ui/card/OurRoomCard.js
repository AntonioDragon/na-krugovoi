import { useTranslation } from "react-i18next"

const OurRoomCard = ({room, onSetActiveSlider}) => {
  const {t} = useTranslation()
  return (
    <div className='room-card' onClick={() => onSetActiveSlider(true, room)}>
      <p className='room-card__number'>{`${t('room')} №${room.id + 1}`}</p>
      <img className='room-card__image' src={room.image} alt='Room' />
    </div>
  )
}

export default OurRoomCard
