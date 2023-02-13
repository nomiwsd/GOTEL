import React from 'react'
import Categories from './Categories/Categories'
import Header from './Header/Header'
import Jobs from './Jobs/Jobs'
import Landing from './Landingpage/Landing'

function Homepage() {
  return (
    <div>
      <Header/>
      <Landing/>
      <Categories/>
      <Jobs/>
    </div>
  )
}

export default Homepage
