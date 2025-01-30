import React from 'react'
import Header from '../_layout/header'
import Navigation from '../_layout/navigation'
import Footer from '../_layout/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Marketplace',
    template: '%s | Marketplace'
  }
}

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default layout