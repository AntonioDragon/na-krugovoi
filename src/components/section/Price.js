import SectionHead from '../SectionHead'
import AppTable from '../ui/table/AppTable'
import {useTranslation} from 'react-i18next'

const Price = () => {
  const {t} = useTranslation()
  return (
    <section className='price' id='price'>
      <SectionHead
        title={t('price').title}
        subTitle={t('price').subTitle}
        subText={t('price').subText}
      />
      <h3 className='price__title'>{t('price').roomsTitle}</h3>
      <AppTable columns={t('priceRoomsColumns')} data={t('priceRoomsData')} />
      <h3 className='price__title'>{t('price').apartmentsTitle}</h3>
      <AppTable
        columns={t('priceApartmentsColumns')}
        data={t('priceApartmentsData')}
      />
    </section>
  )
}

export default Price
