import React from 'react'
import Banner from './banner'
import TopCards from './top-cards'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard'
}

const Dashboard = () => {
  return (
    <div>
      <Banner></Banner>
      <TopCards></TopCards>
    </div>
  )
}

export default Dashboard