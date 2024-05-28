import React from 'react'
import Banner from '../components/Banner'
import BestSellerBooks from '../components/BestSeller'
import FavBook from '../components/FavBook'
import PromoBanner from '../components/PromoBanner'
import OtherBooks from '../components/OtherBooks'
import Review from '../components/Review'


const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSellerBooks/>
      <FavBook />
      <PromoBanner />
      <OtherBooks/>
      <Review/>
    </div>
  )
}

export default Home