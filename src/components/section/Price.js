import SectionHead from '../SectionHead'
import AppTable from '../ui/table/AppTable'
import PriceContent from '../../content/price/price.json'
import PriceApartmentsColumns from '../../content/price/apartments/price-columns.json'
import PriceApartmentsData from '../../content/price/apartments/price-data.json'
import PriceRoomColumns from '../../content/price/rooms/price-columns.json'
import PriceRoomData from '../../content/price/rooms/price-data.json'

const Price = () => {
  return (
    <section className='price'>
      <SectionHead
        title={PriceContent.title}
        subTitle={PriceContent.subTitle}
        subText={PriceContent.subText}
      />

      <h3></h3>
      <AppTable columns={PriceRoomColumns} data={PriceRoomData} />
      <h3></h3>
      <AppTable columns={PriceApartmentsColumns} data={PriceApartmentsData} />
    </section>
  )
}

export default Price
