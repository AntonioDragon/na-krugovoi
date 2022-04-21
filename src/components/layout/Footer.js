import {useTranslation} from 'react-i18next'
import ExternalLink from '../ui/link/ExternalLink'

const Footer = () => {
  const year = new Date().getFullYear()
  const {t} = useTranslation()
  return (
    <footer className='footer'>
      <div className='footer__contacts'>
        <p className='footer__typography'>{t('footer').typography}</p>
        <div className='footer__contacts-links'>
          <svg
            className='footer__contacts-icon'
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 0 24 24'
            width='24px'
            fill='#000000'
          >
            <path d='M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z' />
          </svg>
          <ExternalLink
            className='footer__contacts-link'
            href={t('footer').contacts.phoneLink}
          >
            <p className='footer__contacts-text'>
              {t('footer').contacts.phone}
            </p>
          </ExternalLink>
          <ExternalLink
            className='footer__contacts-link'
            href={t('footer').contacts.dopPhoneLink}
          >
            <p className='footer__contacts-text'>
              {t('footer').contacts.dopPhone}
            </p>
          </ExternalLink>
          <ExternalLink
            className='footer__contacts-link'
            href={t('footer').contacts.mailLink}
          >
            <svg
              className='footer__contacts-icon'
              xmlns='http://www.w3.org/2000/svg'
              height='24px'
              viewBox='0 0 24 24'
              width='24px'
              fill='#000000'
            >
              <path d='M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z' />
            </svg>
            <p className='footer__contacts-text'>{t('footer').contacts.mail}</p>
          </ExternalLink>
          <ExternalLink
            className='footer__contacts-link'
            href={t('footer').contacts.addressLink}
          >
            <svg
              className='footer__contacts-icon'
              xmlns='http://www.w3.org/2000/svg'
              height='24px'
              viewBox='0 0 24 24'
              width='24px'
              fill='#000000'
            >
              <path d='M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z' />
            </svg>
            <p className='footer__contacts-text'>
              {t('footer').contacts.address}
            </p>
          </ExternalLink>
        </div>
      </div>
      <p className='footer__authorship'>{`© ${year} ${
        t('footer').authorship
      }`}</p>
    </footer>
  )
}

export default Footer
