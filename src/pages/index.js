import Layout from '../components/layout/Layout'
import Experience from '../components/section/Experience'
import OurApartments from '../components/section/OurApartments'
import OurRooms from '../components/section/OurRooms'
import OurSauna from '../components/section/OurSauna'
import Price from '../components/section/Price'

export default function Home() {
  return (
    <Layout>
      <Experience />
      <OurRooms />
      <OurApartments />
      <OurSauna />
      <Price />
    </Layout>
  )
}
