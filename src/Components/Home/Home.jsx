import React from 'react'
import Blog from '../Blog';
import Tabs from '../Tabs';
import Hero from '../Hero';
import HeroFlip from '../HeroFlip';
import Team from '../Team'


const Home = () => {
  return (
    <div>

<Tabs/>
    <Hero/>
    <Blog/>
    <HeroFlip/>
    <Team/>
 
  </div>
  )
}

export default Home;