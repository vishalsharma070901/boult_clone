import React from 'react'
import Header from './Header'
import Hero from './Hero'

const Layout = () => {
  return (
    <div className='max-h-screen overflow-hidden'>
      <Header />
      <Hero />
    </div>
  )
}

export default Layout