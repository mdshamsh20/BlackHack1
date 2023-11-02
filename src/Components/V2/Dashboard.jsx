import React from 'react'
import HorizontalButtons from './HorizontalButtons'
import Hero from './Hero'
import Buttons from './Buttons'
import Paragraph from './Paragraph'
import ClosingImage from './ClosingImage'
import NextTopic from './NextTopic'
const Dashboard = () => {
  return (
    <div>
      <HorizontalButtons/>
      <Hero/>
      <Buttons/>
      <Paragraph/>
      <ClosingImage/>
      <NextTopic/>
    </div>
  )
}

export default Dashboard
