import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import AdSectionHome from '../../components/AdSectionHome/AdSectionHome'
import Category from '../../components/Category/Category'
import ProductCards from '../../components/ProductCards/ProductCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Category/>
      <AdSectionHome/>
      <ProductCards card_title={'Fresh recommendations'}/>
      <Footer/>
    </div>
  )
}

export default Home
