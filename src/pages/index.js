import {useCallback, useEffect, useState} from 'react'
import Layout from '../components/layout/Layout'
import Experience from '../components/section/Experience'
import Extras from '../components/section/Extras'
import OurApartments from '../components/section/OurApartments'
import OurRooms from '../components/section/OurRooms'
import OurSauna from '../components/section/OurSauna'
import Price from '../components/section/Price'
import OurLocation from '../components/section/OurLocation'
import Portal from '../components/ui/portal/Portal'
import SliderModal from '../components/modals/SliderModal'
import NavModal from '../components/modals/NavModal'
import i18next from 'i18next'
import Cafe from '../components/section/Cafe'

export default function Home() {
  const [roomSlides, setRoomSlides] = useState(null)
  const [isNavModalActive, setIsNavModalActive] = useState(false)
  const [isModalActive, setIsModalActive] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('i18nextLng')) {
      i18next.changeLanguage(localStorage.getItem('i18nextLng'))
    } else {
      i18next.changeLanguage('ua')
      localStorage.setItem('i18nextLng', 'ua')
    }
  }, [])

  const onSetActiveSlider = useCallback((state, room) => {
    setIsModalActive(state)
    if (room) {
      setRoomSlides(room)
    }
  }, [])

  const onSetIsNavModalActive = useCallback(
    () => setIsNavModalActive(!isNavModalActive),
    [isNavModalActive]
  )

  return (
    <>
      <Portal>
        {isModalActive && (
          <SliderModal roomSlides={roomSlides} onClose={onSetActiveSlider} />
        )}
        <NavModal
          isActive={isNavModalActive}
          onSetIsNavModalActive={onSetIsNavModalActive}
        />
      </Portal>
      <Layout>
        <Experience />
        <OurRooms onSetActiveSlider={onSetActiveSlider} />
        <OurApartments onSetActiveSlider={onSetActiveSlider} />
        <OurSauna />
        <Price />
        <Extras />
        <OurLocation />
        <Cafe />
      </Layout>
    </>
  )
}
