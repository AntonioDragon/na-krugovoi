import {useCallback, useEffect, useState} from 'react'
import classNames from 'classnames'
import i18next from 'i18next'
import AppButton from './ui/button/AppButton'

const LanguageButtons = () => {
  const [languageConfig, setLanguageConfig] = useState([
    {
      id: 0,
      language: 'eng',
      isActive: false
    },
    {
      id: 1,
      language: 'ua',
      isActive: false
    }
  ])

  useEffect(() => {
    const languageState = [...languageConfig]
    const configId = languageState.findIndex(
      (config) => config.language === localStorage.getItem('i18nextLng')
    )
    if (configId !== -1) {
      languageState[configId].isActive = true
      i18next.changeLanguage(languageState[configId].language)
      setLanguageConfig(languageState)
    }
  }, [])

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
    <div className='language-buttons'>
      {languageConfig.map((config) => (
        <AppButton
          onClick={() => onChangeLanguage(config.language)}
          key={config.id}
          className={classNames('language-buttons__language', {
            'is-active': config.isActive
          })}
        >
          {config.language}
        </AppButton>
      ))}
    </div>
  )
}

export default LanguageButtons
