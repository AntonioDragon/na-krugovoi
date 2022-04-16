import classNames from 'classnames'
import {Link, animateScroll as scroll} from 'react-scroll'
import AppButton from '../ui/button/AppButton'
import {useTranslation} from 'react-i18next'
import {useCallback, useState} from 'react'
import i18next from 'i18next'

const NavModal = ({isActive, onSetIsNavModalActive}) => {
  const {t} = useTranslation()

  const [languageConfig, setLanguageConfig] = useState([
    {
      id: 0,
      language: 'eng',
      isActive: localStorage.getItem('i18nextLng') === 'eng'
    },
    {
      id: 1,
      language: 'ua',
      isActive: localStorage.getItem('i18nextLng') === 'ua'
    }
  ])

  const onChangeLanguage = useCallback(
    (language) => {
      const languageState = [...languageConfig]
      const configId = languageState.findIndex(
        (config) => config.language === language
      )
      if (!languageState[configId].isActive) {
        languageState.map((config) => (config.isActive = false))
        languageState[configId].isActive = true
        i18next.changeLanguage(language)
        setLanguageConfig(languageState)
        localStorage.setItem('i18nextLng', language)
      }
    },
    [languageConfig]
  )

  return (
    <>
      <AppButton
        onClick={onSetIsNavModalActive}
        className={classNames('burger-nav', {'is-active': isActive})}
      >
        <span className='burger-nav__icon' />
      </AppButton>
      <article className={classNames('nav-modal', {'is-active': isActive})}>
        <h5 className='nav-modal__title'>Sections:</h5>
        <ul className='nav-modal__list'>
          {t('navSections').map((section, index) => (
            <li className='nav-modal__list-element' key={index}>
              <Link
                className='nav-modal__link'
                onClick={() => onSetIsNavModalActive(false)}
                to={section.href}
                duration={1500}
                smooth={true}
              >
                {section.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className='nav-modal__languages'>
          {languageConfig.map((config) => (
            <AppButton
              onClick={() => onChangeLanguage(config.language)}
              key={config.id}
              className={classNames('nav-modal__language', {
                'is-active': config.isActive
              })}
            >
              {config.language}
            </AppButton>
          ))}
        </div>
      </article>
    </>
  )
}

export default NavModal
