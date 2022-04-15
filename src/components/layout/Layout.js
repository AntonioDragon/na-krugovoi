import {useState} from 'react'
import Head from 'next/head'

import HeaderNav from './HeaderNav'
import Hero from './Hero'
import Footer from './Footer'

const Layout = ({children}) => {
  const [isBurger, setIsBurger] = useState(false)

  return (
    <>
      <Head>
        <title>На Круговой</title>
      </Head>
      <header className='header'>
        <HeaderNav isBurger={isBurger} onSetIsBurger={setIsBurger} />
        <Hero />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
