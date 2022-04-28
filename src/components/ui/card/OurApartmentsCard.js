import {useTranslation} from 'react-i18next'

const OurApartmentsCard = ({room, onSetActiveSlider}) => {
  const {t} = useTranslation()
  return (
    <div
      className='apartment-card'
      onClick={() => onSetActiveSlider(true, room)}
    >
      <p className='apartment-card__number'>{`${t('apartment')} №${room.id + 1}`}</p>
      <img className='apartment-card__image' src={room.image} alt='Apartment' />
    </div>
  )
}

export default OurApartmentsCard
