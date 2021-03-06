import classNames from 'classnames'
import Logo from '../Logo'
import ExternalLink from '../ui/link/ExternalLink'
import AppButton from '../ui/button/AppButton'
import {useTranslation} from 'react-i18next'
import LanguageButtons from '../LanguageButtons'

const HeaderNav = ({isBurger, onSetIsBurger}) => {
  const {t} = useTranslation()
  return (
    <nav className={classNames('header-nav', {'is-active': isBurger})}>
      <div className='header-nav__wrapper'>
        <Logo isColum={true} />
      </div>
      <div className='header-nav__links'>
        <div className='header-nav__link-section'>
          <p className='header-nav__link-title'>{t('header').phoneText}:</p>
          <div className='header-nav__phone-links'>
            <svg
              className='header-nav__link-icon'
              width='16'
              height='21'
              viewBox='0 0 16 21'
            >
              <path
                d='M1.57039 5.8866C1.28389 3.9996 2.61439 2.3046 4.64689 1.6836C5.00757 1.57332 5.39673 1.60471 5.73507 1.77138C6.07342 1.93804 6.33549 2.22744 6.46789 2.5806L7.12039 4.3206C7.22543 4.60052 7.24442 4.90544 7.17493 5.19623C7.10544 5.48702 6.95064 5.75041 6.73039 5.9526L4.78939 7.7301C4.69371 7.8179 4.62242 7.92899 4.58246 8.05255C4.5425 8.1761 4.53524 8.3079 4.56139 8.4351L4.57939 8.5131L4.62589 8.7081C4.86728 9.65557 5.23508 10.5662 5.71939 11.4156C6.24695 12.3181 6.90166 13.1401 7.66339 13.8561L7.72339 13.9101C7.82029 13.9961 7.93782 14.0555 8.06453 14.0826C8.19123 14.1097 8.32279 14.1035 8.44639 14.0646L10.9559 13.2741C11.2411 13.1846 11.5465 13.1823 11.833 13.2675C12.1195 13.3528 12.374 13.5217 12.5639 13.7526L13.7519 15.1941C14.2469 15.7941 14.1869 16.6761 13.6184 17.2056C12.0629 18.6561 9.92389 18.9531 8.43589 17.7576C6.61193 16.2863 5.07432 14.4919 3.89989 12.4641C2.71592 10.4378 1.92508 8.20624 1.56889 5.8866H1.57039ZM6.13489 8.5341L7.74289 7.0581C8.18364 6.6539 8.49354 6.1272 8.63279 5.54561C8.77204 4.96402 8.73429 4.35408 8.52439 3.7941L7.87339 2.0541C7.6069 1.34347 7.07949 0.76119 6.39861 0.425907C5.71773 0.0906252 4.93464 0.027573 4.20889 0.249599C1.68439 1.0221 -0.342112 3.2856 0.0868879 6.1131C0.386888 8.0871 1.07839 10.5981 2.60389 13.2201C3.87095 15.4066 5.52957 17.3414 7.49689 18.9276C9.72889 20.7201 12.7079 20.1081 14.6429 18.3051C15.7919 17.2341 15.9089 15.4551 14.9114 14.2431L13.7234 12.8001C13.3433 12.3388 12.8342 12.0016 12.2612 11.8316C11.6882 11.6616 11.0775 11.6667 10.5074 11.8461L8.42389 12.5016C7.88594 11.9469 7.41474 11.3313 7.01989 10.6671C6.63847 9.99564 6.34123 9.27975 6.13489 8.5356V8.5341Z'
                fill='#514F4F'
              />
            </svg>
            <div className='header-nav__phone-wrapper'>
              <ExternalLink
                className='header-nav__link'
                href={t('header').phoneLink}
              >
                <span>{t('header').phone}</span>
              </ExternalLink>
              <ExternalLink
                className='header-nav__link'
                href={t('header').dopPhoneLink}
              >
                <span>{t('header').dopPhone}</span>
              </ExternalLink>
            </div>
          </div>
        </div>
        <div className='header-nav__link-section'>
          <p className='header-nav__link-title'>{t('header').emailText}:</p>
          <ExternalLink
            className='header-nav__link'
            href={t('header').emailLink}
          >
            <svg
              className='header-nav__link-icon'
              xmlns='http://www.w3.org/2000/svg'
              height='20'
              width='20'
            >
              <path d='M3.417 16.667Q2.688 16.667 2.177 16.156Q1.667 15.646 1.667 14.917V5.083Q1.667 4.354 2.177 3.844Q2.688 3.333 3.417 3.333H16.583Q17.312 3.333 17.823 3.844Q18.333 4.354 18.333 5.083V14.917Q18.333 15.646 17.823 16.156Q17.312 16.667 16.583 16.667ZM10 10.938 3.417 6.833V14.917Q3.417 14.917 3.417 14.917Q3.417 14.917 3.417 14.917H16.583Q16.583 14.917 16.583 14.917Q16.583 14.917 16.583 14.917V6.833ZM10 9.208 16.625 5.083H3.396ZM3.417 6.833V5.083V6.833V14.917Q3.438 14.917 3.438 14.917Q3.438 14.917 3.438 14.917H3.417Q3.417 14.917 3.417 14.917Q3.417 14.917 3.417 14.917Z' />
            </svg>
            <span>{t('header').email}</span>
          </ExternalLink>
        </div>
        <div className='header-nav__nav-section'>
          <LanguageButtons />
        </div>
      </div>
      <AppButton
        className={classNames('burger-button', {
          'is-active': isBurger
        })}
        onClick={() => onSetIsBurger(!isBurger)}
      >
        <span className='burger-button__icon' />
      </AppButton>
    </nav>
  )
}

export default HeaderNav
