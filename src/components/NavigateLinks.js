import {useTranslation} from 'react-i18next'
import {Link, animateScroll as scroll} from 'react-scroll'

const NavigateLinks = ({onSetIsNavModalActive}) => {
  const {t} = useTranslation()
  return (
    <div className='nav-links'>
      <h5 className='nav-links__title'>{t('sections')}:</h5>
      <ul className='nav-links__list'>
        {t('navSections').map((section, index) => (
          <li className='nav-links__list-element' key={index}>
            <Link
              className='nav-links__link'
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
    </div>
  )
}

export default NavigateLinks
