import footerContent from '../../content/footer/footer.json'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='footer'>
      <p className='footer__authorship'>{`© ${year} ${footerContent.authorship}`}</p>
    </footer>
  )
}

export default Footer
