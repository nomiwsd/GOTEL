import React from 'react'
import Candidates from './Candidates/Candidates'
import Categories from './Categories/Categories'
import Footer from './Footer/Footer'
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
      <Candidates/>
      <Footer/>
    </div>
  )
}

export default Homepage
