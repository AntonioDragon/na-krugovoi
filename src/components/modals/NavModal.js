import classNames from 'classnames'
import AppButton from '../ui/button/AppButton'
import LanguageButtons from '../LanguageButtons'
import NavigateLinks from '../NavigateLinks'

const NavModal = ({isActive, onSetIsNavModalActive}) => {
  return (
    <>
      <AppButton
        onClick={onSetIsNavModalActive}
        className={classNames('burger-nav', {'is-active': isActive})}
      >
        <span className='burger-nav__icon' />
      </AppButton>
      <article className={classNames('nav-modal', {'is-active': isActive})}>
        <NavigateLinks />
        <LanguageButtons />
      </article>
    </>
  )
}

export default NavModal
